import api from "./api";

export const toggleFavorito = async (idLoja: number, isFavorited: boolean) => {
  try {
    if (isFavorited) {
      // Já está nos favoritos → remover
      await api.delete(`/favoritos/${idLoja}`);
    } else {
      // Ainda não está → adicionar
      await api.post('/favoritos', { idLoja });
    }
  } catch (err) {
    throw new Error('Erro ao alterar favoritos');
  }
};