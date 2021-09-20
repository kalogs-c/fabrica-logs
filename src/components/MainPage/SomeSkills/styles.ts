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

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 1.25px solid ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  padding: 0.8rem;
  font-size: 1.05rem;
  width: 200px;
  margin: 10px 0;
  transition: 0.2s ease-in-out all;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
