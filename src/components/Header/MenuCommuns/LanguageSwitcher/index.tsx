import { Container } from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("id");
  const handleLangChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <Container onChange={handleLangChange} value={language}>
      <option value="pt">PT-BR</option>
      <option value="en">EN-US</option>
    </Container>
  );
}

export default LanguageSwitcher;
