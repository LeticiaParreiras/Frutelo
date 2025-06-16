import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
export declare class CompraController {
    private readonly compraService;
    constructor(compraService: CompraService);
    create(req: any, createCompraDto: CreateCompraDto): Promise<import("./entities/compra.entity").Compra>;
    findAll(): Promise<import("./entities/compra.entity").Compra[]>;
    findOne(id: string): Promise<import("./entities/compra.entity").Compra | null>;
    updateStatus(id: string, updateCompraDto: UpdateCompraDto, req: any): Promise<import("./entities/compra.entity").Compra>;
    remove(id: string): Promise<import("./entities/compra.entity").Compra | null>;
}
