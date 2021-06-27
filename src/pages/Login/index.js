import { Container, Button } from './style';
import Image from '../../assets/images/github.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../../context/Context';

function Login() {
  const { user, setUser, searchUser } = useContext(Context);

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
        <label htmlFor="username">*Campo Obrigatório</label>
      </p>
      <Link
        to="/home"
        onClick={(e) => {
          setTimeout(() => {
            if (user.login !== null) {
              return;
            }
            e.preventDefault();
          }, 500);
        }}
      >
        <Button
          onClick={async () => {
            const valor = document.getElementById('username').value;

            if (valor.trim() === '') {
              showAlert();
              return;
            }
            try {
              setUser(await searchUser(valor));
            } catch (err) {
              alert('Usuário não encontrado!');
              return;
            }
          }}
        >
          {'ENTRAR ->'}
        </Button>
      </Link>
    </Container>
  );
}

export default Login;
