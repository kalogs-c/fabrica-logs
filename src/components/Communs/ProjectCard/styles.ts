import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  max-width: 340px;
  transition: all 0.2s ease-out;
  background-color: #fff;

  &:hover {
    transform: scale(1.01, 1.01);
  }

  img {
    border: 1px solid ${({ theme }) => theme.colors.greyFont} !important;
    border-bottom: none !important;
  }
`;

export const TextWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 5px;
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
