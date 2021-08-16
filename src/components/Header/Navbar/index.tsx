// Components
import DropdownMenu from "./Dropdown";
import { Nav } from './styles'

export default function Navbar() {
  return (
    <Nav>
      <ul>
        <li>
          <DropdownMenu title="Projetos" />
        </li>
        <li>
          <DropdownMenu title="Sobre" />
        </li>
        <li>
          <DropdownMenu title="Contato" />
        </li>
      </ul>
    </Nav>
  );
}
