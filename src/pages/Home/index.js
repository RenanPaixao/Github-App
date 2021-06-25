import { Container, ContainerTop, UsernameTop } from './style';
import Logout from '../../assets/images/logout.svg';

function Home() {
  return (
    <Container>
      <ContainerTop>
        <UsernameTop>
          <p>#User</p>
          <p>
            Sair <img src={Logout} alt="Logout" />
          </p>
        </UsernameTop>
      </ContainerTop>
    </Container>
  );
}

export default Home;
