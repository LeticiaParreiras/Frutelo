import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Itens } from './itens.entity';
import { User} from 'src/user/entities/user.entity';
@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

 @OneToMany(() => Itens, (itens) => itens.compra,)
itens: Itens[];
  
  @ManyToOne(() => User, (cliente) => cliente.Compras,)
  @JoinColumn({ name: 'clienteId' })
  cliente: User;
  
}