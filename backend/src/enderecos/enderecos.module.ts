import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from './entities/endereco.entity';
import { User } from 'src/user/entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Endereco, User, Loja])],
  controllers: [EnderecosController],
  providers: [EnderecosService],
})
export class EnderecosModule {}
