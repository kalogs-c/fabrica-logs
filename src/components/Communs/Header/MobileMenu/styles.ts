import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const Wrapper = styled.div`
  .menu-div {
    position: fixed;
    display: flex;
    padding: 5rem 4rem 0 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  font-size: 2rem;

  select {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const Item = styled.a`
  color: #3d3d3d;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3px;
  margin-top: 1rem;
  gap: 1.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  a {
    background-color: #f1f1f1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
`;

export const LanguageSwitcher = styled.ul`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;
