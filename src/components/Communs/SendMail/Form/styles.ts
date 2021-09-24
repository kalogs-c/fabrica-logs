import styled from "styled-components";

export const FormCamp = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: #fff;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  &:focus ~ span,
  &:valid ~ span  {
    transform: translate(-0.5rem, -2rem);
    color: #fff;
  }
`;

export const ContentInput = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  width: 100%;
  height: 200px;
  resize: none;

  &:focus ~ span,
  &:valid ~ span {
    transform: translate(-0.5rem, -2rem);
    color: #fff;
  }
`;

export const InputAnimatedPlaceholder = styled.span`
  color: ${({ theme }) => theme.colors.greyFont};
  position: absolute;
  top: 1px;
  left: 1px;
  padding: 0.65rem;
  transition: all 0.3s ease-out;
  pointer-events: none;
`;

export const Wrapper = styled.div`
  display: block;
  gap: 1erem;
  max-width: 100%;

  @media (min-width: 800px) {
    display: grid;
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
    pointer-events: none;

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

export const Footer = styled.footer`
  background-color: #fff;
  max-width: 400px;
  margin: 0 1rem;
  padding: 0.5rem;
  position: relative;
  bottom: -1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 3px;

  a {
    text-align: center;
    display: block;
    word-wrap: break-word;
    justify-content: center;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
