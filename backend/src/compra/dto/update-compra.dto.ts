import { PartialType } from '@nestjs/swagger';
import { CreateCompraDto } from './create-compra.dto';
import { IsNumber } from 'class-validator';

export class UpdateCompraDto extends PartialType(CreateCompraDto) {
    @IsNumber()
    statusId: number;
}
