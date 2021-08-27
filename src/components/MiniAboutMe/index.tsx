import { useTranslation } from "next-i18next";
import { Container } from "./styles";

function MiniAboutMe() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t("miniaboutme:A little about me...")}</h1>
      <h1>{t("header:Language")}</h1>
      <section>
        <p>{t("miniaboutme:My name is Carlos")}</p>
        <p>{t("miniaboutme:I've been")}</p>
        <p>
          {t("miniaboutme:I'm always excited")} {" "}
          {t("miniaboutme:my skills")}
        </p>
        <p>{t("miniaboutme:I am also")}</p>
      </section>
    </Container>
  );
}

export default MiniAboutMe;
