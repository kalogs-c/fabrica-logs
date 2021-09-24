import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

import Hello from "./Hello";
import { Container, TextMarkup, EmailButton, ButtonsContainer } from "./styles";

function Bio() {
  const { t } = useTranslation();
  return (
    <>
      <Hello />
      <Container>
        <p>
          {t("aboutme:My name is")}. {t("aboutme:I'm based...")}{" "}
          <TextMarkup
            style={{ cursor: "pointer" }}
            onClick={() =>
              scroller.scrollTo("myskills", {
                duration: 1000,
                delay: 0.025,
                smooth: "easeInOutQuart",
              })
            }
          >
            {t("aboutme:things that I know")}
          </TextMarkup>
          .
        </p>
        <p>{t("aboutme:I'm focused")}</p>
        <p>{t("aboutme:I also enjoy")}</p>
        <p>{t("aboutme:When I'm not coding")}</p>
        <ButtonsContainer>
          <EmailButton
            onClick={() =>
              scroller.scrollTo("email", {
                duration: 1000,
                delay: 0.025,
                smooth: "easeInOutQuart",
              })
            }
          >
            Let's talk!
          </EmailButton>
        </ButtonsContainer>
      </Container>
    </>
  );
}

export default Bio;
