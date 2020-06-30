import React, { useState, useEffect } from 'react';
import { IoIosAddCircle, IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container, NewRegister } from './styles';
import Background from '../../components/Background';
import api from '../../services/api';

function Search() {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [dimensions, setDimensions] = useState([]);
  const [show, setShow] = useState(false);
  const [nameDimension, setNameDimension] = useState('');

  async function handleList() {
    try {
      const token = await localStorage.getItem('token');

      const response = await api.get('/adm_panel/dimensao/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      setDimensions(response.data.dimensao);
    } catch (err) {
      history.push('/');
    }
  }

  useEffect(() => {
    handleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setShow(false);
    setNameDimension('');
  };

  const handleShow = () => setShow(true);

  async function handleCreateDimension() {
    const token = await localStorage.getItem('token');

    const data = {
      name_dimensao: nameDimension,
    };

    await api.post('/adm_panel/dimensao/', data, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    handleList();
    handleClose();
  }

  async function handleDeleteDimension(idDimension) {
    const token = await localStorage.getItem('token');

    await api.delete(`/adm_panel/dimensao/${idDimension}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  }

  return (
    <Background titlePage="Pesquisa">
      <Container>
        <div className="group">
          <button className="add" type="button" onClick={handleShow}>
            <IoIosAddCircle size={20} />
            Nova Dimensão
          </button>

          <button className="addAnwser" type="button" onClick={() => {}}>
            <IoIosAddCircle size={20} />
            Nova Pergunta
          </button>
        </div>

        <div className="workspace">
          {dimensions.map((dimension) => (
            <div className="list" key={dimension.id}>
              <div className="dimension">
                <p className="name">
                  {dimension.position} - {dimension.name_dimensao}
                </p>

                <button className="action" type="button">
                  <MdEdit size={15} />
                </button>

                <button className="action" type="button">
                  <IoMdTrash size={15} />
                </button>

                <button
                  className="status"
                  type="button"
                  active={dimension.is_activate ? 'true' : 'false'}
                >
                  Ativo
                </button>
              </div>

              <div className="anwsers">
                {dimension.perguntas.map((pergunta) => (
                  <div className="anwser" key={pergunta.id}>
                    <p className="name">
                      {pergunta.position} - {pergunta.pergunta_descricao}
                    </p>

                    <button className="action" type="button">
                      <MdEdit size={15} />
                    </button>

                    <button
                      className="action"
                      type="button"
                      onClick={handleDeleteDimension}
                    >
                      <IoMdTrash size={15} />
                    </button>

                    <button
                      className="status"
                      active={pergunta.is_activate ? 'true' : 'false'}
                      type="button"
                    >
                      Ativo
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <NewRegister open={show} onClose={handleClose}>
        <div className="containerModal">
          <p className="titleModal">Nova Dimensão</p>
          <div className="line" />

          <div className="form">
            <input
              type="text"
              placeholder="Nome da dimensão"
              value={nameDimension}
              onChange={(v) => setNameDimension(v.target.value)}
            />
          </div>

          <div className="group">
            <button type="button" className="back" onClick={handleClose}>
              Voltar
            </button>
            <button
              type="submit"
              className="send"
              onClick={handleCreateDimension}
            >
              Concluir
            </button>
          </div>
        </div>
      </NewRegister>
    </Background>
  );
}

export default Search;
