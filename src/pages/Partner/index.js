import React, { useState, useEffect } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { toast } from 'react-toastify';

import { Container, NewRegister, Option, Actions } from './styles';
import Background from '../../components/Background';
import { listUf } from '../Community/option';
import {
  getPartners,
  createPartner,
  deletePArtner,
  EditPatner,
} from './service';

function Partner() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [partners, setPartners] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [site, setSite] = useState('');
  const [segmento, setSegmento] = useState('');
  const [id, setId] = useState();
  const [showDelete, setShowDelete] = useState(false);

  async function handleList() {
    const response = await getPartners();
    setPartners(response);
  }

  useEffect(() => {
    handleList();
  }, []);

  async function handleUf(select) {
    setUf(select.value);
  }

  const handleClose = () => {
    setUsername('');
    setFirstName('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
    setType('');
    setUf('');
    setUf('');
    setCity('');
    setSite('');
    setSegmento('');
    setShow(false);
  };

  const handleShow = () => setShow(true);

  async function handleCreate() {
    if (password === confirmPassword && password.length > 0) {
      const data = {
        username,
        first_name: firstName,
        password,
        phone,
        tipo: type,
        uf,
        cidade: city,
        site,
        segmento,
      };

      const response = await createPartner(data);

      if (response) {
        handleClose();
        handleList();
      }
    } else {
      toast.error('Preencha todos os dados corretamente');
    }
  }

  const handleDeleteClose = () => setShowDelete(false);

  const handleDeleteShow = (idPartner) => {
    setId(idPartner);
    setShowDelete(true);
  };

  async function handleDelete(idPartner) {
    const response = await deletePArtner(idPartner);

    if (response) {
      handleList();
      handleDeleteClose();
    }
  }

  const handleCloseEdit = () => {
    setUsername('');
    setFirstName('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
    setType('');
    setUf('');
    setUf('');
    setCity('');
    setSite('');
    setSegmento('');
    setShowEdit(false);
  };

  const handleShowEdit = (idPartner, nome, telefone, estado, cidade, www) => {
    setId(idPartner);
    setUsername(nome);
    setPhone(telefone);
    setUf(estado);
    setCity(cidade);
    setSite(www);
    setShowEdit(true);
  };

  async function handleEdit() {
    const data = {
      id_partner: id,
      username,
      phone,
      uf,
      cidade: city,
      site,
    };

    const response = await EditPatner(data);

    if (response) {
      handleCloseEdit();
      handleList();
    }
  }

  return (
    <Background titlePage="Parceiros">
      <Container>
        <button className="add" type="button" onClick={handleShow}>
          <IoIosAddCircle size={20} />
          Novo Parceiro
        </button>

        <div className="workspace">
          {partners.map((partner) => (
            <div className="list" key={partner.id_partner}>
              <div className="column">
                <p className="name">{partner.empresa}</p>
                <p className="email">{partner.email}</p>
              </div>

              <div className="subColumn">
                <p className="type">{partner.tipo}</p>
                <p className="city">
                  {partner.cidade} / {partner.uf}
                </p>
                <p className="phone">{partner.phone}</p>
                <p className="site">{partner.site}</p>
                <p className="segmento">{partner.segmento}</p>
              </div>

              <div className="actions">
                <button
                  type="button"
                  onClick={() => handleDeleteShow(partner.id_partner)}
                >
                  Excluir
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleShowEdit(
                      partner.id_partner,
                      partner.email,
                      partner.phone,
                      partner.uf,
                      partner.cidade,
                      partner.site
                    )
                  }
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
          <p className="titleModal">Novo Usuário</p>
          <div className="line" />

          <div className="form">
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(v) => setUsername(v.target.value)}
            />
            <input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={(v) => setFirstName(v.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(v) => setPhone(v.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(v) => setPassword(v.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(v) => setConfirmPassword(v.target.value)}
            />
            <Option options={listUf} onChange={handleUf} />
            <input
              type="text"
              placeholder="Tipo"
              value={type}
              onChange={(v) => setType(v.target.value)}
            />
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(v) => setCity(v.target.value)}
            />
            <input
              type="text"
              placeholder="Site"
              value={site}
              onChange={(v) => setSite(v.target.value)}
            />
            <input
              type="text"
              placeholder="Segmento"
              value={segmento}
              onChange={(v) => setSegmento(v.target.value)}
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
          <p className="titleModal">Editar Parceiro</p>
          <div className="line" />

          <div className="form">
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(v) => setUsername(v.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(v) => setPhone(v.target.value)}
            />
            <Option options={listUf} onChange={handleUf} placeholder={uf} />
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(v) => setCity(v.target.value)}
            />
            <input
              type="text"
              placeholder="Site"
              value={site}
              onChange={(v) => setSite(v.target.value)}
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
          <p className="titleModal">Excluir Parceiro</p>
          <div className="line" />
          <p>Realmente deseja excluir este parceiro ?</p>
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

export default Partner;
