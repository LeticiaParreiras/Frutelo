import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { logout } from '../services/auth';
import '../assets/styles/home.css'

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await api.get('/loja/1/myprodutos'); // endpoint que retorna produtos da loja do usuário logado
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProdutos();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAddProduto = () => {
    navigate('/adicionar-produto');
  };

  const handleProdutoClick = (id: number) => {
    navigate(`/produto/${id}`); // página de edição
  };

  return (
    <>
    <header className="home-header">
        <h1>Minha Loja</h1>
        <button className="logout-button" onClick={handleLogout}>Sair</button>
      </header>

        <div className="home-container">
      <div className="actions">
        <button className="add-button" onClick={() => navigate('/adicionar-produto')}>Adicionar Produto</button>
      </div>

      <div className="product-list">
        {produtos.length > 0 ? (
          produtos.map((produto: any) => (
            <div key={produto.id} className="product-card" onClick={() => navigate(`/produto/${produto.id}`)}>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p><strong>Preço:</strong> R${produto.preco.toFixed(2)}</p>
              <p><strong>Quantidade:</strong> {produto.quantidade}</p>
            </div>
          ))
        ) : (
          <p className="no-products">Nenhum produto cadastrado.</p>
        )}
      </div>
    </div>
    </>
  );
}
