import { useTranslation } from "next-i18next";
import { scroller } from "react-scroll";
import { Container, Paragraph, Section, SectionTitle } from "./styles";
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
            {t("miniaboutme:I'm always excited")} {t("miniaboutme:my skills")}.
          </Paragraph>
        </Section>
        <Lottie options={defaultOptions} height={"90%"} width={"90%"} />
      </Container>
    </>
  );
}

export default MiniAboutMe;
