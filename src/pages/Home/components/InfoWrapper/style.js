import styled from 'styled-components';

const InfoWrapperStyle = styled.div`
  margin-top: 3.5rem;

  h1 {
    min-width: max-content;
  }

  h3 {
    min-width: max-content;
    font-size: 1.125rem;
    font-weight: lighter;

    margin: 0.5rem 0.5rem 0 1.5rem;
  }
  @media (min-width: 800px) {
    width: min-content;

    h1 {
      margin-bottom: 1rem;
    }
  }
`;

export default InfoWrapperStyle;
