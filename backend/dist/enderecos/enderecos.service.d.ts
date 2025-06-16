import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { Repository } from 'typeorm/repository/Repository';
import { User } from 'src/user/entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';
export declare class EnderecosService {
    private readonly repository;
    private readonly userRepository;
    private readonly lojaRepository;
    constructor(repository: Repository<Endereco>, userRepository: Repository<User>, lojaRepository: Repository<Loja>);
    createForUser(dto: CreateEnderecoDto, userId: number): Promise<Endereco>;
    createForLoja(dto: CreateEnderecoDto, vendedorId: number): Promise<Endereco>;
    findAll(): Promise<Endereco[]>;
    findOne(id: number): Promise<Endereco | null>;
    update(enderecoId: number, userId: number, dto: UpdateEnderecoDto): Promise<Endereco>;
    updateLoja(userId: number, dto: UpdateEnderecoDto): Promise<Endereco>;
    remove(enderecoId: number, userId: number): Promise<Endereco>;
}
