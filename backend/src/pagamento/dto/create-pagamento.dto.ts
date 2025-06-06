import { IsString, IsNumber } from 'class-validator';

export class CreatePagamentoDto {
  @IsString()
  metodo: string;

}
