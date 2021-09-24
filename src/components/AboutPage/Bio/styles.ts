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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 700px) {
    gap: 1rem;
  }
`;

export const EmailButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  transition: all 0.2s ease-out;
  width: 300px;
  padding: 0.8rem;
  border: none;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  letter-spacing: 1.5px;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;
