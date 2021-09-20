import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 77.5%;
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

  padding: 1rem 2rem;
  margin-bottom: 5rem;

  @media (min-width: 600px) {
    padding: 2rem 4rem;
  }

  @media (min-width: 800px) {
    padding: 0 7rem;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    width: 100%;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1rem;

      @media (min-width: 430px) {
        font-size: 1.4rem;
      }

      @media (min-width: 630px) {
        font-size: 1.7rem;
      }
    }

    span {
      display: flex;
      align-self: flex-start;
      .typing-effect {
        white-space: pre-wrap;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 0.5rem
      }
    }
  }
`;
