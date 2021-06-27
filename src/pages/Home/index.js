import UsernameTop from './components/UsernameTop/index';
import ImageWrapper from '../../components/ImageWrapper/index';
import InfoWrapper from './components/InfoWrapper/index';
import FollowBar from './components/FollowBar/index';
import BioWrapper from './components/BioWrapper/index';

import Context from '../../context/Context';
import { useContext } from 'react';

import { Container, ContainerTop, ContentWrapper } from './style';

function Home() {
  const { user } = useContext(Context);

  return (
    <Container>
      <ContainerTop>
        <UsernameTop login={user.login} />
      </ContainerTop>
      <ImageWrapper image={user.avatarUrl} />
      <ContentWrapper>
        <InfoWrapper
          title={user.name}
          email={user.email}
          location={user.location}
        />
        <FollowBar />
        <BioWrapper bio={user.bio} />
      </ContentWrapper>
    </Container>
  );
}

export default Home;
