import { Module } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao } from './entities/avaliacao.entity';
import { User } from 'src/user/entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao, User, Loja])],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
