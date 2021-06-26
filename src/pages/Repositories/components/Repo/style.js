import styled from 'styled-components';

export const RepoWrapper = styled.div`
  color: var(--white);
  padding: 0.5rem 0 2.2rem;
  border-bottom: solid 1px var(--gray-five);

  .repoInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 1.4rem 0 1.5rem;

    span {
      display: flex;
      align-items: center;

      margin-top: 1rem;
      p {
        font-size: 0.9375rem;
        margin: auto 0 0.1rem 0.5rem;
      }
    }
    .padlock img {
      margin: 0 0.6rem;
    }
  }
`;

export const InfoRepo = styled.p`
  margin: 0.5rem 2.6rem 0 1.5rem;

  font-weight: lighter;
  color: var(--gray-six);
`;
