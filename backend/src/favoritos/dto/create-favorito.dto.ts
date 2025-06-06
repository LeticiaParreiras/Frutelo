import { IsNumber } from "class-validator";

export class CreateFavoritoDto {
    @IsNumber()
    idLoja: number
}
