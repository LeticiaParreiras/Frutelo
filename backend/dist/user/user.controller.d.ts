import { UsersService } from './user.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUserCompras(req: any): Promise<import("../compra/entities/compra.entity").Compra[]>;
    getUserEnderecos(req: any): Promise<import("../enderecos/entities/endereco.entity").Endereco[] | null>;
    findOne(id: string, req: any): Promise<import("src/user/entities/user.entity").User | null>;
}
