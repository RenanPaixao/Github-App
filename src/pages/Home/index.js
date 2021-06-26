import {
  Container,
  ContainerTop,
  UsernameTop,
  DivImage,
  DivInfo,
  ContentWrapper,
  Title,
  FollowBar,
  BioWrapper,
} from './style';

import MenuBar from '../../components/MenuBar/index';

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

        <BioWrapper>
          <Title>
            <div />
            BIO
          </Title>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur.
          </p>
        </BioWrapper>
        <MenuBar />
      </ContentWrapper>
    </Container>
  );
}

export default Home;
