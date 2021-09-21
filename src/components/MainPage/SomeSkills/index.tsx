import { Container } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";
import {
  SeeMoreButton,
  SeeMoreButtonBox,
} from "@components/MainPage/Communs/SeeMoreButton";
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
      <SeeMoreButtonBox>
        <SeeMoreButton onClick={() => router.replace("/about/#myskills")}>
          {t("some-skills:See all")}
        </SeeMoreButton>
      </SeeMoreButtonBox>
    </>
  );
}

export default SomeSkills;
