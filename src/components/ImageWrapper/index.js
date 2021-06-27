import ImageWrapperStyle from './style';

function ImageWrapper({ small, image }) {
  return (
    <ImageWrapperStyle small={small}>
      {image ? <img src={image} /> : <h2>imagem</h2>}
    </ImageWrapperStyle>
  );
}

export default ImageWrapper;
