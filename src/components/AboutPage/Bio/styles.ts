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
  color: ${({ theme }) => theme.colors.primary};
`;

export const EmailButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  transition: all 0.2s ease-out;
  max-width: 300px;
  padding: 0.8rem;
  border: none;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  letter-spacing: 1.5px;
  box-shadow: 0 0 7px ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.8;
  }
`;
