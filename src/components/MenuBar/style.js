import styled from 'styled-components';

const Container = styled.ul`
  width: 100%;
  height: 5.5rem;
  background-color: var(--white);

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px 15px 0 0;

  li {
    display: flex;
    flex-direction: column;
    img {
      width: 1.4375rem;
      height: 1.5625rem;

      margin: 0 auto;
    }
  }
`;

export default Container;
