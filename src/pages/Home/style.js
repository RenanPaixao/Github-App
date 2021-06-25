import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerTop = styled.div`
  height: 12rem;

  background-color: var(--gray-two);

  @media (min-width: 800px) {
    height: 10rem;
  }
`;

export const UsernameTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0;

  color: var(--white);

  @media (min-width: 800px) {
    padding: 2rem 4rem 0;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1.0625rem;

    @media (min-width: 800px) {
      font-size: 1.6rem;
    }

    img {
      filter: invert(18%) sepia(98%) saturate(1920%) hue-rotate(342deg)
        brightness(114%) contrast(89%);
      margin-left: 0.3rem;
      width: 1.1875rem;
      height: 1.1875rem;

      @media (min-width: 800px) {
        width: 2.1875rem;
        height: 2.1875rem;
      }
    }
  }
`;
