import Title from '../Title/index';
import ImageWrapper from '../ImageWrapper/index';

import FollowWrapper from './style';
import ArrowRight from '../../assets/images/arrowRight.svg';

export default function Follow() {
  return (
    <FollowWrapper>
      <Title />
      <ImageWrapper small />
      <h4>#USERNAME</h4>
      <img src={ArrowRight} alt="Seta para ver perfil" />
    </FollowWrapper>
  );
}
