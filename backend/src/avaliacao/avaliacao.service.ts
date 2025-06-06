import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from './entities/avaliacao.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Injectable()
export class AvaliacaoService {
   constructor(
    @InjectRepository(Avaliacao)
    private readonly repository: Repository<Avaliacao>,
    @InjectRepository(User)
    private readonly userrepository: Repository<User>,
    @InjectRepository(Loja)
    private readonly lojarepository: Repository<Loja>,
  ) {}

  async create(dto: CreateAvaliacaoDto, userId: number) {
    const user = await this.userrepository.findOne({where:{id:userId}})
    if(!user) {
        throw new ForbiddenException('Erro: Houve um erro ao localizar Usuário');
      }
    const loja = await this.lojarepository.findOne({ where: { id: dto.lojaId } });
    if (!loja) {
      throw new ForbiddenException('Erro: Houve um erro ao localizar Loja');
    }

    const avaliacao = this.repository.create({
      ...dto,
      user: user,
      loja: loja,
      data: new Date()
    });
    return this.repository.save(avaliacao);
  }

  async findAllByLoja(lojaId: number) {
    const loja = await this.lojarepository.find({ where: { id: lojaId } });
    if (!loja) {
      throw new ForbiddenException('Erro: Houve um erro ao localizar Loja');
    }
    const avaliacoes = await this.repository.find({
      where: { loja: loja },
      relations: ['user', 'loja'],
    });
    return avaliacoes;
  }

  async findAllByUser(userId: number) {
    const avaliacoes = await this.repository.find({ 
      where: {user: { id: userId } },
      relations: ['user', 'loja'] });
    if (!avaliacoes || avaliacoes.length === 0) { 
      throw new ForbiddenException('Erro: Nenhuma avaliação encontrada para este usuário');
    }
    return avaliacoes;
  }

  async findOne(id: number) {
    const avaliacao = await this.repository.findOne({ where: { id: id }, relations: ['user', 'loja'] });
    if (!avaliacao) {
      throw new ForbiddenException('Erro: Avaliação não encontrada');
    }
    return avaliacao;   
  }

 async update(id: number, dto: UpdateAvaliacaoDto, userId: number) {
    const avaliacao = await this.repository.findOne({ where: { id: id, user: { id: userId } } });
    if (!avaliacao) {
      throw new ForbiddenException('Erro: Avaliação não encontrada ou não pertence ao usuário');
    }
    this.repository.merge(avaliacao, dto);
    avaliacao.data = new Date(); // Atualiza a data para o momento da atualização
    return this.repository.save(avaliacao);
  }

  async remove(id: number) {
    const avaliacao = await this.repository.findOne({ where: { id: id } });
    if (!avaliacao) {
      throw new ForbiddenException('Erro: Avaliação não encontrada');
    }
    return this.repository.remove(avaliacao);
  }
}
