import MenuItem from "../MenuCommuns/MenuItem";
import DropdownMenuItem from "./DropdownMenuItem";
import { Container, List } from "./styles";

import { useTranslation } from "next-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <Container>
      <List>
        <MenuItem goTo="/projects" content={t("header:Projects")} />
        <MenuItem goTo="/about" content={t("header:About me")} />
        <DropdownMenuItem title={t("header:Connect")} />
      </List>
    </Container>
  );
}

export default NavBar;
