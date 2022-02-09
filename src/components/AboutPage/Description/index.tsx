import { Container, TextWrapper, Span } from "./styles";

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
              "Developer.env",
              700,
              "Back-end-dev.js",
              700,
              "Carlos.html",
              700,
              "Happy.json",
              700,
              "Brazilian.css",
              700,
              "Curious.go",
              700,
              "Handsome.tsx",
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
