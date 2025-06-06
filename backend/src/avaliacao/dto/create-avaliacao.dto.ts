import { IsInt, IsString, Min, Max, IsNumber } from "class-validator";

export class CreateAvaliacaoDto {
  @IsInt()
  @Min(1)
  @Max(5)
  nota: number;

  @IsString()
  comentario?: string;

  @IsNumber()
  lojaId: number;
}
