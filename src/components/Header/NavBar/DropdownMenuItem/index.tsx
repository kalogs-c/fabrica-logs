import { motion } from "framer-motion";

// components
import { Dropdown, Wrapper, Item } from "./styles";
import DropdownItem from "./DropdownItem";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

interface DropdownMenuItemProps {
  title: string;
}

function DropdownMenuItem({ title }: DropdownMenuItemProps) {
  return (
    <>
      <Wrapper>
        <DropdownItem content={title} />
        <Dropdown>
          <Item href="#mail">
            <span>Gmail</span>
          </Item>
          <Item
            href="https://github.com/carloshcamilo"
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span>
          </Item>
          <Item
            href="https://linkedin.com/in/carloshcamilo"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
          </Item>
        </Dropdown>
      </Wrapper>
    </>
  );
}

export default DropdownMenuItem;
