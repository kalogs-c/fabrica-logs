import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-weight: lighter;
  padding: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 920px) {
    padding: 3rem;
  }
`;
