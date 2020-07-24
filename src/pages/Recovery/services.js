import { toast } from 'react-toastify';
import api from '../../services/api';

export async function recoveryPassword(data) {
  try {
    await api.post('/forgot_password/', data);

    toast.success('Email de recuperacão de senha enviado');

    return true;
  } catch (err) {
    toast.error('Erro ao enviar email');
    return false;
  }
}
