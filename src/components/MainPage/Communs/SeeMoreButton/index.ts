import styled from "styled-components";

export const SeeMoreButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeeMoreButton = styled.button`
  border: 1.25px solid ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  padding: 0.8rem;
  font-size: 1.05rem;
  width: 200px;
  margin-bottom: 2rem;
  transition: 0.2s ease-in-out all;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
