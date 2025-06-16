import { Compra } from "src/compra/entities/compra.entity";
import { Loja } from "src/loja/entities/loja.entity";
import { User } from "src/user/entities/user.entity";
export declare class Endereco {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    cliente: User;
    loja: Loja;
    compras: Compra[];
}
