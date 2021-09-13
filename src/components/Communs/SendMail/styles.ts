import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkFont};
  padding: 0 1rem 1rem 1rem;

  @media (min-witdth: 800px) {
    padding: 0 0 3rem 3rem;
  }
`;
