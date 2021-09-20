import { motion } from "framer-motion";
import { useState } from "react";
import { scroller } from "react-scroll";

// components
import { Dropdown, Wrapper, Item } from "./styles";
import DropdownItem from "../DropdownItem";

// SVGs
import {
  GithubSVG,
  GmailSVG,
  LinkedInSVG,
} from "@components/Communs/Header/MenuCommuns/svgs";

interface DropdownMenuItemProps {
  title: string;
}

function DropdownMenuItem({ title }: DropdownMenuItemProps) {
  const [isOpen, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "100%", display: "flex" },
    closed: {
      opacity: 0,
      height: 0,
      display: "none",
      transition: {
        delay: 0.2,
      },
    },
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
              <Item
                onClick={() =>
                  scroller.scrollTo("email", {
                    duration: 2000,
                    delay: 0.025,
                    smooth: "easeInOutQuart",
                  })
                }
              >
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
