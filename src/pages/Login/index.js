import { Container, Button } from './style';
import Image from '../../assets/images/github.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../../context/Context';

function Login() {
  const { user, saveUser } = useContext(Context);

  function hideAlert() {
    document.getElementById('alert').style.display = 'none';
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
        to="/home"
        onClick={async (e) => {
          try {
            if (!saveUser()) {
              e.preventDefault();
            }
          } catch (err) {
            alert(err);
          }
        }}
      >
        <Button>{'ENTRAR ->'}</Button>
      </Link>
    </Container>
  );
}

export default Login;
