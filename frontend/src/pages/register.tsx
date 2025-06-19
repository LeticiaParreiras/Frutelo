import { useState } from 'react';
import { register } from '../services/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    nomeUsuario: '',
    nome: '',
    senha: '',
    email: '',
    role: '' 
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({ ...form });
      alert('Cadastro realizado!');
      navigate('/login');
    } catch (err) {
      alert('Erro ao cadastrar');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <p>Nome do Usuário:</p>
        <input
          name="nomeUsuario"
          placeholder="Usuário"
          value={form.nomeUsuario}
          onChange={handleChange}
          autoComplete="username"
          required
        />
        <p>Nome:</p>
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          autoComplete="name"
          required
        />
        <p>E-mail:</p>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        <p>Tipo perfil:</p>
        <select name="role" value={form.role} onChange={handleChange} required>
        <option value="">Selecione o tipo de perfil</option>
        <option value="MANAGER">Vendedor</option>
        <option value="USER">Cliente</option>
        </select>
        <p>Senha:</p>
        <input
          name="senha"
          type="password"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      <p>
        Já tem uma conta? <Link to="/login">Faça o login aqui</Link>
      </p>
    </div>
  );
}
