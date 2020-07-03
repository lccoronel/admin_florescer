import api from '../../services/api';

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
