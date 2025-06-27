import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../assets/styles/home.css'
import type { Loja } from '../assets/interface/Loja';

export default function Favoritos() {
   const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFavoritos() {
      try {
        const res = await api.get('/favoritos');
        setFavoritos(res.data);
      } catch {
        alert('Erro ao carregar lojas');
      }
    }

    fetchFavoritos();
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
        <p onClick={()=> navigate('/homeclient')} className='back'> &lt;</p>
        <h2>Lojas Favoritas</h2>
      <div className="loja-list">
        {favoritos.length > 0 ? ( 
          favoritos.map((fav) => (
            <div key={fav.Loja.id} className="loja-card" onClick={() => navigate(`/loja/${fav.Loja.id}`)}>
              <h3>{fav.Loja.nome}</h3>
              <p>{fav.Loja.descricao}</p>
              
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