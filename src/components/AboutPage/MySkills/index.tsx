import { Container } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";
import SkillCard from "./SkillCard";

import { skillList } from "./skillList";
import { useTranslation } from "next-i18next";

function MySkills() {
  const { t } = useTranslation();
  return (
    <>
      <Title id="myskills" className="myskills" >{t("myskills:My skills")}</Title>
      <Container>
        {skillList.map(({ name, imageUrl }) => (
          <SkillCard key={name} imageUrl={imageUrl} name={name} />
        ))}
      </Container>
    </>
  );
}

export default MySkills;
