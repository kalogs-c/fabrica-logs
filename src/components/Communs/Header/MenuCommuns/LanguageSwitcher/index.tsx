import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// components
import { List, Wrapper, Title } from "./styles";
import Link from "next/link";

function LanguageSwitcher() {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
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
          <Title className="dropdown-title">{t("header:Language")}</Title>
          <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
            <List>
              <li>
                <Link href="" locale="pt">
                  PT
                </Link>
              </li>
              <li>
                <Link href="" locale="en">
                  EN
                </Link>
              </li>
            </List>
          </motion.div>
        </Wrapper>
      </motion.div>
    </>
  );
}

export default LanguageSwitcher;
