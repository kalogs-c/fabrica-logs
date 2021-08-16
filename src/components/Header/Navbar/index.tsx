import styled from "styled-components";

// Components
import { Dropdown } from "./Dropdown";
import { Nav } from './styles'

export default function Navbar() {
  return (
    <Nav>
      <ul>
        <li>
          <Dropdown>Projetos</Dropdown>
        </li>
        <li>
          <Dropdown>Sobre</Dropdown>
        </li>
        <li>
          <Dropdown>Contato</Dropdown>
        </li>
      </ul>
    </Nav>
  );
}
