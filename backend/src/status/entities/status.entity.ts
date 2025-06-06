import { Compra } from "src/compra/entities/compra.entity";
import { Pagamento } from "src/pagamento/entities/pagamento.entity";
import { Entity, OneToMany } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity('status')
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Compra, (compra) => compra.status)
  compras: Compra[];

  @OneToMany(() => Pagamento, (pagamento) => pagamento.status)
  pagamentos: Pagamento[];
}
