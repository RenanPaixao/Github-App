import styled from 'styled-components';

const FollowBarStyle = styled.ul`
  width: 100%;
  height: 7rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2.3rem 0;

  background-color: var(--gray-four);

  a {
    text-decoration: none;
    color: var(--white);
  }

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

export default FollowBarStyle;
