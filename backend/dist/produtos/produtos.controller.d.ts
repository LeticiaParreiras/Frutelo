import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    create(req: any, createProdutoDto: CreateProdutoDto): Promise<import("./entities/produto.entity").Produto>;
    findAll(): Promise<import("./entities/produto.entity").Produto[]>;
    findOne(id: string): Promise<import("./entities/produto.entity").Produto | null>;
    update(id: string, updateProdutoDto: UpdateProdutoDto, req: any): Promise<import("./entities/produto.entity").Produto>;
    remove(id: string, req: any): Promise<import("./entities/produto.entity").Produto>;
    admRemove(id: string): Promise<import("./entities/produto.entity").Produto>;
}
