import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import { User } from 'src/user/entities/user.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Loja } from 'src/loja/entities/loja.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Compra, Pagamento, Produto, User, Endereco, Loja])],
  controllers: [CompraController],
  providers: [CompraService],
})
export class CompraModule {}
