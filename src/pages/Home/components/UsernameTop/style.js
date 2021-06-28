import styled from 'styled-components';

const UsernameTopStyle = styled.div`
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem 0;

  a {
    text-decoration: none;
    color: var(--white);

    @media (min-width: 800px) {
      margin-right: 20%;
    }
  }
  p {
    display: flex;
    align-items: center;
    font-size: 1.0625rem;

    @media (min-width: 800px) {
      font-size: 1.6rem;
      padding: 0;
      margin-left: 20%;
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

export default UsernameTopStyle;
