import { toast } from 'react-toastify';
import api from '../../services/api';

export async function getList() {
  try {
    const token = await localStorage.getItem('token');

    const response = await api.get('/adm_panel/dimensao/', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getDimensions() {
  const token = await localStorage.getItem('token');

  const response = await api.get('/adm_panel/dimensao/', {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  const data = response.data.dimensao;

  const dimensions = data.map((dimension) => {
    return {
      value: dimension.id_dimensao,
      label: dimension.name_dimensao,
    };
  });

  return dimensions;
}

export async function createDimensao(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.post('/adm_panel/dimensao/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Dimensåo criada');
    return true;
  } catch (err) {
    toast.error('Erro ao criar dimensão, tente novamente');
    return false;
  }
}

export async function deleteDimension(id) {
  try {
    const token = await localStorage.getItem('token');

    await api.delete(`/adm_panel/dimensao/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Dimensåo removida');
    return true;
  } catch (err) {
    toast.error('Erro ao remover dimensão, tente novamente');
    return false;
  }
}

export async function createAnwser(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.post('/adm_panel/pergunta/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Pergunta criada');
    return true;
  } catch (err) {
    toast.error('Erro ao criar pergunta, tente novamente');
    return false;
  }
}

export async function deleteAnwser(id) {
  try {
    const token = await localStorage.getItem('token');

    await api.delete(`/adm_panel/pergunta/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Pergunta removida');
    return true;
  } catch (err) {
    toast.error('Erro ao remover pergunta, tente novamente');
    return false;
  }
}

export async function editDimension(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.put('/adm_panel/dimensao/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Dimensão editada');
    return true;
  } catch (err) {
    return false;
  }
}

export async function editDimensionStatus(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.put('/adm_panel/dimensao/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}

export async function editAnwser(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.put('/adm_panel/pergunta/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    toast.success('Pergunta editada');
    return true;
  } catch (err) {
    return false;
  }
}

export async function editAnwserStatus(data) {
  try {
    const token = await localStorage.getItem('token');

    await api.put('/adm_panel/pergunta/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
