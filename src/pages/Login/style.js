import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 18rem;
    min-height: 3.5rem;

    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 20px;

    @media (min-width: 800px) {
      min-width: 21.1875rem;
    }
  }
  img {
    width: 98px;
    height: 96px;

    margin-bottom: 3rem;
    filter: invert(84%) sepia(23%) saturate(4162%) hue-rotate(356deg)
      brightness(102%) contrast(109%);
  }
  #alert {
    font-size: 0.8rem;
    width: max-content;

    display: none;
    position: relative;
    z-index: 23;
    transform: translate(52%, -3rem);

    color: var(--red);

    label {
      cursor: text;
    }

    @media (min-width: 800px) {
      font-size: 1rem;

      transform: translate(53%, -3.33rem);
    }
  }
`;

export const Button = styled.button`
  min-width: 18rem;
  min-height: 3.5rem;
  font-size: 20px;
  font-weight: bold;

  background-color: var(--yellow);
  border-radius: 12px;

  @media (min-width: 800px) {
    min-width: 21.18rem;
  }
`;
