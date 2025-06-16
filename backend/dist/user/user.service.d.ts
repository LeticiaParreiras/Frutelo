import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Loja } from '../loja/entities/loja.entity';
import { Compra } from '../compra/entities/compra.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly lojaRepository;
    private readonly compraRepository;
    private readonly enderecoRepository;
    constructor(userRepository: Repository<User>, lojaRepository: Repository<Loja>, compraRepository: Repository<Compra>, enderecoRepository: Repository<Endereco>);
    getUserCompras(userId: number): Promise<Compra[]>;
    getUserEnderecos(userId: number): Promise<Endereco[] | null>;
    findOne(id: number): Promise<User | null>;
    getUser(id: number): Promise<User | null>;
}
