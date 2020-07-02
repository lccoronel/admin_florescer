/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Container, Scroll } from './styles';
import Main from '../Main';
import Mobile from '../Mobile';
import logoImg from '../../assets/logo.png';

function Background(props) {
  const windowWidth = window.innerWidth;
  return (
    <>
      <Container>
        <div className="high" />
      </Container>

      <Scroll>
        <div className="main">
          <div className="header">
            {windowWidth < 1201 ? <Mobile /> : <></>}
            <img src={logoImg} alt="Florescer" />
          </div>
          <h1 className="titlePage">{props.titlePage}</h1>
          <div className="content">{props.children}</div>
        </div>
      </Scroll>
      {windowWidth > 1200 ? <Main /> : <></>}
    </>
  );
}

export default Background;
