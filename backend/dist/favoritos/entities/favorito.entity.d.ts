import { Loja } from "src/loja/entities/loja.entity";
import { User } from "src/user/entities/user.entity";
export declare class Favorito {
    id: number;
    Loja: Loja;
    user: User;
}
