import { useTranslation } from "next-i18next";
import router from "next/router";

import { Container } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";
import {
  SeeMoreButton,
  SeeMoreButtonBox,
} from "@components/MainPage/Communs/SeeMoreButton";
import ProjectCard from "@components/Communs/ProjectCard";

function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("main-page-projects:Projects")}</Title>
      <Container>
        <ProjectCard
          keyId="1"
          title="Primeiro projeto"
          subtitle="Este é o meu primeiro projeto"
        />
        <ProjectCard
          keyId="2"
          title="Segundo projeto"
          subtitle="Este é o meu segundo projeto"
        />
        <ProjectCard
          keyId="3"
          title="Terceiro projeto"
          subtitle="Este é o meu terceiro projeto"
        />
      </Container>
      <SeeMoreButtonBox>
        <SeeMoreButton onClick={() => router.replace("/projects")}>
          {t("some-skills:See all")}
        </SeeMoreButton>
      </SeeMoreButtonBox>
    </>
  );
}

export default Projects;
