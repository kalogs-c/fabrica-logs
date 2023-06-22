import { Container, Span, TextWrapper } from "./styles";

import Typical from "react-typical";
import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();
  return (
    <Container>
      <TextWrapper>
        <h1>
          <Typical
            className="typing-effect"
            loop={Infinity}
            wrapper="b"
            steps={[
              "Kalogs.ts",
              700,
              "Developer.yaml",
              700,
              "Carlos.js",
              700,
              "Brazilian.c",
              700,
              "Curious.go",
              700,
              "Handsome.css",
              700,
            ]}
          />
        </h1>
        <Span>{t("aboutme:A developer")}</Span>
        <Span>{t("aboutme:and cares")}</Span>
      </TextWrapper>
    </Container>
  );
}

export default Description;
