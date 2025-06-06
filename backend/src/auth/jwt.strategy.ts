import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey', // Substitua por uma chave segura em produção
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOne(payload.sub);
    
    return { 
      userId: payload.sub, 
      nomeUsuario: payload.nomeUsuario,
      role: user ? payload.role : null // Incluir a role do usuário no request
    };
  }  
}