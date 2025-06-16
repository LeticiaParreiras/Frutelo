import { CreatePagamentoDto } from 'src/pagamento/dto/create-pagamento.dto';
export declare class CreateCompraDto {
    produtoId: number;
    quantidade: number;
    pagamento: CreatePagamentoDto;
    enderecoId: number;
}
