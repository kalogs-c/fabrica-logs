import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1280px) {
    gap: 0;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: space-between;
`;

export const BackButton = styled.button`
  padding: 2px;
  max-width: 100px;
  margin: 0.5rem 1rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  font-size: 1.15rem;
  transition: all 0.2s ease-out;
  color: ${({ theme }) => theme.colors.darkFont};
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 720px;
  max-width: 1280px;
  aspect-ratio: 1920 / 1080;
`;

export const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media (min-width: 360px) {
    padding: 0 2rem;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1rem;
  display: grid;
  position: relative;
  grid-template-columns: 4fr 1fr;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkFont};
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.greyFont};
`;

export const GithubLink = styled.a`
  position: relative;
  justify-self: flex-end;
  margin-right: 3rem;
  width: 50px;
  height: 50px;
`;

export const FullDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkFont};
  margin: 2rem 0;
`;

export const TechList = styled.ul`
  margin: 1rem 0 2rem 0;
  display: grid;
  gap: 0.75rem;

  @media (min-width: 320px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TechItem = styled.li`
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.pFont};
`;

export const ReadmeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  word-break: break-word;

  img {
    width: 100%;
  }

  @media (min-width: 500px) {
    padding: 5rem;
  }
`;
