import { useTranslation } from "next-i18next";
import { Container, Title, Section, SectionTitle, Paragraph } from "./styles";

function MiniAboutMe() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("miniaboutme:A little about me...")}</Title>
      <Container>
        <Section>
          <SectionTitle>{t("miniaboutme:I've been")}</SectionTitle>
          <Paragraph>
            {t("miniaboutme:I'm always excited")} {" "}
            <a href="#skills">{t("miniaboutme:my skills")}</a>
          </Paragraph>
          <Paragraph>{t("miniaboutme:I am also")}</Paragraph>
        </Section>
      </Container>
    </>
  );
}

export default MiniAboutMe;
