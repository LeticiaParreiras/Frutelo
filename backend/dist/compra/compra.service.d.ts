import { Compra } from './entities/compra.entity';
import { Repository } from 'typeorm';
import { CreateCompraDto } from './dto/create-compra.dto';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { User } from 'src/user/entities/user.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Loja } from 'src/loja/entities/loja.entity';
export declare class CompraService {
    private compraRepository;
    private pagamentoRepository;
    private produtoRepository;
    private userRepository;
    private enderecoRepository;
    private lojaRepository;
    constructor(compraRepository: Repository<Compra>, pagamentoRepository: Repository<Pagamento>, produtoRepository: Repository<Produto>, userRepository: Repository<User>, enderecoRepository: Repository<Endereco>, lojaRepository: Repository<Loja>);
    create(dto: CreateCompraDto, userId: number): Promise<Compra>;
    findAll(): Promise<Compra[]>;
    findOne(id: number): Promise<Compra | null>;
    updateStatus(idCompra: number, userId: number, updateCompraDto: UpdateCompraDto): Promise<Compra>;
    remove(id: number): Promise<Compra | null>;
}
