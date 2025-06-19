import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

export default function EditarProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: 0,
    quantidade: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await api.get(`/produtos/${id}`);
        setProduto(response.data);
      } catch (err) {
        console.error(err);
        alert('Erro ao carregar produto');
      }
    }

    fetchProduto();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: name === 'preco' || name === 'quantidade' ? parseFloat(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.patch(`/produtos/${id}`, produto);
      navigate('/homemanager');
    } catch (err) {
      console.error(err);
      alert('Erro ao atualizar produto');
    }
  };
  const handleDelete = async () => {
    const confirmar = window.confirm('Tem certeza que deseja excluir este produto?');
    if (confirmar) {
      try {
        await api.delete(`/produtos/${id}`);
        alert('Produto excluído com sucesso!');
        navigate('/homemanager');
      } catch (err) {
        console.error(err);
        alert('Erro ao excluir produto');
      }
    }
  };

  return (
    <div className="container">
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit}>
        <p>Nome:</p>
        <input name="nome" placeholder="Nome" value={produto.nome} onChange={handleChange} required />
        <p>Descrição:</p>
        <input name="descricao" placeholder="Descrição" value={produto.descricao} onChange={handleChange} required />
        <p>Preço R$:</p>
        <input name="preco" placeholder="Preço" type="number" step="0.01" value={produto.preco} onChange={handleChange} required />
        <p>Quantidade:</p>
        <input name="quantidade" placeholder="Quantidade" type="number" value={produto.quantidade} onChange={handleChange} required />
        <button type="submit">Salvar Alterações</button>
         <button type="button" onClick={handleDelete} className='delete-btn'>Deletar Produto</button>
      </form>
    </div>
  );
}
