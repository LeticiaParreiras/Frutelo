import {  IsDateString, IsNumber, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePagamentoDto } from 'src/pagamento/dto/create-pagamento.dto';

export class CreateCompraDto {

  @IsNumber()
  produtoId: number;

  @IsNumber()
  @Min(0, { message: 'O valor deve ser positivo' })
  quantidade: number;

  @ValidateNested()
  @Type(() => CreatePagamentoDto)
  pagamento: CreatePagamentoDto;

  @IsNumber()
  enderecoId: number;

}
