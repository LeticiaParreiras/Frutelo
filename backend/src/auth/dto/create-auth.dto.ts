import { IsString, IsEmail, IsEnum } from 'class-validator';
import { UserRole } from 'src/user/entities/user.entity';
export class RegisterDto {
    @IsString() 
    nomeUsuario: string;

    @IsString()
    nome: string;

    @IsString()
    senha: string;

    @IsEmail()
    email: string;

    @IsEnum(UserRole)
     role?: UserRole;

    }

    export class LoginDto {
        @IsString()
        nomeUsuario: string;
        
        @IsString()
        senha: string;

}