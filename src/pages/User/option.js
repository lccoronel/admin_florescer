import api from '../../services/api';

export async function getCommunity() {
  const token = await localStorage.getItem('token');

  const response = await api.get('/adm_panel/community/lider/', {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  const data = response.data.communitys;

  const communities = data.map((community) => {
    return {
      value: community.id_community,
      label: community.name_community,
    };
  });

  return communities;
}

export const typeAccess = [
  { value: 'Lider Comunidade', label: 'Lider Comunidade' },
  { value: 'Administrador', label: 'Administrador' },
];
