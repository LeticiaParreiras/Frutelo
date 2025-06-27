// LojaDetalhes.tsx
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import '../assets/styles/home.css';
import type { Loja } from '../assets/interface/Loja';
import { logout } from '../services/auth';
import { toggleFavorito } from '../services/user';

export default function LojaDetalhes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loja, setLoja] = useState<Loja | null>(null);
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    async function fetchLojaEProdutos() {
      try {
        const lojaRes = await api.get(`/loja/${id}`);
        setLoja(lojaRes.data);
        // Verifica se é favorita 
        const favRes = await api.get(`/favoritos/loja/${id}`);
        setIsFavorito(favRes.data === true);
      } catch {
        alert('Erro ao carregar detalhes da loja');
      }
    }
    fetchLojaEProdutos();
  }, [id]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleFavoritar = async () => {
    try {
      await toggleFavorito(loja.id, isFavorito);
      setIsFavorito(!isFavorito);
    } catch {
      alert('Erro ao favoritar loja');
    }
  };

  return (
    <>
      <header className="home-header">
        <h1>Frutelo</h1>
        <button className="logout-button" onClick={handleLogout}>Sair</button>
      </header>
      {loja ? (
        <div className="home-container">
          <p onClick={() => navigate('/homeclient')} className='back'>&lt;</p>
          <div className="loja-container">
            <span>
              <h2>{loja.nome}</h2>
              <img
                onClick={handleFavoritar}
                src={isFavorito ? '/heart.svg' : '/emptyheart.svg'}
                alt="Curtir"
                className="heart-icon"
                style={{ cursor: 'pointer', width: '30px' }}
              />
            </span>
            <p>{loja.descricao}</p>
            <div className="endereco-container">
              {loja.Endereco ? (
                <div>
                  <h3>Endereço</h3>
                  <p>{loja.Endereco.rua}, {loja.Endereco.numero} – {loja.Endereco.bairro}</p>
                  <p>{loja.Endereco.cidade} – {loja.Endereco.estado}, {loja.Endereco.cep}</p>
                </div>
              ) : (
                <p>Endereço não disponível.</p>
              )}
            </div>
          </div>
          <h3>Produtos</h3>
          {loja.produtos.length > 0 ? (
            <div className="product-list">
              {loja.produtos.map((produto) => (
                <div className="product-card" key={produto.id}>
                  <h4>{produto.nome}</h4>
                  <p>{produto.descricao}</p>
                  <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                  <p>Quantidade: {produto.quantidade}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Esta loja ainda não possui produtos.</p>
          )}
        </div>
      ) : (
        <p>Carregando loja...</p>
      )}
    </>
  );
}
