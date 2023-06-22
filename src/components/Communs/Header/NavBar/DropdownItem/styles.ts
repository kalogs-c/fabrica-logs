import styled from "styled-components";

export const Container = styled.span`
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-out;
  z-index: 20;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.2s;
  }
`;
