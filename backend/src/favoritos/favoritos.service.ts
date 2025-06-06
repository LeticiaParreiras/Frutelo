import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { Favorito } from './entities/favorito.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Injectable()
export class FavoritosService {
  constructor(
      @InjectRepository(Favorito)
      private readonly repository: Repository<Favorito>,
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
      @InjectRepository(Loja)
      private readonly lojaRepository: Repository<Loja>
    ){}
  async create(dto: CreateFavoritoDto, userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if(!user) {
        throw new ForbiddenException('Erro: Houve um erro ao localizar Usuário');
      }
    const loja = await this.lojaRepository.findOne({ where: { id: dto.idLoja } })
     if(!loja) {
        throw new ForbiddenException('Erro: Houve um erro ao localizar loja');
      }
    const fav = this.repository.create({
      ...dto,
      user: user,
      Loja: loja,
    });
    return this.repository.save(fav);
  }

  async findAll(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if(!user) {
        throw new ForbiddenException('Erro: Houve um erro ao localizar Usuário');
      }
    const favs = await this.repository.find({ where: { user: user }, relations: ['Loja','user'] });

    return favs;
  }

  findOne(id: number) {
    return `This action returns a #${id} favorito`;
  }

  update(id: number, updateFavoritoDto: UpdateFavoritoDto) {
    return `This action updates a #${id} favorito`;
  }

  async remove(lojaId: number, userId: number) {
  const user = await this.userRepository.findOne({ where: { id: userId } });
    if(!user) {
        throw new ForbiddenException('Erro: Houve um erro ao localizar Usuário');
      }
    const loja = await this.lojaRepository.findOne({ where: { id: lojaId } })
     if(!loja) {
        throw new ForbiddenException('Erro: Houve um erro ao localizar loja');
      }
    const fav = await this.repository.find({
      where: {user: user, Loja:loja}
    })

    if (fav.length === 0)
       throw new NotFoundException('Favorito não encontrado');
    
    return this.repository.remove(fav)
  }
}
