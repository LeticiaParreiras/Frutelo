import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { itens } from './itens.entity';
import { User} from 'src/user/entities/user.entity';
@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Pagamento, pagamento => pagamento.compra, { cascade: true, nullable: true })
  @JoinColumn()
  pagamento: Pagamento;

  @OneToMany(() => itens, (itens) => itens.Compras, { cascade: true })
  itens: itens[];
  
  @ManyToOne(() => User, (cliente) => cliente.Compras,)
  @JoinColumn({ name: 'clienteId' })
  cliente: User;
  
}