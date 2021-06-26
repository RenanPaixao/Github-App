import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  color: var(--white);
`;
export const ContentWrapper = styled.div`
  padding-bottom: 4rem;
  @media (min-width: 800px) {
    margin: 0 20%;
    padding-bottom: 4.5rem;
  }
`;

export const ContainerTop = styled.div`
  height: 9rem;

  background-color: var(--gray-two);

  @media (min-width: 800px) {
    height: 10rem;
  }
`;
