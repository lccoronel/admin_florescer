/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { GoPerson, GoOrganization, GoClippy } from 'react-icons/go';
import { FaHandsHelping } from 'react-icons/fa';
import { RiLogoutBoxLine } from 'react-icons/ri';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';

function Main() {
  const history = useHistory();

  const [user, setUser] = useState('');

  useEffect(() => {
    async function getUser() {
      setUser(await localStorage.getItem('user'));
    }

    getUser();
  }, []);

  async function logout() {
    await localStorage.removeItem('token');
    history.push('/');
  }

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
                <p className="wordUser">{user.substring(0, 1)}</p>
              </div>
              <p className="nameUser">{user}</p>

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
                  <FaHandsHelping size={20} />
                  <p>Parceiro</p>
                </button>
                <button className="routesBar" type="button" onClick={logout}>
                  <RiLogoutBoxLine size={20} className="out" />
                  <p className="outText">Sair</p>
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
              <FaHandsHelping size={20} />
            </Link>
          </div>
          <div className="route">
            <Link to="/" className="route">
              <RiLogoutBoxLine size={20} className="out" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;
