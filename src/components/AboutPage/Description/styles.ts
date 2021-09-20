import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 77.5%;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media (min-width: 600px) {
    padding: 0 4rem;
  }

  @media (min-width: 800px) {
    padding: 0 7rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  justify-content: center;

  h1 {
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    .typing-effect {
      white-space: pre-wrap;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 0.5rem;
    }
  }
`;

export const Span = styled.span`
  font-size: 1rem;

  @media (min-width: 430px) {
    font-size: 1.1rem;
  }

  @media (min-width: 630px) {
    font-size: 1.25rem;
  }
`;
