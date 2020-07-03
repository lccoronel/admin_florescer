import React, { useState, useEffect } from 'react';
import { IoIosAddCircle, IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, NewRegister, Option } from './styles';
import Background from '../../components/Background';
import api from '../../services/api';
import { getCommunity, typeAccess } from './option';

function User() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [accessType, setAccessType] = useState('');
  const [communities, setCommunities] = useState([]);
  const [community, setCommunity] = useState();

  const handleClose = () => {
    setShow(false);
    setUsername('');
    setFirstName('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
  };
  const handleShow = () => setShow(true);

  const handleShowEdit = (idUser, name, numberPhone, access) => {
    setId(idUser);
    setUsername(name);
    setPhone(numberPhone);
    setAccessType(access);
    setShowEdit(true);
  };

  const handleCloseEdit = () => setShowEdit(false);

  async function handleList() {
    try {
      const token = await localStorage.getItem('token');

      const response = await api.get('/adm_panel/manager/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      setUsers(response.data.managers);
    } catch (err) {
      history.push('/');
      toast.error('Sessão expirada');
    }
  }

  async function getCommunities() {
    const response = await getCommunity();
    setCommunities(response);
  }

  useEffect(() => {
    handleList();
    getCommunities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDelete(idUser) {
    try {
      const token = await localStorage.getItem('token');

      await api.delete(`/adm_panel/manager/${idUser}`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      handleList();
      toast.success('Usuário deletado');
    } catch (err) {
      toast.error('Usuário não pode ser deletado');
    }
  }

  async function handleCreate() {
    if (password === confirmPassword) {
      const token = await localStorage.getItem('token');

      const data = {
        username,
        first_name: firstName,
        password,
        phone,
        acess_type: accessType,
        id_community: community,
      };

      await api.post('/adm_panel/manager/', data, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      toast.success('Usuário cadastrado');
      handleList();
      handleClose();
    } else {
      toast.error('Usuário não cadastrado, confirme os dados e tente novmente');
    }
  }

  async function handleCommunity(select) {
    setCommunity(select.value);
  }

  async function handleAccess(select) {
    setAccessType(select.value);
  }

  async function handleEdit(idUser) {
    try {
      const token = await localStorage.getItem('token');

      const data = {
        id_manager: idUser,
        username,
        phone,
        acess_type: accessType,
      };

      await api.put('/adm_panel/manager/', data, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      handleCloseEdit();
      handleList();
      toast.success('Usuário editado');
    } catch (err) {
      handleCloseEdit();
      toast.error('Usuário não pode ser editado');
    }
  }

  return (
    <Background titlePage="Usuários">
      <Container>
        <button className="add" type="button" onClick={handleShow}>
          <IoIosAddCircle size={20} />
          Novo Usuário
        </button>

        <div className="workspace">
          {users.map((user) => (
            <div className="list" key={user.id_manager}>
              <div className="column">
                <p className="name">{user.nome_user}</p>
                <p className="email">{user.email}</p>
              </div>

              <p className="phone">{user.phone}</p>

              <p className="type">{user.acess_type}</p>

              <p className="community">{user.community}</p>

              <div className="actions">
                <button
                  className="action"
                  onClick={() => handleDelete(user.id_manager)}
                  type="button"
                >
                  <IoMdTrash size={20} />
                </button>
                <button
                  className="action"
                  onClick={() =>
                    handleShowEdit(
                      user.id_manager,
                      user.email,
                      user.phone,
                      user.acess_type
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
          <p className="titleModal">Novo Usuário</p>
          <div className="line" />

          <div className="form">
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(resposta) => setUsername(resposta.target.value)}
            />
            <input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={(resposta) => setFirstName(resposta.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(resposta) => setPhone(resposta.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(resposta) => setPassword(resposta.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(resposta) => setConfirmPassword(resposta.target.value)}
            />
            <Option
              options={communities}
              onChange={handleCommunity}
              placeholder="Comunidade"
            />
            <Option
              options={typeAccess}
              onChange={handleAccess}
              placeholder="Tipo de acesso"
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
              placeholder="Email"
              value={username}
              onChange={(resposta) => setUsername(resposta.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(resposta) => setPhone(resposta.target.value)}
            />
            <Option options={communities} onChange={handleCommunity} />
            <div className="group">
              <button type="button" className="back" onClick={handleCloseEdit}>
                Voltar
              </button>
              <button
                type="submit"
                className="send"
                onClick={() => handleEdit(id)}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      </NewRegister>
    </Background>
  );
}

export default User;
