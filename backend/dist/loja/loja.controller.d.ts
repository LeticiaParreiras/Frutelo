import { LojaService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojaController {
    private readonly lojaService;
    constructor(lojaService: LojaService);
    createLoja(req: any, dto: CreateLojaDto): Promise<import("./entities/loja.entity").Loja>;
    findAll(): Promise<import("./entities/loja.entity").Loja[]>;
    findOne(id: string): Promise<import("./entities/loja.entity").Loja | null>;
    getLojaProdutos(id: string): Promise<import("../produtos/entities/produto.entity").Produto[]>;
    getMyProdutos(id: string, req: any): Promise<import("../produtos/entities/produto.entity").Produto[]>;
    getMyLoja(req: any): Promise<import("./entities/loja.entity").Loja>;
    findAllByLoja(id: string, req: any): Promise<import("../compra/entities/compra.entity").Compra[]>;
    getLojaEndereco(req: any): Promise<import("./entities/loja.entity").Loja | null>;
    update(req: any, updateLojaDto: UpdateLojaDto): Promise<import("./entities/loja.entity").Loja | null>;
    remove(id: string): Promise<import("./entities/loja.entity").Loja>;
}
