import Title from '../Title/index';
import ImageWrapper from '../ImageWrapper/index';

import FollowWrapper from './style';
import ArrowRight from '../../assets/images/arrowRight.svg';

export default function Follow({ image, login }) {
  return (
    <FollowWrapper>
      <Title />
      <ImageWrapper image={image} small />
      <h4>#{login ? login : 'USERNAME'}</h4>
      <img src={ArrowRight} alt="Seta para ver perfil" />
    </FollowWrapper>
  );
}
