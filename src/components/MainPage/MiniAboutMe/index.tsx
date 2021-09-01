import { useTranslation } from "next-i18next";
import { scroller } from "react-scroll";
import { Container, Section, SectionTitle, Paragraph } from "./styles";
import { Title } from "@components/MainPage/Communs/Title";

import Lottie from "react-lottie";
import Monitor from "@LottieFiles/Monitor/monitor.json";

function MiniAboutMe() {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Monitor,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Title>{t("miniaboutme:A little about me...")}</Title>
      <Container>
        <Section>
          <SectionTitle>{t("miniaboutme:I've been")}</SectionTitle>
          <Paragraph>
            {t("miniaboutme:I'm always excited")}{" "}
            <a
              onClick={() =>
                scroller.scrollTo("myskills", {
                  duration: 1000,
                  delay: 0.025,
                  smooth: "easeInOutQuart",
                })
              }
            >
              {t("miniaboutme:my skills")}.
            </a>
          </Paragraph>
          <Paragraph>{t("miniaboutme:I am also")}</Paragraph>
        </Section>
        <Lottie options={defaultOptions} height={"90%"} width={"90%"} />
      </Container>
    </>
  );
}

export default MiniAboutMe;
