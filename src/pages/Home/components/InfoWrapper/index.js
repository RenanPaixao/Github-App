import InfoWrapperStyle from './style';
import Title from '../../../../components/Title/index';

function InfoWrapper({ title, email, location }) {
  return (
    <InfoWrapperStyle>
      <Title title={title} />
      <h3>{email ? email : 'Email: Não informado '}</h3>
      <h3>{location ? location : 'Cidade: Não informada'}</h3>
    </InfoWrapperStyle>
  );
}

export default InfoWrapper;
