import TitleStyle from './style';

function Title(props) {
  return (
    <TitleStyle>
      <div />
      {props.title}
    </TitleStyle>
  );
}

export default Title;
