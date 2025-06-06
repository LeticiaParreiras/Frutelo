import { PartialType } from '@nestjs/swagger';
import { CreatePagamentoDto } from './create-pagamento.dto';
import { IsNumber } from 'class-validator';

export class UpdatePagamentoDto extends PartialType(CreatePagamentoDto) {
    @IsNumber()
    statusId: number;
}
