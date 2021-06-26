import Title from '../../../../components/Title/index';
import { RepoWrapper, InfoRepo } from './style';

import Star from '../../../../assets/images/star.svg';
import Lock from '../../../../assets/images/lock.svg';
import Unlock from '../../../../assets/images/unlock.svg';

function Repo() {
  return (
    <RepoWrapper>
      <Title title="brasiliapp-react-native" id="titleRepo" />
      <InfoRepo>
        Repository for centralization of the BrasiliApp mobile project
      </InfoRepo>
      <div className="repoInfo">
        <span>
          <img src={Star} alt="estrela" />
          <p>32</p>
        </span>
        <span className="padlock">
          <img src={Unlock} alt="Cadeado aberto" />
          <img src={Lock} alt="Cadeado Fechado" />
        </span>
      </div>
    </RepoWrapper>
  );
}

export default Repo;
