import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { Repository } from 'typeorm';
import { CreateCompraDto } from './dto/create-compra.dto';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { User } from 'src/user/entities/user.entity';
import { ItemDto } from './dto/item.dto';
@Injectable()
export class CompraService {

  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
     @InjectRepository(Pagamento)
  private pagamentoRepository: Repository<Pagamento>,

  @InjectRepository(Produto)
  private produtoRepository: Repository<Produto>,
  @InjectRepository(User)
  private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateCompraDto,  userId: number) {
  for (const item of dto.items) {
    const produto = await this.produtoRepository.findOne({
      where: { id: item.produtoId },
    });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
  }

  const cliente = await this.userRepository.findOne({
  where: { id: userId },
});

if (!cliente) {
  throw new ForbiddenException('Erro: Usuário não autorizado a realizar compras.');
}

  const compra = this.compraRepository.create({
    cliente: cliente,
     itens: dto.items.map(item => ({
      preco: item.preco,
      quantidade: item.quantidade,
      produto: { id: item.produtoId } as Produto, // Associa o produto pelo ID
      compra: compra, // Associa a compra
    })),
  });
  return await this.compraRepository.save(compra);
  }

  async findAll() {
    return await this.compraRepository.find({ relations: ['pagamento', 'produto','cliente','loja'] });
  }

 

  async findOne(id: number) {
    const compra = await this.compraRepository.findOne({
      where: { id },
      relations: ['pagamento', 'produto'],
    });

    return compra;
  }

  async updateStatus(idCompra: number, userId: number, updateCompraDto: UpdateCompraDto) {
    const compra = await this.compraRepository.findOne({
      where: { id: idCompra, cliente: { id: userId } },
      relations: ['pagamento'],
    });
    if (!compra) throw new NotFoundException('Compra não encontrada');

  if (compra.status.id !== 1) {
    throw new ForbiddenException('A compra já foi processada ou cancelada.');
  }

  switch (updateCompraDto.statusId) {
    case 2: // Concluir
      if (compra.pagamento.status.id !== 2) {
        throw new ForbiddenException('O pagamento ainda não foi concluído.');
      }
      compra.status.id = 2;
      compra.status.nome = "cocluido";
      break;

    case 3: // Cancelar
      compra.status.id = 3;
      compra.status.nome = "cancelado";
      compra.pagamento.status.id = 3;
      compra.pagamento.status.nome = "cancelado";
      await this.pagamentoRepository.save(compra.pagamento);
      break;

    default:
      throw new NotFoundException('Status indisponível');
  }

  return this.compraRepository.save(compra);
}

  async remove(id: number) {
    const compra = await this.findOne(id);
    if (!compra) return null;
    return await this.compraRepository.remove(compra);
  }
}