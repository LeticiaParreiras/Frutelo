import { Loja } from "src/loja/entities/loja.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Favorito {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Loja, (Loja) => Loja.favorito)
    Loja: Loja

    @ManyToOne(()=> User, (user)=> user.favorito)
    user: User


}
