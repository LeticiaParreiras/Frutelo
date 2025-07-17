import { Compra } from "src/compra/entities/compra.entity";
import { Loja } from "src/loja/entities/loja.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm";

@Entity('enderecos')
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @ManyToOne(() => User, user => user.endereco)
  @JoinColumn({ name: 'cliente_id' })
  cliente: User;

  
  @OneToOne(() => Loja, loja => loja.Endereco)
  loja: Loja;

}
