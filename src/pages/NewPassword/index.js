import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory, Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';
import { recoveryPassword } from './services';

function SignIn() {
  const history = useHistory();
  const { email } = useParams();

  const [username, setUsername] = useState(email);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleRecoveryPaswword(e) {
    e.preventDefault();

    const data = {
      email: username,
      code,
      password,
    };

    if (password.length > 0 && password === confirmPassword) {
      const response = await recoveryPassword(data);
      if (response) history.push('/');
    } else {
      toast.error('Revise os dados e tente novamente');
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

        <input
          placeholder="Código enviado no email"
          value={code}
          onChange={(value) => setCode(value.target.value)}
        />

        <input
          placeholder="Digite uma nova senha"
          value={password}
          onChange={(value) => setPassword(value.target.value)}
        />

        <input
          placeholder="Confirme uma nova senha"
          value={confirmPassword}
          onChange={(value) => setConfirmPassword(value.target.value)}
        />

        <button type="submit" onClick={handleRecoveryPaswword}>
          Definir senha
          <FiArrowRight size={20} />
        </button>
      </form>
      <div className="line" />
      <Link to="/recovery">Voltar</Link>
    </Container>
  );
}

export default SignIn;
