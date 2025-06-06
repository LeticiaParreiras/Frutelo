import { IsNumber, IsString, Min } from "class-validator";

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsNumber()
  @Min(0, { message: 'O valor deve ser positivo' })
  preco: number;

  @IsString()
  descricao: string;

  @IsNumber()
  @Min(0, { message: 'A quantidade deve ser positiva' })
  quantidade: number;

}