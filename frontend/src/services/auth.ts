import api from './api';

interface RegisterData {
  nomeUsuario: string;
  nome: string;
  senha: string;
  email: string;
  role?: string;
}

interface LoginData {
  nomeUsuario: string;
  senha: string;
}

export const register = async (data: RegisterData) => {
  const res = await api.post('/auth/register', {
    ...data,
  });
  return res.data;
};

export const login = async (data: LoginData) => {
  const res = await api.post('/auth/login', data);
  localStorage.setItem('token', res.data.access_token);
  localStorage.setItem('role', res.data.role);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};