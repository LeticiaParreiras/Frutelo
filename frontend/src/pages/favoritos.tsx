import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../assets/styles/home.css'
import type { Loja } from '../assets/interface/Loja';

export default function Favoritos() {
  const [lojas, setLojas] = useState<Loja[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLojas() {
      try {
        const res = await api.get('/favoritos');
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
        <p onClick={()=> navigate('/homeclient')} className='back'> &lt;</p>
        <h2>Lojas Favoritas</h2>
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