import styled from 'styled-components';

const ImageWrapperStyle = styled.div`
  width: 8.1875rem;
  height: 8.1875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: -3.75rem auto 0;

  background-color: var(--white);
  color: var(--black);

  img {
    width: 7.7275rem;
    height: 7.7275rem;

    border-radius: 50%;
  }

  @media (min-width: 800px) {
    width: 12.1875rem;
    height: 12.1875rem;

    margin-top: -5rem;

    img {
      width: 11.5275rem;
      height: 11.5275rem;

      border-radius: 50%;
    }
  }

  ${(props) => {
    if (props.small) {
      return `width: 5rem; 
      height: 5rem;
      
      margin: 0 0 0 0.5rem;
      
      @media (min-width: 800px) {
        width: 6.1875rem;
        height: 6.1875rem;

        margin: 0 0 0 0.5rem;
        
      }
    }
  img {
      width: 4.6275rem;
      height: 4.6275rem;
      margin: 0;

      @media (min-width: 800px) {
        width: 5.7375rem;
        height: 5.7375rem;
      }
    }`;
    }
  }}
`;

export default ImageWrapperStyle;
