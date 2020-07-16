import { toast } from 'react-toastify';
import api from '../../services/api';

export async function handleSession(data) {
  try {
    const response = await api.post('/auth', data);

    toast.success('Login realizado');
    localStorage.setItem('token', response.data.access);

    return true;
  } catch (err) {
    toast.error('Erro ao iniciar sessão, tente novamente');
    return false;
  }
}
