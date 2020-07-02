import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { GoPerson, GoOrganization, GoClippy } from 'react-icons/go';
import { FaHandsHelping } from 'react-icons/fa';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';

function Mobile() {
  const history = useHistory();

  return (
    <Container>
      <input type="checkbox" id="check" />
      <label id="icone" htmlFor="check">
        <GiHamburgerMenu size={20} />
      </label>

      <div className="bar">
        <nav>
          <img src={logoImg} alt="Biso" />
          <div className="user">
            <p className="wordUser">L</p>
          </div>
          <p className="nameUser">Lucas coronel</p>

          <div className="optionBar">
            <button
              className="routesBar"
              type="button"
              onClick={() => history.push('/home')}
            >
              <AiFillHome size={22} />
              <p>Home</p>
            </button>
            <button
              className="routesBar"
              type="button"
              onClick={() => history.push('/user')}
            >
              <GoPerson size={20} />
              <p href="vazio">Usuários</p>
            </button>

            <button
              className="routesBar"
              type="button"
              onClick={() => history.push('/community')}
            >
              <GoOrganization size={22} />
              <p href="vazio">Comunidades</p>
            </button>
            <button
              className="routesBar"
              type="button"
              onClick={() => history.push('/search')}
            >
              <GoClippy size={20} />
              <p>Pesquisa</p>
            </button>
            <button
              className="routesBar"
              type="button"
              onClick={() => history.push('/partner')}
            >
              <FaHandsHelping size={20} />
              <p>Parceiro</p>
            </button>
          </div>
        </nav>
      </div>
    </Container>
  );
}

export default Mobile;
