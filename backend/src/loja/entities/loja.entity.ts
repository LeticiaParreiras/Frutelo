import { Avaliacao } from "src/avaliacao/entities/avaliacao.entity";
import { Compra } from "src/compra/entities/compra.entity";
import { Endereco } from "src/enderecos/entities/endereco.entity";
import { Favorito } from "src/favoritos/entities/favorito.entity";
import { Produto } from "src/produtos/entities/produto.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";

@Entity("Loja")
export class Loja {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @OneToMany(() => Produto, (produto) => produto.loja)
    produtos: Produto[];

   @OneToOne(() => User, vendedor => vendedor.loja, { cascade: true })
    @JoinColumn()
    vendedor: User;

    @OneToOne(() => Endereco, (Endereco) => Endereco.loja, { eager: true })
    @JoinColumn({ name: 'endereco_id' })
    Endereco: Endereco;

    @OneToMany(() => Compra, (compras) => compras.loja)
    compras: Compra[];

    @OneToMany(() => Avaliacao,(avaliacao) => avaliacao.loja)
    avaliacao: Avaliacao[];

    @OneToMany(()=> Favorito, (favorito) => favorito.Loja)
    favorito: Favorito[];
}
