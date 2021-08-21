import MenuItem from "../MenuCommuns/MenuItem";
import DropdownMenuItem from "./DropdownMenuItem";
import { Container, List } from "./styles";

function NavBar() {
  return (
    <Container>
      <List>
        <MenuItem goTo="/projects" content="Projects" />
        <MenuItem goTo="/about" content="About me" />
        <DropdownMenuItem title="Connect" />
      </List>
    </Container>
  );
}

export default NavBar;
