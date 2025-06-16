import { UserRole } from 'src/user/entities/user.entity';
export declare class RegisterDto {
    nomeUsuario: string;
    nome: string;
    senha: string;
    email: string;
    role?: UserRole;
}
export declare class LoginDto {
    nomeUsuario: string;
    senha: string;
}
