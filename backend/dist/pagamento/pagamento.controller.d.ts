import { PagamentoService } from './pagamento.service';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
export declare class PagamentoController {
    private readonly pagamentoService;
    constructor(pagamentoService: PagamentoService);
    updateStatus(id: string, updatePagamentoDto: UpdatePagamentoDto, req: any): Promise<import("./entities/pagamento.entity").Pagamento>;
}
