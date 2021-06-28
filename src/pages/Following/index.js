import ContentPageWrapper from '../../components/Container';
import Follow from '../../components/Follow/index';
import { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import NavegationTop from '../../components/NavegationTop';

function Following() {
  const { following, getFollowing } = useContext(Context);
  var validate = false;

  useEffect(() => {
    validate = true;
  }, [following]);

  return (
    <>
      <NavegationTop page="perfis" />
      <ContentPageWrapper>{validate}</ContentPageWrapper>
    </>
  );
}

export default Following;
