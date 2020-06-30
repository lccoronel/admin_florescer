import React, { useState, useEffect } from 'react';
import { IoIosAddCircle, IoMdTrash } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';

import { Container, NewRegister, Option } from './styles';
import Background from '../../components/Background';
import api from '../../services/api';
import { listUf } from '../Community/option';

function Partner() {
  const history = useHistory();

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

  async function handleList() {
    try {
      const token = await localStorage.getItem('token');

      const response = await api.get('/adm_panel/partner/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      setPartners(response.data.partners);
    } catch (err) {
      history.push('/');
    }
  }

  useEffect(() => {
    handleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleUf(select) {
    setUf(select.value);
  }

  async function handleCreate() {
    if (password === confirmPassword && password.length > 0) {
      const token = await localStorage.getItem('token');

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

      await api.post('/adm_panel/partner/', data, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      handleClose();
      handleList();
    } else {
      alert('preencha todos os dados corretamente');
    }
  }

  async function handleDelete(idPartner) {
    const token = await localStorage.getItem('token');

    await api.delete(`/adm_panel/partner/${idPartner}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    handleList();
  }

  async function handleEdit() {
    const token = await localStorage.getItem('token');

    const data = {
      id_partner: id,
      username,
      phone,
      uf,
      cidade: city,
      site,
    };

    await api.put('/adm_panel/partner/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    handleCloseEdit();
    handleList();
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

              <p className="type">{partner.tipo}</p>
              <p className="city">
                {partner.cidade} / {partner.uf}
              </p>
              <p className="phone">{partner.phone}</p>
              <p className="site">{partner.site}</p>
              <p className="segmento">{partner.segmento}</p>

              <div className="actions">
                <button
                  className="action"
                  type="button"
                  onClick={() => handleDelete(partner.id_partner)}
                >
                  <IoMdTrash size={20} />
                </button>
                <button
                  className="action"
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
            <Option options={listUf} onChange={handleUf} />
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
    </Background>
  );
}

export default Partner;
