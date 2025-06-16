import { Compra } from 'src/compra/entities/compra.entity';
import { Status } from 'src/status/entities/status.entity';
export declare class Pagamento {
    id: number;
    metodo: string;
    valor: number;
    compra: Compra;
    status: Status;
}
