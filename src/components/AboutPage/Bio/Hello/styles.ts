import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 1.5rem 0;
  padding: 0 2rem;

  @media (min-width: 600px) {
    padding: 0 4rem;
  }

  @media (min-width: 800px) {
    padding: 0 7rem;
  }

  h1 {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.darkFont};
  }
`;

const HandSwing = keyframes`
    0% {
    transform: rotate(0deg);
    }

    10% {
    transform: rotate(-10deg);
    }

    20% {
    transform: rotate(12deg);
    }

    30% {
    transform: rotate(-10deg);
    }

    40% {
    transform: rotate(9deg);
    }

    50% {
    transform: rotate(0deg);
    }

    100% {
    transform: rotate(0deg);
    }
`;

export const Hand = styled.div`
  animation-name: ${HandSwing};
  animation-iteration-count: infinite;
  animation-duration: 1.2s;
  transform-origin: 70% 70%;
`;
