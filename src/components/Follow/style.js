import styled from 'styled-components';

const FollowWrapper = styled.div`
  display: flex;
  align-items: center;

  color: var(--white);
  border-bottom: solid 1px var(--gray-five);
  padding: 1.5rem 0 2rem;

  h4 {
    margin: 0 auto 0 2rem;
  }
  #arrow {
    height: 1.7rem;

    margin-right: 2rem;

    @media (min-width: 800px) {
      height: 2.3rem;
    }
  }
`;

export default FollowWrapper;
