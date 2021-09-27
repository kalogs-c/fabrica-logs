import styled from "styled-components";

export const Container = styled.ul`
  border-radius: 15px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 600px) {
    margin: 1rem 4rem 5rem 4rem;
  }
`;

export const TitleBlock = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkFont};
  margin: 0 4rem;
  max-width: 5rem;
  font-weight: bolder;
  font-size: 1.2rem;
`;
