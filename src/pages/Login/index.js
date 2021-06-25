import { Container, Button } from './style';
import Image from '../../assets/images/github.svg';

function Login() {
  return (
    <Container>
      <img src={Image} alt="Ícone do github" />
      <input type="text" placeholder="Usuário"></input>
      <Button>{'ENTRAR ->'}</Button>
    </Container>
  );
}

export default Login;
