import { skillList } from "./skillList";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  ListContainer,
  FilterList,
  ListItemWrapper,
  ClearFilterButton,
  ClearFilterButtonWrapper,
} from "./styles";
import ProjectCard from "@components/Communs/ProjectCard";
import Image from "next/image";

function ProjectCardRender({ data }) {
  const [projectList, setProjectList] = useState(data.allProjects);
  const cachedProjectList = data.allProjects;

  const [clearFilter, setClearFilter] = useState(false);
  const [clearFilterTech, setClearFilterTech] = useState("");

  const { t } = useTranslation();

  return (
    <>
      <FilterList>
        {skillList.map(({ name, imageUrl }) => (
          <ListItemWrapper
            key={name}
            onClick={() => {
              setClearFilter(true);
              setClearFilterTech(name);
              const filterProjectList = cachedProjectList.filter((project) => {
                const technologies = Object.values(project.technologies);
                return technologies.includes(name);
              });
              setProjectList(filterProjectList);
            }}
          >
            <Image src={imageUrl} alt={name} width="80" height="80" />
          </ListItemWrapper>
        ))}
      </FilterList>
      {clearFilter && (
        <ClearFilterButtonWrapper>
          {clearFilterTech}
          <ClearFilterButton
            onClick={() => {
              setProjectList(cachedProjectList);
              setClearFilter(false);
            }}
          >
            {t("project-page:Clear")}
          </ClearFilterButton>
        </ClearFilterButtonWrapper>
      )}
      <ListContainer>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.description}
            image={project.image.url}
          />
        ))}
      </ListContainer>
    </>
  );
}

export default ProjectCardRender;
