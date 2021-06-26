import {
  Container,
  ContainerTop,
  UsernameTop,
  DivImage,
  DivInfo,
  ContentWrapper,
  Title,
  FollowBar,
} from './style';
import Logout from '../../assets/images/logout.svg';

function Home() {
  return (
    <Container>
      <ContainerTop>
        <UsernameTop>
          <p>#User</p>
          <p id="exit">
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
        <FollowBar>
          <li>
            <h2>32</h2>
            <p>Seguidores</p>
          </li>
          <li>
            <h2>32</h2>
            <p>Seguindo</p>
          </li>
          <li>
            <h2>10</h2>
            <p>Repos</p>
          </li>
        </FollowBar>
      </ContentWrapper>
    </Container>
  );
}

export default Home;
