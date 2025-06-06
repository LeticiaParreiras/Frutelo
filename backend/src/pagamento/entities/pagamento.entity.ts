import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Compra } from 'src/compra/entities/compra.entity';
import { Status } from 'src/status/entities/status.entity';


@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  metodo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @OneToOne(() => Compra, compra => compra.pagamento)
  compra: Compra;

  @ManyToOne(() => Status, status => status.pagamentos, { eager: true })
@JoinColumn({ name: 'status_id' })
status: Status;
}