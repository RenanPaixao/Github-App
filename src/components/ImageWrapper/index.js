import ImageWrapperStyle from './style';

function ImageWrapper(props) {
  return (
    <ImageWrapperStyle small={props.small}>
      <h2>imagem</h2>
    </ImageWrapperStyle>
  );
}

export default ImageWrapper;
