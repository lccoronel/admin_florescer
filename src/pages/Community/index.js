import React, { useState, useEffect } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { toast } from 'react-toastify';

import { Container, NewRegister, Option, Actions } from './styles';
import Background from '../../components/Background';
import api from '../../services/api';
import { listUf } from './option';
import {
  getCommunities,
  createCommunity,
  deleteCommunity,
  getLeader,
} from './services';

function Community() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [name, setName] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('');
  const [leader, setLeader] = useState([]);
  const [leaderCommunity, setLeaderCommunity] = useState();
  const [showDelete, setShowDelete] = useState(false);

  const handleShowEdit = (idCommunity, nome, estado, city) => {
    setId(idCommunity);
    setName(nome);
    setUf(estado);
    setCidade(city);
    setShowEdit(true);
  };
  const handleCloseEdit = () => {
    setName('');
    setCidade('');
    setShowEdit(false);
  };

  async function handleList() {
    const response = await getCommunities();
    setCommunities(response);
  }

  useEffect(() => {
    handleList();

    async function Leaders() {
      const listLeader = await getLeader();
      setLeader(listLeader);
    }

    Leaders();
  }, []);

  const handleClose = () => {
    setName('');
    setCidade('');
    setShow(false);
  };

  const handleShow = () => setShow(true);

  async function handleCreate() {
    const data = {
      name_community: name,
      uf,
      cidade,
      id_manager: leaderCommunity,
    };

    const response = await createCommunity(data);

    if (response) {
      handleList();
      handleClose();
    }
  }

  const handleDeleteClose = () => setShowDelete(false);

  const handleDeleteShow = (idCommunity) => {
    setId(idCommunity);
    setShowDelete(true);
  };

  async function handleDelete(idCommunity) {
    const response = await deleteCommunity(idCommunity);

    if (response) {
      handleList();
      handleDeleteClose();
    }
  }

  async function handleLeader(select) {
    setLeaderCommunity(select.value);
  }

  async function handleUf(select) {
    setUf(select.value);
  }

  async function handleEdit() {
    try {
      const token = await localStorage.getItem('token');

      const data = {
        id_manager: leaderCommunity,
        id_community: id,
      };

      await api.put('/adm_panel/community/', data, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      toast.success('Comunidade editada');
      handleList();
      handleCloseEdit();
    } catch (err) {
      toast.error(
        'Erro ao editar comunidade, confira os dados e tente novamente'
      );
    }
  }

  return (
    <Background titlePage="Comunidades">
      <Container>
        <button className="add" type="button" onClick={handleShow}>
          <IoIosAddCircle size={20} />
          Nova Comunidade
        </button>

        <div className="workspace">
          {communities.map((community) => (
            <div className="list" key={community.id_community}>
              <div className="containerItem">
                <p className="name">{community.name_community}</p>
                <p className="city">
                  {community.cidade} - {community.uf}
                </p>
                <p className="community">
                  Lider: {community.lider_community.name_lider_community}
                </p>
              </div>

              <div className="row">
                <button
                  className="delete"
                  onClick={() => handleDeleteShow(community.id_community)}
                  type="button"
                >
                  Excluir
                </button>
                <button
                  className="edit"
                  onClick={() =>
                    handleShowEdit(
                      community.id_community,
                      community.name_community,
                      community.uf,
                      community.cidade
                    )
                  }
                  type="button"
                >
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <NewRegister open={show} onClose={handleClose}>
        <div className="containerModal">
          <p className="titleModal">Nova Comunidade</p>
          <div className="line" />

          <div className="form">
            <input
              type="email"
              placeholder="Nome da comunidade"
              value={name}
              onChange={(v) => setName(v.target.value)}
            />
            <Option
              options={listUf}
              onChange={handleUf}
              placeholder="Escolha o estado"
            />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(v) => setCidade(v.target.value)}
            />
            <Option
              options={leader}
              onChange={handleLeader}
              placeholder="Escolha um lider para a comunidade"
            />
            <div className="group">
              <button type="button" className="back" onClick={handleClose}>
                Voltar
              </button>
              <button type="submit" className="send" onClick={handleCreate}>
                Concluir
              </button>
            </div>
          </div>
        </div>
      </NewRegister>

      <NewRegister open={showEdit} onClose={handleCloseEdit}>
        <div className="containerModal">
          <p className="titleModal">Editar UsuÃ¡rio</p>
          <div className="line" />

          <div className="form">
            <Option
              options={leader}
              onChange={handleLeader}
              placeholder="Escolha um lider para a comunidade"
            />

            <div className="group">
              <button type="button" className="back" onClick={handleCloseEdit}>
                Voltar
              </button>
              <button type="submit" className="send" onClick={handleEdit}>
                Concluir
              </button>
            </div>
          </div>
        </div>
      </NewRegister>

      <Actions open={showDelete} onClose={handleDeleteClose}>
        <div className="containerModal">
          <p className="titleModal">Excluir Comunidade</p>
          <div className="line" />
          <p>Realmente deseja excluir esta comunidade ?</p>
          <div className="group">
            <button type="button" className="back" onClick={handleDeleteClose}>
              Não
            </button>
            <button
              type="button"
              className="send"
              onClick={() => handleDelete(id)}
            >
              Sim
            </button>
          </div>
        </div>
      </Actions>
    </Background>
  );
}

export default Community;
