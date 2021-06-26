import UsernameTop from './components/UsernameTop/index';
import ImageWrapper from '../../components/ImageWrapper/index';
import InfoWrapper from './components/InfoWrapper/index';
import FollowBar from './components/FollowBar/index';
import BioWrapper from './components/BioWrapper/index';
import MenuBar from '../../components/MenuBar/index';

import { Container, ContainerTop, ContentWrapper } from './style';

function Home() {
  return (
    <Container>
      <ContainerTop>
        <UsernameTop />
      </ContainerTop>
      <ImageWrapper />
      <ContentWrapper>
        <InfoWrapper title="USERNAME" />
        <FollowBar />
        <BioWrapper />
        <MenuBar />
      </ContentWrapper>
    </Container>
  );
}

export default Home;
