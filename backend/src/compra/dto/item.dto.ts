import { IsNumber, Min } from "class-validator";
export class ItemDto {
  @IsNumber()
  produtoId: number;

  @IsNumber()
  @Min(0, { message: 'O valor deve ser positivo' })
  quantidade: number;

}