import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';
import { Favorito } from './entities/favorito.entity';
import { Loja } from 'src/loja/entities/loja.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorito, Loja, User])],
  controllers: [FavoritosController],
  providers: [FavoritosService],
})
export class FavoritosModule {}
