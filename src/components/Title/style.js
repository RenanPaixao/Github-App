import styled from 'styled-components';

const Title = styled.h1`
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

export default Title;
