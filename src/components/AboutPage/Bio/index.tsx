import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

import Hello from "./Hello";
import { Container, TextMarkup, EmailButton } from "./styles";

function Bio() {
  const { t } = useTranslation();
  return (
    <>
      <Hello />
      <Container>
        <p>
          {t("aboutme:My name is")} (a.k.a. <TextMarkup>Kalogs</TextMarkup>),{" "}
          {t("aboutme:I'm based...")}{" "}
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
            {t("aboutme:my knowledge")}
          </TextMarkup>
          .
        </p>
        <p>{t("aboutme:I'm focused")}</p>
        <p>{t("aboutme:I also enjoy")}</p>
        <p>{t("aboutme:When I'm not coding")}</p>
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
      </Container>
    </>
  );
}

export default Bio;
