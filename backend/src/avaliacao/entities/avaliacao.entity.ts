import { Loja } from "src/loja/entities/loja.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Avaliacao {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'int', width: 1 })
    nota: number;

   @Column({ type: 'text', nullable: true })
  comentario: string;

    @ManyToOne(()=> Loja, (loja) => loja.avaliacao)
    loja : Loja

    @ManyToOne(()=>User, (user) => user.avaliacao )
    user: User

    @Column()
    data: Date;

}
