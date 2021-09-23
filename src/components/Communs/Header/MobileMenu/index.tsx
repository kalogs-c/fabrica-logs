import { motion, useCycle } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { scroller } from "react-scroll";

// Translation
import { useTranslation } from "next-i18next";

import Lottie from "react-lottie";
import Menu from "@LottieFiles/Menu/menu.json";

// components
import {
  Button,
  Wrapper,
  NavWrapper,
  SocialWrapper,
  LanguageSwitcher,
} from "./styles";
import MenuItem from "@components/Communs/Header/MenuCommuns/MenuItem";
import Link from "next/link";

// SVGs
import {
  GithubSVG,
  GmailSVG,
  LinkedInSVG,
} from "@components/Communs/Header/MenuCommuns/svgs";

function MobileMenu() {
  const { t } = useTranslation();

  // Lottie config
  const defaultOptions: object = {
    loop: false,
    autoplay: false,
    animationData: Menu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Framer motion config
  const sidebarVariants = {
    open: () => ({
      clipPath: `circle(50vh at 90vw 40px)`,
      backgroundColor: "#FBA754",
    }),
    closed: {
      clipPath: `circle(5% at 90vw 40px)`,
      transition: {
        stiffness: 20,
        damping: 40,
      },
    },
  };

  const [isOpen, setOpen] = useState<boolean>(false);
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
    direction: -1,
    speed: 2,
  });

  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        !menuToggleRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target) &&
        isOpen === true
      ) {
        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === 1 ? -1 : 1,
        });
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <Wrapper>
      <motion.div animate={isOpen ? "open" : "closed"}>
        <motion.div
          ref={menuRef}
          className="menu-div"
          variants={sidebarVariants}
        >
          <NavWrapper>
            <MenuItem goTo="/projects" content={t("header:Projects")} />
            <MenuItem goTo="/about" content={t("header:About me")} />
            <SocialWrapper>
              <a
                onClick={() => {
                  setOpen(false);
                  scroller.scrollTo("email", {
                    duration: 2000,
                    delay: 0.025,
                    smooth: "easeInQuart",
                  });
                }}
              >
                <GmailSVG />
              </a>
              <a
                href="https://github.com/carloshcamilo"
                target="_blank"
                rel="noreferrer"
              >
                <GithubSVG />
              </a>
              <a
                href="https://linkedin.com/in/carloshcamilo"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInSVG />
              </a>
            </SocialWrapper>
            <LanguageSwitcher>
              <li>
                <Link href="#" locale="pt">
                  PT
                </Link>
              </li>
              <li> | </li>
              <li>
                <Link href="#" locale="en">
                  EN
                </Link>
              </li>
            </LanguageSwitcher>
          </NavWrapper>
        </motion.div>
        <Button
          ref={menuToggleRef}
          onClick={() => {
            setAnimationState({
              ...animationState,
              isStopped: false,
              direction: animationState.direction === 1 ? -1 : 1,
            });
            setOpen(!isOpen);
          }}
        >
          <Lottie
            options={defaultOptions}
            height={100}
            width={100}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            speed={animationState.speed}
          />
        </Button>
      </motion.div>
    </Wrapper>
  );
}

export default MobileMenu;
