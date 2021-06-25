import { Container, ContainerTop, UsernameTop, DivImage } from './style';
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
      <DivImage>
        <h2>imagem</h2>
      </DivImage>
    </Container>
  );
}

export default Home;
