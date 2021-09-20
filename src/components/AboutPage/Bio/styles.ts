import styled from "styled-components";

export const Container = styled.article`
  padding: 0 2rem;
  margin-bottom: 5rem;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    padding: 0 4rem;
  }

  @media (min-width: 800px) {
    padding: 0 7rem;
  }

  p {
    color: ${({ theme }) => theme.colors.darkFont};
  }
`;

export const TextMarkup = styled.span`
  color: ${({ theme }) => theme.colors.primary}
`