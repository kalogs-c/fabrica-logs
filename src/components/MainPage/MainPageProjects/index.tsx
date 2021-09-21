import { useTranslation } from "next-i18next";
import router from "next/router";

import { Container } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";
import {
  SeeMoreButton,
  SeeMoreButtonBox,
} from "@components/MainPage/Communs/SeeMoreButton";
import ProjectCard from "@components/Communs/ProjectCard";

function Projects({ data }) {
  const { t } = useTranslation();
  const projectList = data.allProjects;

  return (
    <>
      <Title>{t("main-page-projects:Projects")}</Title>
      <Container>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.description}
            image={project.image.url}
          />
        ))}
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
