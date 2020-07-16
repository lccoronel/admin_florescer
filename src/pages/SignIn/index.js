import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';
import { handleSession } from './services';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    if (password.length > 0) {
      const response = await handleSession(data);
      if (response) history.push('Home');
    } else {
      toast.error('Preencha os dados para fazer login');
    }
  }

  return (
    <Container>
      <img src={logoImg} alt="Florescer Brasil" />
      <form onSubmit={handleLogin}>
        <p>Login do Admin Florescer</p>

        <input
          type="email"
          placeholder="E-mail florescer"
          value={username}
          onChange={(value) => setUsername(value.target.value)}
        />
        <input
          type="password"
          placeholder="Senha secreta"
          value={password}
          onChange={(value) => setPassword(value.target.value)}
        />

        <button type="submit" onClick={handleLogin}>
          Entrar
          <FiArrowRight size={20} />
        </button>
      </form>
      <div className="line" />
      <a href="/">Esqueceu sua senha?</a>
    </Container>
  );
}

export default SignIn;
