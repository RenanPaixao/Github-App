import { Container, Button } from './style';
import Image from '../../assets/images/github.svg';
import { useContext } from 'react';

import Context from '../../context/Context';

function Login() {
  const { searchUser } = useContext(Context);

  function showAlert() {
    document.getElementById('alert').style.display = 'block';
  }
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
        <label for="username">*Campo Obrigatório</label>
      </p>
      <Button
        onClick={async () => {
          const valor = document.getElementById('username').value;

          if (valor.trim() === '') {
            showAlert();
            return;
          }
        }}
      >
        {'ENTRAR ->'}
      </Button>
    </Container>
  );
}

export default Login;
