import { Module } from '@nestjs/common';
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';
import { Loja } from './entities/loja.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Compra } from 'src/compra/entities/compra.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loja, User, Compra, Endereco])],
  controllers: [LojaController],
  providers: [LojaService],
  exports: [TypeOrmModule]
})
export class LojaModule {}
