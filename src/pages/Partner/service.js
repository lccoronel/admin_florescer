import { toast } from 'react-toastify';

import api from '../../services/api';

export async function getPartners() {
  try {
    const token = await localStorage.getItem('token');

    const response = await api.get('/adm_panel/partner/', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    return response.data.partners;
  } catch (err) {
    return console.log('falhou');
  }
}

export async function createPartner(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.post('/adm_panel/partner/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Parceiro criado');
    return true;
  } catch (err) {
    toast.error('Erro ao criar Parceiro, tente novamente');
    return false;
  }
}

export async function deletePArtner(id) {
  try {
    const token = await localStorage.getItem('token');

    await api.delete(`/adm_panel/partner/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Parceiro excluido');
    return true;
  } catch (err) {
    toast.error('Parceiro não pode ser deletado');
    return false;
  }
}

export async function EditPatner(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.put('/adm_panel/partner/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Parceiro Editado');
    return true;
  } catch (err) {
    toast.error('Erro ao editar parceiro');
    return false;
  }
}
