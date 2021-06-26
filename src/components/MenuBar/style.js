import styled from 'styled-components';

const Container = styled.ul`
  width: 100%;
  height: 5.5rem;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px 15px 0 0;

  a {
    text-decoration: none;
    color: var(--black);
  }

  background-color: var(--white);

  @media (min-width: 800px) {
    height: 4rem;
    width: 40%;

    left: 50%;
    transform: translateX(-50%);
  }

  li {
    display: flex;
    flex-direction: column;
    img {
      width: 1.6375rem;
      height: 1.7625rem;

      margin: 0 auto;

      @media (min-width: 800px) {
        width: 1.8375rem;
        height: 1.9625rem;
      }
    }
  }
`;

export default Container;
