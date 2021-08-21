import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0.5rem;

  &:hover {
    .dropdown-title {
      color: ${({ theme }) => theme.colors.primary};

      &::after {
        width: 100%;
      }
    }
  }
`;

export const Dropdown = styled.div`
  &::before {
    border-bottom: 8px solid #ddd;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    content: "";
    height: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: -8px;
    width: 0;
  }

  align-items: flex-start;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0 1rem 1rem 1rem;
  transform: translateX(calc(-25% - 8px));
  position: absolute;
  z-index: 10;
`;

export const Item = styled.a`
  color: #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  margin-top: 1rem;
  gap: 1.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
