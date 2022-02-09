import { Container, TitleBlock } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";
import SkillCard from "./SkillCard";
import {
  languagesList,
  libsAndFrameworksList,
  toolsList,
} from "./skillList";

import { useTranslation } from "next-i18next";

function MySkills() {
  const { t } = useTranslation();

  return (
    <>
      <Title id="myskills" className="myskills">
        {t("aboutme:My skills")}
      </Title>
      <Container>
        <TitleBlock>{t("aboutme:Languages")}</TitleBlock>
        {languagesList.map(({ name, imageUrl }) => (
          <SkillCard key={name} imageUrl={imageUrl} name={name} />
        ))}
      </Container>
      <Container>
        <TitleBlock>{t("aboutme:Libraries/frameworks and tools")}</TitleBlock>
        {toolsList.map(({ name, imageUrl }) => (
          <SkillCard key={name} imageUrl={imageUrl} name={name} />
        ))}
      </Container>
    </>
  );
}

export default MySkills;
