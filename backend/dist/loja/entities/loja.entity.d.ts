import { Avaliacao } from "src/avaliacao/entities/avaliacao.entity";
import { Compra } from "src/compra/entities/compra.entity";
import { Endereco } from "src/enderecos/entities/endereco.entity";
import { Favorito } from "src/favoritos/entities/favorito.entity";
import { Produto } from "src/produtos/entities/produto.entity";
import { User } from "src/user/entities/user.entity";
export declare class Loja {
    id: number;
    nome: string;
    descricao: string;
    produtos: Produto[];
    vendedor: User;
    Endereco: Endereco;
    compras: Compra[];
    avaliacao: Avaliacao[];
    favorito: Favorito[];
}
