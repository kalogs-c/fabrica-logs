import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 3rem 3rem 3rem;
  gap: 2rem;
`;

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
