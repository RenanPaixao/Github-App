import InfoWrapperStyle from './style';
import Title from '../Title/index';

function InfoWrapper(props) {
  return (
    <InfoWrapperStyle>
      <Title title={props.title} />
      <h3>email@gmail.com</h3>
      <h3>Cidade</h3>
    </InfoWrapperStyle>
  );
}

export default InfoWrapper;
