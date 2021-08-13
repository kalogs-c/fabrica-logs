import styled from "styled-components";

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }

  color: ${({ theme }) => theme.colors.primary};
`;

const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    border: none;
    background: none;
    color: #fff;
    font-size: 1.1rem;
    transition: color 0.3s;

    &:hover,
    &:focus {
      color: #999
    }
  }
`;

export { Nav, DropdownStyles };
