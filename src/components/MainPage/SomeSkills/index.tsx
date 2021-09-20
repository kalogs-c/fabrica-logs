import { Container, ButtonBox, Button } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";
import SkillCard from "./SkillCard";

import { skillList } from "./skillList";
import { useTranslation } from "next-i18next";
import router from "next/router";

function SomeSkills() {
  const { t } = useTranslation();
  return (
    <>
      <Title className="myskills">{t("some-skills:Some of my skills")}</Title>
      <Container>
        {skillList.map(({ name, imageUrl }) => (
          <SkillCard key={name} imageUrl={imageUrl} name={name} />
        ))}
      </Container>
      <ButtonBox>
        <Button onClick={() => router.push("/about/#myskills")}>
          {t("some-skills:See all")}
        </Button>
      </ButtonBox>
    </>
  );
}

export default SomeSkills;
