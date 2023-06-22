import MenuItem from "@components/Communs/Header/MenuCommuns/MenuItem";
import LanguageSwitcher from "@components/Communs/Header/MenuCommuns/LanguageSwitcher";
import DropdownMenuItem from "./DropdownMenuItem";
import { Container, List } from "./styles";

import { useTranslation } from "next-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <Container>
      <List>
        <MenuItem goTo="https://kablogs.fun/" content={"Blog"} />
        <MenuItem goTo="/projects" content={t("header:Projects")} />
        <MenuItem goTo="/about" content={t("header:About me")} />
        <DropdownMenuItem title={t("header:Connect")} />
        <LanguageSwitcher />
      </List>
    </Container>
  );
}

export default NavBar;
