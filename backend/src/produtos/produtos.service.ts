import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Loja } from 'src/loja/entities/loja.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
    @InjectRepository(Loja)
    private readonly lojaRepository: Repository<Loja>,
  ) {}

  async create(dto: CreateProdutoDto, vendedorId: number) {
    const loja = await this.lojaRepository.findOne({
      where: { vendedor: { id: vendedorId }
     },
     relations: ['vendedor']
    });
    if (!loja) {
      throw new Error('Erro ao buscar loja');
    }
    const produto = this.repository.create({
      ...dto,
      loja: { id: loja.id },
    });
    return this.repository.save(produto);
    
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateProdutoDto, vendedorId: number) {
     const produto = await this.repository.findOne({
      where: {
        id: id,
        loja: { vendedor: { id: vendedorId } }
      }
     });
    if(!produto) throw new Error('Produto não encontrado.');
    this.repository.merge(produto, dto);
    return this.repository.save(produto);
  }
  async remove(id: number, vendedorId: number) {
    const produto = await this.repository.findOne({
      where: {
        id: id,
        loja: { vendedor: { id: vendedorId } }
      }
     });
    if(!produto) throw new Error('Produto não encontrado.');
    return this.repository.remove(produto);
  }
  async admRemove(id: number) {
    const produto = await this.repository.findOneBy({id: id});
    if(!produto) throw new Error('Produto não encontrado.');
    return this.repository.remove(produto);
  }
}
