import { Container } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "next-i18next";

const items = [{}];

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
    </>
  );
}

export default Projects;
