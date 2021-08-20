import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 100;
`;
