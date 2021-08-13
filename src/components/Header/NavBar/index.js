// Components
import { Nav, DropdownStyles } from "./styles";
import { DropdownOption, DropdownProvider } from "../Dropdown";
import { Products, Developers, Company } from "./../../Content";

export default function NavBar() {
  return (
    <>
      <DropdownStyles>
        <Nav>
          <ul>
            <li>
              <DropdownOption name="Projetos" content={Products} />
            </li>
            <li>
              <DropdownOption name="Sobre" content={Developers} />
            </li>
            <li>
              <DropdownOption name="Contato" content={Company} />
            </li>
          </ul>
        </Nav>
      </DropdownStyles>
    </>
  );
}
