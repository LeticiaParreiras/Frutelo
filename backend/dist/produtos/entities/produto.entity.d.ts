import { Compra } from "src/compra/entities/compra.entity";
import { Loja } from "src/loja/entities/loja.entity";
export declare class Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    loja: Loja;
    Compras: Compra[];
}
