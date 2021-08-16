import styled from "styled-components";

export const Dropdown = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.darkFont};
  }
`;