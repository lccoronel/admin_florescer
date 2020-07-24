import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';
import { recoveryPassword } from './services';

function SignIn() {
  const history = useHistory();

  const [username, setUsername] = useState('');

  async function handleRecoveryPaswword(e) {
    e.preventDefault();

    const data = {
      email: username,
    };

    if (username.length > 0) {
      const response = await recoveryPassword(data);
      if (response) history.push(`/password/${username}`);
    } else {
      toast.error('Preencha os dados para fazer login');
    }
  }

  return (
    <Container>
      <img src={logoImg} alt="Florescer Brasil" />
      <form onSubmit={handleRecoveryPaswword}>
        <p>Recuperar senha</p>

        <input
          type="email"
          placeholder="E-mail florescer"
          value={username}
          onChange={(value) => setUsername(value.target.value)}
        />

        <button type="submit" onClick={handleRecoveryPaswword}>
          Enviar email
          <FiArrowRight size={20} />
        </button>
      </form>
      <div className="line" />
      <Link to="/">Voltar</Link>
    </Container>
  );
}

export default SignIn;
