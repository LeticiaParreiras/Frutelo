import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    create(createAvaliacaoDto: CreateAvaliacaoDto, req: any): Promise<import("./entities/avaliacao.entity").Avaliacao>;
    findAllByLoja(lojaId: string): Promise<import("./entities/avaliacao.entity").Avaliacao[]>;
    findAllByUser(req: any): Promise<import("./entities/avaliacao.entity").Avaliacao[]>;
    findOne(id: string): Promise<import("./entities/avaliacao.entity").Avaliacao>;
    update(id: string, updateAvaliacaoDto: UpdateAvaliacaoDto, req: any): Promise<import("./entities/avaliacao.entity").Avaliacao>;
    remove(id: string): Promise<import("./entities/avaliacao.entity").Avaliacao>;
}
