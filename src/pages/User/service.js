import { toast } from 'react-toastify';

import api from '../../services/api';

export async function getList() {
  try {
    const token = await localStorage.getItem('token');
    const response = await api.get('/adm_panel/manager/', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    return response.data.managers;
  } catch (err) {
    return 'Nenhum usuários';
  }
}

export async function createLeaderCommunity(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.post('/adm_panel/manager/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Usuário cadastrado');
    return true;
  } catch (err) {
    toast.error('Usuário não cadastrado, revise os dados e tente novamente');
    return false;
  }
}

export async function deleteUser(id) {
  try {
    const token = await localStorage.getItem('token');

    await api.delete(`/adm_panel/manager/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Usuário excluido');
  } catch (err) {
    toast.error('Tente novamente');
  }
}

export async function createAdmin(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.post('/adm_panel/manager/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Administrador Criado');
    return true;
  } catch (err) {
    toast.error(
      'Erro ao criar administrador, revise os dados e tente novamente'
    );
    return false;
  }
}

export async function editUser(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.put('/adm_panel/manager/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Usuário editado');
    return true;
  } catch (err) {
    toast.error('Erro ao editar');
    return false;
  }
}
