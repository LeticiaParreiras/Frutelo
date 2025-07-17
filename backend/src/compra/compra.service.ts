import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { Repository } from 'typeorm';
import { CreateCompraDto } from './dto/create-compra.dto';
import { Produto } from 'src/produtos/entities/produto.entity';
import { User } from 'src/user/entities/user.entity';
import { Itens } from './entities/itens.entity';
@Injectable()
export class CompraService {

  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Itens)
    private itemRepository: Repository<Itens>,
  ) {}

  async create(dto: CreateCompraDto,  userId: number) {
  const cliente = await this.userRepository.findOne({
  where: { id: userId },
});

if (!cliente) {
  throw new ForbiddenException('Erro: Usuário não autorizado a realizar compras.');
}

  const compra = this.compraRepository.create({
    cliente: cliente,
    itens: []
  });
    for (const item of dto.items) {
    const produto = await this.produtoRepository.findOne({
      where: { id: item.produtoId },
      relations: ['loja'],
    });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }else {
       const novoItem = this.itemRepository.create({
        produto,
        preco: produto.preco,
        quantidade: item.quantidade,
        loja: produto.loja,
        compra,
      });

  compra.itens.push(await this.itemRepository.save(novoItem));
    } 
  }  
  return await this.compraRepository.save(compra);
}

  async findAll() {
    return await this.compraRepository.find({ relations: [ 'produto','cliente','loja'] });
  }

  

  async findOne(id: number) {
    const compra = await this.compraRepository.findOne({
      where: { id },
      relations: ['pagamento', 'produto'],
    });

    return compra;
  }

  async remove(id: number) {
    const compra = await this.findOne(id);
    if (!compra) return null;
    return await this.compraRepository.remove(compra);
  }
}