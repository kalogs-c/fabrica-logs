import styled from "styled-components";

export const List = styled.ul`
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
  position: absolute;
  z-index: 10;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    margin-top: 1rem;
    gap: 1rem;

    a {
      color: #3d3d3d;
      transition: all 0.2s ease-out;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

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

export const Title = styled.span`
  color: #fff;
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
`;
