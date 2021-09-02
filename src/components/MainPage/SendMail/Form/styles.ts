import styled from "styled-components";

export const FormCamp = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
`;

export const ContentInput = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  height: 200px;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 1erem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonLabel = styled.label`
  text-align: center;
  padding: 1rem;
  width: 100%;
  border: none;
  transition: 0.3s all ease-in-out;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }

  @media (min-width: 800px) {
    max-width: 300px;
  }
`;

export const SubmitWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  div {
    display: none;

    @media (min-width: 800px) {
      display: block;
    }
  }
`;

export const Modal = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 800px) {
    margin-top: 0;
  }
`;
