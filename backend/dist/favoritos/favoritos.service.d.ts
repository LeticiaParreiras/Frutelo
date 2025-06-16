import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { Favorito } from './entities/favorito.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Loja } from 'src/loja/entities/loja.entity';
export declare class FavoritosService {
    private readonly repository;
    private readonly userRepository;
    private readonly lojaRepository;
    constructor(repository: Repository<Favorito>, userRepository: Repository<User>, lojaRepository: Repository<Loja>);
    create(dto: CreateFavoritoDto, userId: number): Promise<Favorito>;
    findAll(userId: number): Promise<Favorito[]>;
    findOne(id: number): string;
    update(id: number, updateFavoritoDto: UpdateFavoritoDto): string;
    remove(lojaId: number, userId: number): Promise<Favorito[]>;
}
