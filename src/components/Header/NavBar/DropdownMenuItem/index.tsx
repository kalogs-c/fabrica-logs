import { motion } from "framer-motion";

// components
import { Dropdown, Wrapper, Item } from "./styles";
import DropdownItem from "./DropdownItem";

// SVGs
import { GithubSVG, GmailSVG, LinkedInSVG } from "../../MenuCommuns/svgs";
import { useRef, useState } from "react";

interface DropdownMenuItemProps {
  title: string;
}

function DropdownMenuItem({ title }: DropdownMenuItemProps) {
  const [isOpen, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        onHoverStart={() => setOpen(true)}
        onHoverEnd={() => setOpen(false)}
        onTap={() => setOpen(!isOpen)}
      >
        <Wrapper>
          <DropdownItem content={title} />
          <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
            <Dropdown>
              <Item href="#mail">
                <GmailSVG />
                <span>Gmail</span>
              </Item>
              <Item
                href="https://github.com/carloshcamilo"
                target="_blank"
                rel="noreferrer"
              >
                <GithubSVG />
                <span>Github</span>
              </Item>
              <Item
                href="https://linkedin.com/in/carloshcamilo"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInSVG />
                <span>LinkedIn</span>
              </Item>
            </Dropdown>
          </motion.div>
        </Wrapper>
      </motion.div>
    </>
  );
}

export default DropdownMenuItem;
