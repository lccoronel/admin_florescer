import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.florescerbrasil.com.br',
});

export default api;
