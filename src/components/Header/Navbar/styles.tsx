import styled from 'styled-components'

export const Nav = styled.nav`
  ul {
    display: none;
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
      gap: 80px;
    }
  }
`;