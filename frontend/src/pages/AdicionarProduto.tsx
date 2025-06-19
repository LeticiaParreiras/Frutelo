import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function AdicionarProduto() {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: 0,
    quantidade: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: name === 'preco' || name === 'quantidade' ? parseFloat(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/produtos', produto);
      navigate('/homemanager');
    } catch (err) {
      console.error(err);
      alert('Erro ao adicionar produto');
    }
  };

  return (
    <div className="container">
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <p>Nome:</p>
        <input name="nome" placeholder="Nome" value={produto.nome} onChange={handleChange} required />
        <p>Descrição:</p>
        <input name="descricao" placeholder="Descrição" value={produto.descricao} onChange={handleChange} required />
        <p>Preço R$:</p>
        <input name="preco" placeholder="Preço" type="number" step="0.01" value={produto.preco} onChange={handleChange} required />
        <p>Quantidade:</p>
        <input name="quantidade" placeholder="Quantidade" type="number" value={produto.quantidade} onChange={handleChange} required />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}