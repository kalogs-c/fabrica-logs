import { motion, useCycle } from "framer-motion";
import { useState } from "react";

// Translation
import { useTranslation } from "next-i18next";

import Lottie from "react-lottie";
import Menu from "./../../../LottieFiles/Menu/menu.json";

// components
import { Button, Wrapper, NavWrapper, SocialWrapper } from "./styles";
import MenuItem from "../MenuCommuns/MenuItem";
// SVGs
import { GithubSVG, GmailSVG, LinkedInSVG } from "./../MenuCommuns/svgs";

function MobileMenu() {
  const { t } = useTranslation();

  // Lottie config
  const defaultOptions = {
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
      backgroundColor: "#fff",
    }),
    closed: {
      clipPath: `circle(5% at 90vw 40px)`,
      transition: {
        stiffness: 20,
        damping: 40,
      },
    },
  };

  const [isOpen, cycleOpen] = useCycle(false, true);
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
    direction: -1,
    speed: 2,
  });

  return (
    <Wrapper>
      <motion.div animate={isOpen ? "open" : "closed"}>
        <motion.div className="menu-div" variants={sidebarVariants}>
          <NavWrapper>
            <MenuItem goTo="/projects" content={t("header:Projects")} />
            <MenuItem goTo="/about" content={t("header:About me")} />
            <SocialWrapper>
              <a href="">
                <GmailSVG />
              </a>
              <a href="">
                <GithubSVG />
              </a>
              <a href="">
                <LinkedInSVG />
              </a>
            </SocialWrapper>
          </NavWrapper>
        </motion.div>
        <Button
          onClick={() => {
            setAnimationState({
              ...animationState,
              isStopped: false,
              direction: animationState.direction === 1 ? -1 : 1,
            });
            cycleOpen();
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
