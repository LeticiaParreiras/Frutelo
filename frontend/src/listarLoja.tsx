// listaLojas.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Loja } from './Loja';

const ListaLojas: React.FC = () => {
  const [lojas, setLojas] = useState<Loja[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLojas = async () => {
      try {
        const response = await axios.get<Loja[]>('http://localhost:3000/loja', {  withCredentials: true
});
        setLojas(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchLojas();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1>Lista de Lojas</h1>
      <ul>
        {lojas.map((loja) => (
          <li key={loja.id}>
            <h2>{loja.nome}</h2>
            <p>{loja.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaLojas;
