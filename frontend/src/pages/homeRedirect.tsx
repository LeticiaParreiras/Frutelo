import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyLoja } from '../services/loja';

export default function HomeRedirect() {
 const navigate = useNavigate();

  useEffect(() => {
    async function checkLoja() {
      try {
        const response = await getMyLoja();
        const loja = response.data;

        if (loja) {
          // Loja encontrada → redireciona para página principal
          navigate('/home');
        } else {
          // Por precaução, se a resposta for nula
          navigate('/criarloja');
        }
      } catch (err: any) {
        if (err.response?.status === 404) {
          // Loja não existe → redireciona para criação
          navigate('/criarloja');
        } else {
          // Outro erro (ex: token inválido)
          alert('Erro ao verificar loja');
        }
      }
    }

    checkLoja();
  }, [navigate]);

  return <p>Carregando loja...</p>;
}

