import React from 'react';

import { Container } from './styles';
import Background from '../../components/Background';

function Home() {
  return (
    <Background titlePage="Home">
      <Container>
        <div className="welcome">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus placeat ea tempore mollitia minima aliquid maxime
            libero voluptates omnis at magnam, adipisci illum veritatis, dolorem
            dolorum impedit qui amet dolor?
          </p>
        </div>

        <div className="containerInfo">
          <div className="box">
            <div className="header">
              <p>Comunidades cadastradas</p>
            </div>
            <div className="body">
              <p>500</p>
            </div>
          </div>

          <div className="box">
            <div className="header">
              <p>Usuários cadastrados</p>
            </div>
            <div className="body">
              <p>500</p>
            </div>
          </div>

          <div className="box">
            <div className="header">
              <p>Moradores cadastrados</p>
            </div>
            <div className="body">
              <p>500</p>
            </div>
          </div>

          <div className="box">
            <div className="header">
              <p>Lideres de comunidade cadastrados</p>
            </div>
            <div className="body">
              <p>500</p>
            </div>
          </div>

          <div className="box">
            <div className="header">
              <p>Lideres de grupo cadastrados</p>
            </div>
            <div className="body">
              <p>500</p>
            </div>
          </div>

          <div className="box">
            <div className="header">
              <p>Total de Usuários</p>
            </div>
            <div className="body">
              <p>500</p>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
}

export default Home;
