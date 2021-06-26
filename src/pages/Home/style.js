import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  color: var(--white);
`;
export const ContentWrapper = styled.div`
  @media (min-width: 800px) {
    margin: 0 20%;
  }
`;

export const ContainerTop = styled.div`
  height: 9rem;

  background-color: var(--gray-two);

  @media (min-width: 800px) {
    height: 10rem;
  }
`;

export const UsernameTop = styled.div`
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem 0;

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
  #exit {
    font-weight: lighter;
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
  color: var(--black);

  @media (min-width: 800px) {
    width: 12.1875rem;
    height: 12.1875rem;

    margin-top: -5rem;
  }
`;

export const DivInfo = styled.div`
  margin-top: 3.5rem;

  h3 {
    font-size: 1.125rem;
    font-weight: lighter;

    margin: 0.5rem 0.5rem 0 1.5rem;
  }
  @media (min-width: 800px) {
    width: min-content;
  }
`;

export const Title = styled.h1`
  height: 2.6rem;
  font-size: 1.625rem;
  font-weight: bold;

  display: flex;
  align-items: center;

  div {
    width: 0.7rem;
    height: 100%;

    margin-right: 0.8rem;

    background-color: var(--yellow);
    border-radius: 0 12px 12px 0;
  }
`;
export const FollowBar = styled.ul`
  width: 100%;
  height: 7rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2.3rem 0;

  background-color: var(--gray-four);

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.0625rem;
    }
  }
`;
