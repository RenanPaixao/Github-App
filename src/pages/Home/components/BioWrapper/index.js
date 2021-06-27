import Bio from './style';
import Title from '../../../../components/Title/index';

function BioWrapper(bio) {
  return (
    <Bio>
      <Title title="BIO"></Title>
      <p>{bio.bio ? bio.bio : 'Não informada'}</p>
    </Bio>
  );
}

export default BioWrapper;
