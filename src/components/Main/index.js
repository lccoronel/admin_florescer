/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { GoPerson, GoOrganization, GoClippy, GoThumbsup } from 'react-icons/go';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';

function Main() {
  const history = useHistory();

  return (
    <Container>
      <div className="open">
        <div className="close">
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
                  <p>Usuários</p>
                </button>

                <button
                  className="routesBar"
                  type="button"
                  onClick={() => history.push('/community')}
                >
                  <GoOrganization size={22} />
                  <p>Comunidades</p>
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
                  <GoThumbsup size={20} />
                  <p>Parceiro</p>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="routes">
        <div className="user">
          <p className="wordUser">L</p>
        </div>
        <div className="option">
          <div className="route">
            <Link to="/home">
              <AiFillHome size={22} />
            </Link>
          </div>
          <div className="route">
            <Link to="/user" className="route">
              <GoPerson size={20} />
            </Link>
          </div>
          <div className="route">
            <Link className="route" to="/community">
              <GoOrganization size={22} />
            </Link>
          </div>
          <div className="route">
            <Link to="/search" className="route">
              <GoClippy size={20} />
            </Link>
          </div>
          <div className="route">
            <Link to="/partner" className="route">
              <GoThumbsup size={20} />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;
