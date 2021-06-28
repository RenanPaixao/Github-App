import { Container, Button } from './style';
import Image from '../../assets/images/github.svg';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Context from '../../context/Context';

function Login() {
  let history = useHistory();
  const { user, saveUser } = useContext(Context);

  function hideAlert() {
    document.getElementById('alert').style.visibility = 'hidden';
  }

  return (
    <Container>
      <img src={Image} alt="Ícone do github" />
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Usuário"
        onFocus={() => hideAlert()}
      ></input>

      <p
        id="alert"
        onClick={() => {
          hideAlert();
        }}
      >
        <label htmlFor="username">*Campo Obrigatório</label>
      </p>
      <Link
        onClick={async (e) => {
          if ((await saveUser()) === true) {
            history.push('/home');
          }
          e.preventDefault();
        }}
      >
        <Button>{'ENTRAR ->'}</Button>
      </Link>
    </Container>
  );
}

export default Login;
