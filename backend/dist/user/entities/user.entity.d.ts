import { Loja } from 'src/loja/entities/loja.entity';
import { Compra } from 'src/compra/entities/compra.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Favorito } from 'src/favoritos/entities/favorito.entity';
export declare enum UserRole {
    USER = "USER",
    MANAGER = "MANAGER",
    ADMIN = "ADMIN"
}
export declare class User {
    id: number;
    nomeUsuario: string;
    nome: string;
    senha: string;
    email: string;
    role: UserRole;
    loja: Loja;
    Compras: Compra[];
    endereco: Endereco[];
    avaliacao: Avaliacao[];
    favorito: Favorito[];
    hashPassword(): Promise<void>;
}
