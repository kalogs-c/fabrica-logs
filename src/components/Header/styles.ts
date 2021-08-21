import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;

  @media (min-width: 800px) {
    padding: 30px 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    display: none;
  }

  @media (min-width: 450px) {
    div {
      display: block;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 100;
`;
