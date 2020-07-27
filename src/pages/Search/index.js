/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

import { Container, NewRegister, Option } from './styles';
import Background from '../../components/Background';
import {
  getList,
  getDimensions,
  createDimensao,
  deleteDimension,
  createAnwser,
  deleteAnwser,
  editDimension,
  editDimensionStatus,
  editAnwser,
  editAnwserStatus,
} from './service';

function Search() {
  const [dimensions, setDimensions] = useState([]);
  const [listDimension, setListDimension] = useState([]);
  const [show, setShow] = useState(false);
  const [showAnwser, setShowAnwser] = useState(false);
  const [showEditDimension, setShowEditDimension] = useState(false);
  const [showEditAnwser, setShowEditAnwser] = useState(false);
  const [nameDimension, setNameDimension] = useState('');
  const [anwser, setAnwser] = useState('');
  const [id, setId] = useState();
  const [idDimensao, setIdDimensao] = useState();
  const [idAnwser, setIdAnwser] = useState();

  async function handleList() {
    const response = await getList();
    setDimensions(response.dimensao);

    const dimension = await getDimensions();
    setListDimension(dimension);
  }

  useEffect(() => {
    handleList();
  }, []);

  const handleClose = () => {
    setShow(false);
    setNameDimension('');
  };

  const handleShow = () => setShow(true);

  async function handleCreateDimension() {
    const data = {
      name_dimensao: nameDimension,
    };

    const response = await createDimensao(data);

    if (response) {
      handleList();
      handleClose();
    }
  }

  async function handleDeleteDimension(idDimension) {
    const response = await deleteDimension(idDimension);

    if (response) handleList();
  }

  const handleShowAnwser = () => setShowAnwser(true);

  const handleCloseAnwser = () => {
    setShowAnwser(false);
    setAnwser('');
  };

  const handleSelect = (select) => {
    setId(select.value);
  };

  async function handleCreateAnwser() {
    const data = {
      pergunta_descricao: anwser,
      id_dimensao: id,
    };

    const response = await createAnwser(data);

    if (response) {
      handleList();
      handleCloseAnwser();
    }
  }

  async function handleDeleteAnwser(idAnwser) {
    const response = await deleteAnwser(idAnwser);

    if (response) handleList();
  }

  const handleEditModalDimensionOpen = (nome, idDimension) => {
    setShowEditDimension(true);
    setNameDimension(nome);
    setIdDimensao(idDimension);
  };

  const handleEditModalDimensionClose = () => {
    setShowEditDimension(false);
    setNameDimension('');
  };

  async function handleEditDimension() {
    const data = {
      id_dimensao: idDimensao,
      name_dimensao: nameDimension,
    };

    const response = await editDimension(data);

    if (response) {
      handleList();
      handleEditModalDimensionClose();
    }
  }

  async function handleEditDimensionStatus(idDimension, statusDimension) {
    const data = {
      id_dimensao: idDimension,
      is_activate: !statusDimension,
    };

    const response = await editDimensionStatus(data);

    if (response) handleList();
  }

  const handleEditModalAnwserOpen = (nome, idAwnser) => {
    setShowEditAnwser(true);
    setAnwser(nome);
    setIdAnwser(idAwnser);
  };

  const handleEditModalAnwserClose = () => {
    setShowEditAnwser(false);
    setNameDimension('');
  };

  async function handleEditAnwser() {
    const data = {
      id_pergunta: idAnwser,
      pergunta_descricao: anwser,
    };

    const response = await editAnwser(data);

    if (response) {
      handleList();
      handleEditModalAnwserClose();
    }
  }

  async function handleEditAnwserStatus(idPergunta, statusAnwser) {
    const data = {
      id_pergunta: idPergunta,
      is_activate: !statusAnwser,
    };

    const response = await editAnwserStatus(data);

    if (response) handleList();
  }

  return (
    <Background titlePage="Pesquisa">
      <Container>
        <div className="group">
          <button className="add" type="button" onClick={handleShow}>
            <IoIosAddCircle size={20} />
            Nova Dimensão
          </button>

          <button
            className="addAnwser"
            type="button"
            onClick={handleShowAnwser}
          >
            <IoIosAddCircle size={20} />
            Nova Pergunta
          </button>
        </div>

        <div className="workspace">
          {dimensions.map((dimension) => (
            <div className="list" key={dimension.id_dimensao}>
              <div className="dimension">
                <p className="name">{dimension.name_dimensao}</p>

                <button
                  className="edit"
                  type="button"
                  onClick={() =>
                    handleEditModalDimensionOpen(
                      dimension.name_dimensao,
                      dimension.id_dimensao
                    )
                  }
                >
                  Editar
                </button>

                <button
                  className="action"
                  type="button"
                  onClick={() => handleDeleteDimension(dimension.id_dimensao)}
                >
                  Excluir
                </button>

                <button
                  className="status"
                  type="button"
                  onClick={() =>
                    handleEditDimensionStatus(
                      dimension.id_dimensao,
                      dimension.is_activate
                    )
                  }
                >
                  {dimension.is_activate ? 'Ativo' : 'Inativo'}
                </button>
              </div>

              <div className="anwsers">
                {dimension.perguntas.map((pergunta) => (
                  <div className="anwser" key={pergunta.id_pergunta}>
                    <button
                      className="status"
                      type="button"
                      onClick={() =>
                        handleEditAnwserStatus(
                          pergunta.id_pergunta,
                          pergunta.is_activate
                        )
                      }
                    >
                      {pergunta.is_activate ? 'Ativo' : 'Inativo'}
                    </button>

                    <p className="name">{pergunta.pergunta_descricao}</p>

                    <button
                      className="edit"
                      type="button"
                      onClick={() =>
                        handleEditModalAnwserOpen(
                          pergunta.pergunta_descricao,
                          pergunta.id_pergunta
                        )
                      }
                    />

                    <button
                      className="action"
                      type="button"
                      onClick={() => handleDeleteAnwser(pergunta.id_pergunta)}
                    />
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

      <NewRegister open={showAnwser} onClose={handleCloseAnwser}>
        <div className="containerModal">
          <p className="titleModal">Nova Pergunta</p>
          <div className="line" />
          <Option
            options={listDimension}
            onChange={handleSelect}
            placeholder="Selecione uma  dimensão"
          />
          <input
            type="text"
            placeholder="Informe a pergunta"
            value={anwser}
            onChange={(v) => setAnwser(v.target.value)}
          />

          <div className="group">
            <button type="button" className="back" onClick={handleCloseAnwser}>
              Voltar
            </button>
            <button type="submit" className="send" onClick={handleCreateAnwser}>
              Concluir
            </button>
          </div>
        </div>
      </NewRegister>

      <NewRegister
        open={showEditDimension}
        onClose={handleEditModalDimensionClose}
      >
        <div className="containerModal">
          <p className="titleModal">Editar dimensão</p>
          <div className="line" />

          <input
            type="text"
            placeholder="Nome da dimensão"
            value={nameDimension}
            onChange={(v) => setNameDimension(v.target.value)}
          />

          <div className="group">
            <button
              type="button"
              className="back"
              onClick={handleEditModalDimensionClose}
            >
              Voltar
            </button>
            <button
              type="submit"
              className="send"
              onClick={handleEditDimension}
            >
              Concluir
            </button>
          </div>
        </div>
      </NewRegister>

      <NewRegister open={showEditAnwser} onClose={handleEditModalAnwserClose}>
        <div className="containerModal">
          <p className="titleModal">Editar pergunta</p>
          <div className="line" />

          <input
            type="text"
            placeholder="Informe a pergunta"
            value={anwser}
            onChange={(v) => setAnwser(v.target.value)}
          />

          <div className="group">
            <button
              type="button"
              className="back"
              onClick={handleEditModalAnwserClose}
            >
              Voltar
            </button>
            <button type="submit" className="send" onClick={handleEditAnwser}>
              Concluir
            </button>
          </div>
        </div>
      </NewRegister>
    </Background>
  );
}

export default Search;
