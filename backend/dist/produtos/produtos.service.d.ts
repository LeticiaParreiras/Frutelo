import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { Loja } from 'src/loja/entities/loja.entity';
export declare class ProdutosService {
    private readonly repository;
    private readonly lojaRepository;
    constructor(repository: Repository<Produto>, lojaRepository: Repository<Loja>);
    create(dto: CreateProdutoDto, vendedorId: number): Promise<Produto>;
    findAll(): Promise<Produto[]>;
    findOne(id: number): Promise<Produto | null>;
    update(id: number, dto: UpdateProdutoDto, vendedorId: number): Promise<Produto>;
    remove(id: number, vendedorId: number): Promise<Produto>;
    admRemove(id: number): Promise<Produto>;
}
