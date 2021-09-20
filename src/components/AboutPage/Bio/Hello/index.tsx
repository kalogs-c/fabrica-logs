import { Container, Hand } from "./styles";

import { useTranslation } from "react-i18next";

function Hello() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>
        {t("aboutme:Hello")} <Hand>👋🏼</Hand>
      </h1>
    </Container>
  );
}

export default Hello;
