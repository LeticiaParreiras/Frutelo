import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';
import { LojaModule } from './loja/loja.module';
import { CompraModule } from './compra/compra.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { StatusModule } from './status/status.module';
import { EnderecosModule } from './enderecos/enderecos.module';
//import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';


@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
}),
    UserModule, AuthModule, ProdutosModule, LojaModule, CompraModule, PagamentoModule, EnderecosModule, StatusModule, FavoritosModule, AvaliacaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
