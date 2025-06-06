import { IsString } from "class-validator";

export class CreateEnderecoDto {
  @IsString()
  nome: string;
  
  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  cep: string;
}
