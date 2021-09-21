import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  max-width: 340px;
`;

export const TextWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-top: none;
  padding: 0.75rem 1rem;
`;

export const Title = styled.h2`
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.darkerPrimaryColor};
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.darkFont};
  font-size: 0.875rem;
`;
