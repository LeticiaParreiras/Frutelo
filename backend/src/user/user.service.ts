import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Compra } from '../compra/entities/compra.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,

  ) {}
 

    async getUserCompras(userId: number): Promise<Compra[]> {
    const compras = await this.compraRepository.find({
    where: {
      cliente: {
        id: userId,
      },
    },
    relations: ['itens', 'itens.produto', 'itens.loja'],
  });

  return compras;
  }
  
  async getUserEnderecos(userId : number) {
      const endereco = await this.enderecoRepository.find({
       where: {
         cliente: { id: userId }
       },
     });
     
     if (!endereco) return null
  
     return endereco
    }

  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async getUser(id: number){
    return this.userRepository.findOneBy({ id});
  }
  
}
