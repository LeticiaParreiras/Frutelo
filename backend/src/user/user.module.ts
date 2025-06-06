import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';
import { Compra } from 'src/compra/entities/compra.entity';
import { LojaModule } from 'src/loja/loja.module';
import { Endereco } from 'src/enderecos/entities/endereco.entity';


@Module({
  imports:[TypeOrmModule.forFeature([User, Loja, Compra, Endereco]),
  LojaModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
