import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 70px;

  
  
  color: ${({ theme }) => theme.colors.primary};
`;

export { Header };