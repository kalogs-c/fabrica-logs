import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 0 1rem 1rem 1rem;

  @media (min-witdth: 800px) {
    padding: 0 0 3rem 3rem;
  }
`;
