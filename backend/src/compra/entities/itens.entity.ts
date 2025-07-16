import { Entity, JoinColumn, ManyToOne } from "typeorm"
import { Compra } from "./compra.entity";
import { Produto } from "src/produtos/entities/produto.entity";

Entity()
export Class Itens{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    preco: number;
    
    @Column()
    quantidade: number;
    
    @ManyToOne(() => Produto, (produto) => produto.itens, { eager: true })
    @JoinColumn({ name: 'produtoId' })
    produto: Produto;
    
    @ManyToOne(() => Compra, (compra) => compra.itens, { cascade: true })
    compras: Compra;

}