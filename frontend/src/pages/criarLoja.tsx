import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function CriarLoja() {
  const [loja, setLoja] = useState({
    nome: '',
    descricao: ''
  });

  const [endereco, setEndereco] = useState({
    nome: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    cep: '',
    estado: ''
  });

  const navigate = useNavigate();

  const handleLojaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoja({ ...loja, [e.target.name]: e.target.value });
  };

  const handleEnderecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco({ ...endereco, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Cria loja
      const lojaResponse = await api.post('/loja', loja);
      const lojaCriada = lojaResponse.data;

      // Cria endereço da loja
      await api.post('/enderecos/loja', { ...endereco });

      alert('Loja e endereço criados com sucesso!');
      navigate(`/home`);
    } catch (err) {
      console.error(err);
      alert('Erro ao criar loja ou endereço');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Criar Loja</h2>
        <input name="nome" placeholder="Nome da Loja" value={loja.nome} onChange={handleLojaChange} required />
        <input name="descricao" placeholder="Descrição" value={loja.descricao} onChange={handleLojaChange} required />

        <h3>Endereço da Loja</h3>

        <input name="cep" placeholder="CEP" value={endereco.cep} onChange={handleEnderecoChange} required />
        <input name="estado" placeholder="Estado" value={endereco.estado} onChange={handleEnderecoChange} required />
        <input name="cidade" placeholder="Cidade" value={endereco.cidade} onChange={handleEnderecoChange} required />
        <input name="bairro" placeholder="Bairro" value={endereco.bairro} onChange={handleEnderecoChange} required />
        <input name="rua" placeholder="Rua" value={endereco.rua} onChange={handleEnderecoChange} required />
        <input name="numero" placeholder="Número" value={endereco.numero} onChange={handleEnderecoChange} required />

        <button type="submit">Criar Loja</button>
      </form>
    </div>
  );
}
