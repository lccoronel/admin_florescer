import { toast } from 'react-toastify';
import api from '../../services/api';

export async function recoveryPassword(data) {
  try {
    await api.post('/reste_password/', data);

    toast.success('Senha redefinida');

    return true;
  } catch (err) {
    toast.error('Erro ao redefinir senha');
    return false;
  }
}
