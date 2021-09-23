import styled from "styled-components";

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.darkFont};
  transition: color 0.2s ease-out;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;
