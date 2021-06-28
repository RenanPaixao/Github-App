import ContentPageWrapper from '../../components/Container';
import Follow from '../../components/Follow/index';
import { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import NavegationTop from '../../components/NavegationTop';

function Followers() {
  const { followers, getFollowers } = useContext(Context);

  var validate = false;

  useEffect(() => {
    validate = true;
  }, [followers]);
  return (
    <>
      <NavegationTop page="seguidores" length={getFollowers().length} />

      <ContentPageWrapper>
        {validate
          ? ''
          : getFollowers().map((element) => {
              return (
                <Follow
                  login={element.login}
                  image={element.avatar_url}
                  key={element.login}
                />
              );
            })}
      </ContentPageWrapper>
    </>
  );
}

export default Followers;
