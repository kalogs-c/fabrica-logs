import {
  Container,
  LeftContainer,
  RightContainer,
  BackButton,
  ImageWrapper,
  TitleWrapper,
  Title,
  Description,
  GithubLink,
  FullDescription,
  TechList,
  TechItem,
  ReadmeWrapper,
} from "./styles";
import Image from "next/image";

import router from "next/router";
import { useTranslation } from "react-i18next";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { base64decode } from "nodejs-base64";

function Project({ data, readmeContent }) {
  const { t } = useTranslation();

  const { title, description, fullDescription, image, technologies, ghrepo } =
    data.project;
  const technologiesList = Object.values(technologies);

  const readmeDecoded = base64decode(readmeContent.content);
  return (
    <>
      <Container>
        <LeftContainer>
          <BackButton onClick={() => router.replace("/projects")}>
            {t("single-project:Back")}
          </BackButton>
          <ImageWrapper>
            <Image src={image.url} alt={title} width="1280" height="720" />
          </ImageWrapper>
        </LeftContainer>
        <RightContainer>
          <TitleWrapper>
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>
            <GithubLink href={ghrepo} target="_blank">
              <Image
                src="data:image/png;base64,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"
                alt="Github Repository"
                layout="fill"
              />
            </GithubLink>
          </TitleWrapper>
          <FullDescription>{fullDescription}</FullDescription>
          <TechList>
            {technologiesList.map((tech) => (
              <TechItem>{tech}</TechItem>
            ))}
          </TechList>
        </RightContainer>
      </Container>

      <ReadmeWrapper>
        <h1 style={{ textAlign: "center", borderBottom: "1px solid #D0D7DE", marginBottom: "1rem"}}> Github Readme</h1>
        <ReactMarkdown
          children={readmeDecoded}
          remarkPlugins={[remarkGfm]}
          skipHtml={true}
        />
      </ReadmeWrapper>
    </>
  );
}

export default Project;
