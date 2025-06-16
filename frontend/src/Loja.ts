export interface Loja {
  id: number;
  nome: string;
  descricao: string;

  endereco:{
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
  }

  produtos: {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
  }

}