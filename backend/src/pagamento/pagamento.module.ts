import { Module } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PagamentoController } from './pagamento.controller';
import { Pagamento } from './entities/pagamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/status/entities/status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento, Status])],
  controllers: [PagamentoController],
  providers: [PagamentoService],
})
export class PagamentoModule {}
