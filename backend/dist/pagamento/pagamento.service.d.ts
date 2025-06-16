import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';
import { Repository } from 'typeorm';
export declare class PagamentoService {
    private pagamentoRepository;
    constructor(pagamentoRepository: Repository<Pagamento>);
    updateStatus(idPagamento: number, updatepagamentoDto: UpdatePagamentoDto, userId: number): Promise<Pagamento>;
}
