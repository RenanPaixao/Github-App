import styled from 'styled-components';

const NavegationTopStyle = styled.div`
  display: flex;
  align-items: center;

  padding: 1.5rem 1rem;

  background-color: var(--gray-two);

  @media (min-width: 800px) {
    margin: 0 20%;
  }

  h3 {
    font-size: 1.0625rem;
    font-weight: 500;

    margin: 0 auto;

    color: var(--white);
  }
  img {
    height: 1.75625rem;
  }
`;

export default NavegationTopStyle;
