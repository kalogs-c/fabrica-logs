import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  gap: 3rem;
  margin: 2rem 20px;

  @media (min-width: 600px) {
    margin: 2rem 5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    margin: 2rem 5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FilterList = styled.ul`
  background-color: #fafbfc;
  border-radius: 15px;
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    justify-content: center;
    border-radius: 4px;
  }
`;

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-width: 60px;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

export const ClearFilterButton = styled.button`
  background-color: #00d8ff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.15rem;
  margin-right: 20px;
  cursor: pointer;

  @media (min-width: 600px) {
    margin-right: 5rem;
  }

  @media (min-width: 800px) {
    margin-right: 5rem;
  }
`;

export const ClearFilterButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  gap: 1rem;
`;
