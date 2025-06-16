import { Loja } from "src/loja/entities/loja.entity";
import { User } from "src/user/entities/user.entity";
export declare class Avaliacao {
    id: number;
    nota: number;
    comentario: string;
    loja: Loja;
    user: User;
    data: Date;
}
