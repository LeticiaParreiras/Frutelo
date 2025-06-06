import {  IsString } from "class-validator";

export class CreateLojaDto {
    @IsString()
  nome: string;

  @IsString()
  descricao: string;

}
