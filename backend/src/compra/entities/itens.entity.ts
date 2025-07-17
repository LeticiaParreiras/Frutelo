import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Compra } from "./compra.entity";
import { Produto } from "src/produtos/entities/produto.entity";
import { Loja } from "src/loja/entities/loja.entity";

@Entity()
export class Itens{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;
    
    @Column()
    quantidade: number;
    
    @ManyToOne(() => Produto, (produto) => produto.Itens, { eager: true })
    @JoinColumn({ name: 'produtoId' })
    produto: Produto;

    @ManyToOne(() => Loja, (loja) => loja.Itens, { eager: true })
    @JoinColumn({ name: 'lojaId' }) 
    loja: Loja;
    
    @ManyToOne(() => Compra, (compra) => compra.itens, {cascade: true })
    @JoinColumn({ name: 'compraId' }) 
    compra: Compra;

}