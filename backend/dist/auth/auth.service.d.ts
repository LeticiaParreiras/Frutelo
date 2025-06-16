import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    register(dto: RegisterDto): Promise<User>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    validateUser(nomeUsuario: string, senha: string): Promise<User | null>;
}
