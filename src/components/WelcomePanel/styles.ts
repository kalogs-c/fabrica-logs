import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LottieContainer = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;

  @media (min-width: 800px) {
    right: 10rem;
  }
`;
