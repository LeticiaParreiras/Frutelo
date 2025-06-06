import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToOne, OneToMany, JoinColumn, ManyToOne, } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Loja } from 'src/loja/entities/loja.entity';
import { Compra } from 'src/compra/entities/compra.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Favorito } from 'src/favoritos/entities/favorito.entity';
export enum UserRole {
  USER = 'USER',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  nomeUsuario: string;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column({unique: true})
  email: string;

  @Column({
    type: 'varchar',
    default: UserRole.USER
  })
  role: UserRole;

   @OneToOne(() => Loja, loja => loja.vendedor, )
    @JoinColumn()
    loja: Loja;

  @OneToMany(() => Compra, (Compra) => Compra.cliente, )
    Compras: Compra[];

    @OneToMany(()=> Endereco, (endereco) => endereco.cliente)
    endereco: Endereco[];

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.user)
    avaliacao: Avaliacao[];

    @OneToMany(()=> Favorito, (favorito)=> favorito.user)
      favorito: Favorito[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.senha) {
      this.senha = await bcrypt.hash(this.senha, 10);
    }

  }
}
