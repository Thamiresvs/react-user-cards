import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakerapi.it/api/v1/',
});

export const fetchUsers = async (limit = 20) => {
  try {
    const response = await api.get(`users?_quantity=${limit}`);
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return [];
  }
};
