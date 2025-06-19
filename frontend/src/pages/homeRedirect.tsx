import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyLoja } from '../services/loja';

export default function HomeRedirect() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    const redirectManager = async () => {
      try {
        const response = await getMyLoja();
        const loja = response.data;

        if (loja) {
          navigate('/homemanager');
        } else {
          navigate('/criarloja');
        }
      } catch (err: any) {
        if (err.response?.status === 404) {
          navigate('/criarloja');
        } else {
          alert('Erro ao verificar loja');
        }
      }
    };

    if (userRole === 'MANAGER') {
      redirectManager();
    } else if (userRole === 'USER') {
      navigate('/homeclient');
    } 
  }, [navigate, userRole]);

  return <p>Carregando ...</p> ;
  
}
