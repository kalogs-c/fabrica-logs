import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  
  @media (min-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
