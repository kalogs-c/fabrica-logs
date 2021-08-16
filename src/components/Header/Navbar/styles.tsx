import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    display: none;
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
      width: 100%;
      gap: 80px;
      li {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
