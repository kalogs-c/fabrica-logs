import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";

import { Container, Title } from "./styles";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "next-i18next";

const items = [{}];

function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("projects:Projects")}</Title>
      <Container>
        <ProjectCard id="1" title="Primeiro projeto" subtitle="Este é o meu primeiro projeto" />
        <ProjectCard id="2" title="Segundo projeto" subtitle="Este é o meu segundo projeto" />
        <ProjectCard id="3" title="Terceiro projeto" subtitle="Este é o meu terceiro projeto" />
      </Container>
    </>
  );
}

export default Projects;
