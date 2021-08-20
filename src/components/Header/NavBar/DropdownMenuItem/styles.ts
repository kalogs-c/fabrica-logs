import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0.5rem;
  transition: color 0.2s ease-out;
  cursor: pointer;

  span {
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.2s;
    }
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.primary};

      &::after {
        width: 100%;
      }
    }
  }
`;

export const Dropdown = styled.div`
  align-items: flex-start;
  background-color: white;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity 0.3s ease-out;
  z-index: 11;
`;

export const Item = styled.a`
  color: #3d3d3d;
  border-bottom: 1px solid #f1f1f1;
`;
