import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 68.5%;

  @media (min-width: 800px) {
    height: 78.5%;
  }
`;

export const LottieBackground = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;

  @media (min-width: 800px) {
    right: 10rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
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

  span {
    font-weight: lighter;

    @media (min-width: 600px) {
      font-size: 1.4rem;
    }
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    width: 100%;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.4rem;

      @media (min-width: 430px) {
        font-size: 2rem;
      }

      @media (min-width: 700px) {
        font-size: 2.4rem;
      }

      @media (min-width: 800px) {
        font-size: 3rem;
      }

      @media (min-width: 1080px) {
        font-size: 4rem;
      }
    }

    span {
      &:nth-child(1) {
        align-self: flex-start;
        display: flex;
        .typing-effect {
          white-space: pre-wrap;
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      &:nth-child(2) {
        justify-self: center;
      }
    }
  }
`;
