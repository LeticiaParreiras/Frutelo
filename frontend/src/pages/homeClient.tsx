import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { logout } from '../services/auth';
import '../assets/styles/home.css'
import type { Loja } from '../assets/interface/Loja';

export default function HomeCliente() {
  const [lojas, setLojas] = useState<Loja[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLojas() {
      try {
        const res = await api.get('/loja');
        setLojas(res.data);
      } catch {
        alert('Erro ao carregar lojas');
      }
    }

    fetchLojas();
  }, []);

   const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
    <header className="home-header">
        <h1>Frutelo</h1>
        <button className="button" onClick={handleLogout}>Sair</button>
      </header>
      
      <div className="home-container">
        <div className="title">
      <h2>Lojas</h2>
      <button onClick={() => navigate(`/favoritos`)}><img src="/heart.svg" alt="coração" />Favoritos</button>
        </div>
      <div className="loja-list">
        {lojas.length > 0 ? ( 
          lojas.map((loja: Loja) => (
            <div key={loja.id} className="loja-card" onClick={() => navigate(`/loja/${loja.id}`)}>
              <h3>{loja.nome}</h3>
              <p>{loja.descricao}</p>
            </div>
          ))
        ) : (
          <p>Nenhuma loja encontrada</p>
        )}
      </div>
    </div>
    </>
  );
}