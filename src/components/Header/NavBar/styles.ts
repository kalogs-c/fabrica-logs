import styled from "styled-components";

export const Container = styled.nav``;

export const List = styled.ul`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    gap: 4rem;
  }
`;
