import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import { User } from 'src/user/entities/user.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Loja } from 'src/loja/entities/loja.entity';
import { Status } from 'src/status/entities/status.entity';
export declare class Compra {
    id: number;
    data: Date;
    quantidade: number;
    pagamento: Pagamento;
    produto: Produto;
    loja: Loja;
    cliente: User;
    Endereco: Endereco;
    status: Status;
}
