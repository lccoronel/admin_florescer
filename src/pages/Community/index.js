import React, { useState, useEffect } from 'react';
import { IoIosAddCircle, IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container, NewRegister, Option } from './styles';
import Background from '../../components/Background';
import api from '../../services/api';
import { listUf } from './option';

function Community() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [name, setName] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('');

  const handleClose = () => {
    setName('');
    setCidade('');
    setShow(false);
  };

  const handleShow = () => setShow(true);
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
    try {
      const token = await localStorage.getItem('token');

      const response = await api.get('/adm_panel/community/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      setCommunities(response.data.communitys);
    } catch (err) {
      history.push('/');
    }
  }

  useEffect(() => {
    handleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDelete(idCommunity) {
    try {
      const token = await localStorage.getItem('token');

      await api.delete(`/adm_panel/community/${idCommunity}`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      handleList();
    } catch (err) {
      alert('nao foi possivel excluir o cliente');
    }
  }

  async function handleUf(select) {
    setUf(select.value);
  }

  async function handleCreate() {
    const token = await localStorage.getItem('token');

    const data = {
      name_community: name,
      uf,
      cidade,
    };

    await api.post('/adm_panel/community/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    handleList();
    handleClose();
  }

  async function handleEdit() {
    const token = await localStorage.getItem('token');

    const data = {};

    await api.put('/adm_panel/manager/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    handleList();
    handleCloseEdit();
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
              <p className="name">{community.name_community}</p>

              <p className="uf">{community.uf}</p>

              <p className="city">{community.cidade}</p>

              <p className="community">
                {community.lider_community.name_lider_community}
              </p>

              <div className="actions">
                <button
                  className="action"
                  onClick={() => handleDelete(community.id_community)}
                  type="button"
                >
                  <IoMdTrash size={20} />
                </button>
                <button
                  className="action"
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
                  <MdEdit size={20} />
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
            <Option options={listUf} onChange={handleUf} />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(v) => setCidade(v.target.value)}
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
          <p className="titleModal">Editar Usuário</p>
          <div className="line" />

          <div className="form">
            <input
              type="email"
              placeholder="Nome da comunidade"
              value={name}
              onChange={(v) => setName(v.target.value)}
            />
            <Option options={listUf} onChange={handleUf} />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(v) => setCidade(v.target.value)}
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
    </Background>
  );
}

export default Community;
