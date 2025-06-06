import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import { User} from 'src/user/entities/user.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Loja } from 'src/loja/entities/loja.entity';
import { Status } from 'src/status/entities/status.entity';


@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

    @Column()
  data: Date;

  @Column()
  quantidade: number;

  @OneToOne(() => Pagamento, pagamento => pagamento.compra, { cascade: true })
  @JoinColumn()
  pagamento: Pagamento;

  @ManyToOne(() => Produto, (produto) => produto.Compras, { cascade: true })
  @JoinColumn( {name: "produtoId"})
  produto: Produto;
  
  @ManyToOne(()=> Loja, (loja) => loja.compras, { eager: true })
  @JoinColumn({ name: 'lojaId' })
  loja: Loja;

  @ManyToOne(() => User, (cliente) => cliente.Compras,)
  @JoinColumn({ name: 'clienteId' })
  cliente: User;

  @ManyToOne(() => Endereco, (endereco) => endereco.compras, { eager: true })
  @JoinColumn({ name: 'enderecoId' })
  Endereco: Endereco;

  @ManyToOne(() => Status, (status) => status.compras, {eager: true })
@JoinColumn({ name: 'status_id' })
status: Status;

  

  
}