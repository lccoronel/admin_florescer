import React, { useState, useEffect } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { toast } from 'react-toastify';

import { Container, NewRegister, Option, Actions } from './styles';
import Background from '../../components/Background';
import { getCommunity } from './option';
import {
  getList,
  createLeaderCommunity,
  deleteUser,
  createAdmin,
  editUser,
} from './service';

function User() {
  const [show, setShow] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [communities, setCommunities] = useState([]);
  const [community, setCommunity] = useState();
  const [showDelete, setShowDelete] = useState(false);

  async function handleList() {
    const response = await getList();
    setUsers(response);
  }

  useEffect(() => {
    async function getCommunities() {
      const response = await getCommunity();
      setCommunities(response);
    }

    handleList();
    getCommunities();
  }, []);

  const closeModal = () => {
    setShow(false);
    setUsername('');
    setFirstName('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
  };

  const openModal = () => setShow(true);

  async function handleCreate() {
    if (password === confirmPassword) {
      const data = {
        username,
        first_name: firstName,
        password,
        phone,
        access_type: 2,
        id_community: community,
      };

      const response = await createLeaderCommunity(data);

      if (response) {
        handleList();
        closeModal();
      }
    } else {
      toast.error('Usuário não cadastrado, as senhas não são iguais');
    }
  }

  const closeModalAdmin = () => {
    setShowAdmin(false);
    setUsername('');
    setFirstName('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
  };

  const openModalAdmin = () => setShowAdmin(true);

  async function handleCreateAdmin() {
    if (password === confirmPassword) {
      const data = {
        username,
        first_name: firstName,
        password,
        phone,
        access_type: 1,
      };

      const response = await createAdmin(data);

      if (response) {
        handleList();
        closeModalAdmin();
      }
    } else {
      toast.error('As senhas não são iguais');
    }
  }

  const closeDeleteModal = () => setShowDelete(false);

  const openDeleteModal = (idUser) => {
    setId(idUser);
    setShowDelete(true);
  };

  async function handleDelete(idUser) {
    await deleteUser(idUser);
    handleList();
    closeDeleteModal();
  }

  async function handleCommunity(select) {
    setCommunity(select.value);
  }

  const handleShowEdit = (idUser, name, numberPhone) => {
    setId(idUser);
    setUsername(name);
    setPhone(numberPhone);
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
    setUsername('');
    setPhone('');
  };

  async function handleEdit(idUser) {
    const data = {
      id_manager: idUser,
      username,
      phone,
    };

    const response = await editUser(data);

    if (response) {
      handleCloseEdit();
      handleList();
    }
  }

  return (
    <Background titlePage="Usuários">
      <Container>
        <div className="row">
          <button className="add" type="button" onClick={openModal}>
            <IoIosAddCircle size={20} />
            Novo Lider de comunidade
          </button>
          <button className="add" type="button" onClick={openModalAdmin}>
            <IoIosAddCircle size={20} />
            Novo Administrador
          </button>
        </div>

        <div className="workspace">
          {users.map((user) => (
            <div className="list" key={user.id_manager}>
              <div className="column">
                <p className="name">{user.nome_user}</p>
                <p className="email">{user.email}</p>
              </div>

              <div className="subColumn">
                <p>Telefone: {user.phone}</p>
                <p>
                  Acesso:
                  {user.accesstype === 1
                    ? 'Administrador'
                    : 'Lider de comunidade'}
                </p>
                <p>{user.community}</p>
              </div>

              <div className="actions">
                <button
                  type="button"
                  onClick={() => openDeleteModal(user.id_manager)}
                >
                  Excluir
                </button>
                <button
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
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <NewRegister open={show}>
        <div className="containerModal">
          <p className="titleModal">Novo Lider de comunidade</p>
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
            <div className="group">
              <button type="button" className="back" onClick={closeModal}>
                Voltar
              </button>
              <button type="submit" className="send" onClick={handleCreate}>
                Concluir
              </button>
            </div>
          </div>
        </div>
      </NewRegister>
      <NewRegister open={showAdmin}>
        <div className="containerModal">
          <p className="titleModal">Novo Administrador</p>
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
            <div className="group">
              <button type="button" className="back" onClick={closeModalAdmin}>
                Voltar
              </button>
              <button
                type="submit"
                className="send"
                onClick={handleCreateAdmin}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      </NewRegister>
      <NewRegister open={showEdit}>
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

      <Actions open={showDelete}>
        <div className="containerModal">
          <p className="titleModal">Excluir Usuário</p>
          <div className="line" />
          <p>Realmente deseja excluir este usuário ?</p>
          <div className="group">
            <button type="button" className="back" onClick={closeDeleteModal}>
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

export default User;
