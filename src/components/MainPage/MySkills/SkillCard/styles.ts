import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TechName = styled.span`
  color: ${({ theme }) => theme.colors.greyFont};
  padding: 3rem;
  padding-top: 2rem;
  text-align: center;
`;
