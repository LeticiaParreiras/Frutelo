import api from './api'; 

export async function getMyLoja() {
  return await api.get('/loja/1/myloja');
}
