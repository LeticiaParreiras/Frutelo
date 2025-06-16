import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from './entities/avaliacao.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';
export declare class AvaliacaoService {
    private readonly repository;
    private readonly userrepository;
    private readonly lojarepository;
    constructor(repository: Repository<Avaliacao>, userrepository: Repository<User>, lojarepository: Repository<Loja>);
    create(dto: CreateAvaliacaoDto, userId: number): Promise<Avaliacao>;
    findAllByLoja(lojaId: number): Promise<Avaliacao[]>;
    findAllByUser(userId: number): Promise<Avaliacao[]>;
    findOne(id: number): Promise<Avaliacao>;
    update(id: number, dto: UpdateAvaliacaoDto, userId: number): Promise<Avaliacao>;
    remove(id: number): Promise<Avaliacao>;
}
