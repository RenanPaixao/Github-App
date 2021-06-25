import {
  Container,
  ContainerTop,
  UsernameTop,
  DivImage,
  DivInfo,
  ContentWrapper,
  Title,
} from './style';
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
      <ContentWrapper>
        <DivInfo>
          <Title>
            <div />
            USERNAME
          </Title>
          <h3>email@gmail.com</h3>
          <h3>Cidade</h3>
        </DivInfo>
      </ContentWrapper>
    </Container>
  );
}

export default Home;
