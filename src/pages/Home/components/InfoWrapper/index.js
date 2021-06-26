import InfoWrapperStyle from './style';
import Title from '../../../../components/Title/index';

function InfoWrapper() {
  return (
    <InfoWrapperStyle>
      <Title title="USERNAME" />
      <h3>email@gmail.com</h3>
      <h3>Cidade</h3>
    </InfoWrapperStyle>
  );
}

export default InfoWrapper;
