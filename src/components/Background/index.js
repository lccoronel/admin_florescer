/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Container, Scroll } from './styles';
import Main from '../Main';
import Mobile from '../Mobile';

function Background(props) {
  const windowWidth = window.innerWidth;
  return (
    <>
      <Container>
        <div className="high" />
      </Container>

      <Scroll>
        <div className="main">
          {windowWidth < 1201 ? <Mobile /> : <></>}
          <h1 className="titlePage">{props.titlePage}</h1>
          <div className="content">{props.children}</div>
        </div>
      </Scroll>
      {windowWidth > 1200 ? <Main /> : <></>}
    </>
  );
}

export default Background;
