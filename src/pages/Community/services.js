import { toast } from 'react-toastify';

import api from '../../services/api';

export async function getCommunities() {
  try {
    const token = await localStorage.getItem('token');

    const response = await api.get('/adm_panel/community/', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    return response.data.communitys;
  } catch (err) {
    return toast.error('Sessão expirada');
  }
}

export async function createCommunity(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.post('/adm_panel/community/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Comunidade criada');
    return true;
  } catch (err) {
    toast.error('Comunidade não foi criada tente novamente');
    return false;
  }
}

export async function deleteCommunity(id) {
  try {
    const token = await localStorage.getItem('token');

    await api.delete(`/adm_panel/community/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Comunidade criada');
    return true;
  } catch (err) {
    toast.error('Comunidade não pode ser deletada');
    return false;
  }
}

export async function getLeader() {
  try {
    const token = await localStorage.getItem('token');

    const response = await api.get('/adm_panel/manager/lider/', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    const { managers } = response.data;
    console.log(managers);

    const data = managers.map((manager) => {
      return {
        value: manager.id_manager,
        label: manager.nome_user,
      };
    });

    return data;
  } catch (err) {
    console.log(err);
  }
}
