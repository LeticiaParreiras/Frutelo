import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../user/entities/user.entity").User>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        role: string;
    }>;
    logout(): string;
    remember(): string;
}
