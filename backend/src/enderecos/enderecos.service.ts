import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { Repository } from 'typeorm/repository/Repository';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Loja } from 'src/loja/entities/loja.entity';

@Injectable()
export class EnderecosService {
  constructor(
    @InjectRepository(Endereco)
    private readonly repository: Repository<Endereco>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Loja)
    private readonly lojaRepository: Repository<Loja>,
  ) {}

  async createForUser (dto: CreateEnderecoDto, userId: number) {
     const user = await this.userRepository.findOne({
      where: { id: userId }
    });
    if (!user) {
          throw new NotFoundException(`Usuário com ID ${userId} não encontrado`);
        }
    const endereco = this.repository.create({
      ...dto,
      cliente: user,
    });
    return this.repository.save(endereco);
  }

  async createForLoja (dto: CreateEnderecoDto, vendedorId: number) {
     const loja = await this.lojaRepository.findOne({
      where: { vendedor: { id: vendedorId }
     },
     relations: ['vendedor']
    });
    if (!loja) {
      throw new Error('Loja não encontrada para o vendedor informado.');
    }
    const endereco = this.repository.create({
      ...dto,
      loja: { id: loja.id },
    });
    return this.repository.save(endereco);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(enderecoId: number, userId : number , dto: UpdateEnderecoDto) {
   const endereco = await this.repository.findOne({
     where: {
       id: enderecoId,
       cliente: { id: userId }
     },
   });
   
   if (!endereco) {
     throw new ForbiddenException('O endereço não encontrado.');
   }
    this.repository.merge(endereco,dto);
    return this.repository.save(endereco);
  }
  async updateLoja( userId : number , dto: UpdateEnderecoDto) {
   const endereco = await this.repository.findOne({
     where: {
       loja: { vendedor:{id: userId }}
     },
   });
   
   if (!endereco) {
     throw new ForbiddenException('O endereço não encontrado.');
   }
    this.repository.merge(endereco,dto);
    return this.repository.save(endereco);
  }

  async remove(enderecoId: number, userId : number) {
    const endereco = await this.repository.findOne({
     where: {
       id: enderecoId,
       cliente: { id: userId }
     },
   });
   
   if (!endereco) {
     throw new ForbiddenException('O endereço não encontrado.');
   }
    return this.repository.remove(endereco);
  }
}

