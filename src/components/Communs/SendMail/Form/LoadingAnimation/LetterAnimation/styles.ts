import styled from "styled-components";

export const Container = styled.div`
  pointer-events: none;

  div {
    width: 50px;
  }

  @media (min-width: 800px) {
    display: block;
  }
`;
