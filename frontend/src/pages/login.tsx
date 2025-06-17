import { useState } from 'react';
import { login } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ nomeUsuario, senha });
      navigate('/homeRedirect');
    } catch (err) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <>
  <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <p>Nome do Usuário:</p>
      <input
        value={nomeUsuario}
        onChange={e => setNomeUsuario(e.target.value)}
        placeholder="Nome de usuário"
        required
      />
      <p>Senha:</p>
      <input
        type="password"
        value={senha}
        onChange={e => setSenha(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit">Entrar</button>
    </form>
    <p>
      Não possui conta? <a href="/register">Cadastre aqui!</a>
    </p>
  </div>
</>

  );
}