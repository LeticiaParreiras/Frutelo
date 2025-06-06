import { Compra } from "src/compra/entities/compra.entity";
import { Loja } from "src/loja/entities/loja.entity";
import { Column, Entity,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;

    @Column("decimal")
    preco: number;

    @Column()
    descricao: string;

    @Column()
    quantidade: number;

    @ManyToOne(() => Loja, (loja) => loja.produtos)
    @JoinColumn({ name: 'loja_id' }) 
    loja: Loja;
    
    @OneToMany(() => Compra, (Compra) => Compra.produto)
    Compras: Compra[];
}