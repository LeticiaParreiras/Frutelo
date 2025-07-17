import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Loja } from './entities/loja.entity';
import { Repository } from 'typeorm/repository/Repository';
import { Produto } from 'src/produtos/entities/produto.entity';
import { User } from 'src/user/entities/user.entity';
import { Compra } from 'src/compra/entities/compra.entity';


@Injectable()
export class LojaService {
  constructor(
    @InjectRepository(Loja)
    private readonly repository: Repository<Loja>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,

  ) {}

  async create(dto: CreateLojaDto, userId: number) {
    const user = await this.userRepository.findOne({ where:
      { id: userId},
      relations: ['loja'],
    }, );
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado`);
    }
    const loja = this.repository.create({
      ...dto,
      vendedor: user,
    });
    return this.repository.save(loja);
}

  findAll(){
    return this.repository.find();
}
findOne(id: number) {
    return this.repository.findOne({
        where: { id: id },
        relations: ['Endereco','produtos'],
    });
}

async getLojaProdutos(lojaId: number): Promise<Produto[]> {
    const loja = await this.repository.findOne({
      where: { id: lojaId },
      relations: ['produtos'],
    });

    if (!loja) {
      throw new NotFoundException(`Loja com ID ${lojaId} não encontrado`);
    }

    return loja.produtos;
  }

  async myLoja(userId: number): Promise<Loja> {
    const loja = await this.repository.findOne({
      where: { vendedor: { id: userId } },
    });
    if (!loja) {
      throw new NotFoundException(`Loja ainda não foi criada`);
    }
    return loja;
  }

async getMyProdutos(userId: number): Promise<Produto[]> {
    const loja = await this.repository.findOne({
      where: {vendedor:{ id: userId }},
      relations: ['produtos'],
    });

    if (!loja) {
      throw new NotFoundException(`Não foram encontrados produtos `);
    }

    return loja.produtos;
  }
  /*
   async findAComprasByLoja(userId: number){
      const compras = await this.compraRepository.find({
        where: { loja:{vendedor:{ id: userId } }},
        relations: ['loja', 'pagamento', 'produto', 'cliente'],
      });
  
      if (compras.length === 0) {
        throw new NotFoundException('Nenhuma compra encontrada para esta loja.');
      }
  
      return compras;
    }
      */

  async getLojaEndereco(userId : number) {
      const endereco = await this.repository.findOne({
       where: {
         vendedor: { id: userId }
       },
       relations: ['enderecos'],
     });
     
     if (!endereco) return null
  
     return endereco
    }

  async update (userId: number, dto: UpdateLojaDto){
    const loja = await this.repository.findOneBy({
         vendedor: { id: userId }
       });
    if(!loja) return null;
    this.repository.merge(loja, dto);
    return this.repository.save(loja);
}
async remove(lojaId: number) {
    const loja = await this.repository.findOneBy({ id: lojaId });
    if (!loja) {
      throw new NotFoundException(`Loja com ID ${lojaId} não encontrada`);
    }
    return this.repository.remove(loja);
  }
}
