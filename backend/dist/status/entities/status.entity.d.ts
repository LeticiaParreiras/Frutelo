import { Compra } from "src/compra/entities/compra.entity";
import { Pagamento } from "src/pagamento/entities/pagamento.entity";
export declare class Status {
    id: number;
    nome: string;
    compras: Compra[];
    pagamentos: Pagamento[];
}
