import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerTop = styled.div`
  height: 9rem;

  background-color: var(--gray-two);

  @media (min-width: 800px) {
    height: 10rem;
  }
`;

export const UsernameTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem 0;

  color: var(--white);

  p {
    display: flex;
    align-items: center;
    font-size: 1.0625rem;

    @media (min-width: 800px) {
      font-size: 1.6rem;
      margin: 0 2rem;
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

export const DivImage = styled.div`
  width: 8.1875rem;
  height: 8.1875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: -3.75rem auto 0;

  background-color: var(--white);

  @media (min-width: 800px) {
    width: 12.1875rem;
    height: 12.1875rem;

    margin-top: -5rem;
  }
`;
