import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { Loja } from './entities/loja.entity';
import { Repository } from 'typeorm/repository/Repository';
import { Produto } from 'src/produtos/entities/produto.entity';
import { User } from 'src/user/entities/user.entity';
import { Compra } from 'src/compra/entities/compra.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
export declare class LojaService {
    private readonly repository;
    private readonly userRepository;
    private readonly compraRepository;
    private readonly enderecoRepository;
    constructor(repository: Repository<Loja>, userRepository: Repository<User>, compraRepository: Repository<Compra>, enderecoRepository: Repository<Endereco>);
    create(dto: CreateLojaDto, userId: number): Promise<Loja>;
    findAll(): Promise<Loja[]>;
    findOne(id: number): Promise<Loja | null>;
    getLojaProdutos(lojaId: number): Promise<Produto[]>;
    myLoja(userId: number): Promise<Loja>;
    getMyProdutos(userId: number): Promise<Produto[]>;
    findAComprasByLoja(userId: number): Promise<Compra[]>;
    getLojaEndereco(userId: number): Promise<Loja | null>;
    update(userId: number, dto: UpdateLojaDto): Promise<Loja | null>;
    remove(lojaId: number): Promise<Loja>;
}
