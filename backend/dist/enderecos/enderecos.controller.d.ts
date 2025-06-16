import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
export declare class EnderecosController {
    private readonly enderecosService;
    constructor(enderecosService: EnderecosService);
    createForUser(req: any, createEnderecoDto: CreateEnderecoDto): Promise<import("./entities/endereco.entity").Endereco>;
    createForLoja(req: any, createEnderecoDto: CreateEnderecoDto): Promise<import("./entities/endereco.entity").Endereco>;
    updateLoja(updateEnderecoDto: UpdateEnderecoDto, req: any): Promise<import("./entities/endereco.entity").Endereco>;
    findAll(): Promise<import("./entities/endereco.entity").Endereco[]>;
    findOne(id: string): Promise<import("./entities/endereco.entity").Endereco | null>;
    update(id: string, updateEnderecoDto: UpdateEnderecoDto, req: any): Promise<import("./entities/endereco.entity").Endereco>;
    remove(id: string, req: any): Promise<import("./entities/endereco.entity").Endereco>;
}
