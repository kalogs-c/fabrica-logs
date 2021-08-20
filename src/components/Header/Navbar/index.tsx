import { Container, List } from "./styles";
import MenuItem from "./MenuItem";
import DropdownMenuItem from "./DropdownMenuItem";

function NavBar() {
  return (
    <Container>
      <List>
        <MenuItem goTo="/projects" content="Projetos" />
        <MenuItem goTo="/about" content="Sobre" />
        <DropdownMenuItem
          title="Conecte-se"
        />
      </List>
    </Container>
  );
}

export default NavBar;
