import { FavoritosService } from './favoritos.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
export declare class FavoritosController {
    private readonly favoritosService;
    constructor(favoritosService: FavoritosService);
    create(createFavoritoDto: CreateFavoritoDto, req: any): Promise<import("./entities/favorito.entity").Favorito>;
    findAll(req: any): Promise<import("./entities/favorito.entity").Favorito[]>;
    findOne(id: string): string;
    update(id: string, updateFavoritoDto: UpdateFavoritoDto): string;
    remove(id: string, req: any): Promise<import("./entities/favorito.entity").Favorito[]>;
}
