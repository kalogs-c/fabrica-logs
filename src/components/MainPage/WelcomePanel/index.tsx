import Lottie from "react-lottie";
import rotatingGears from "../../../LottieFiles/WelcomePageGear/gear.json";

import { Container, LottieBackground, TextWrapper } from "./styles";
import ScrollSign from "./ScrollSign";

import Typical from "react-typical";
import { useTranslation } from "next-i18next";

function WelcomePanel() {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rotatingGears,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <TextWrapper>
        <span>{t("welcomepage:Hello world")}</span>
        <h1>
          <span>
            {t("welcomepage:I'm -")}
            <Typical
              className="typing-effect"
              loop={Infinity}
              wrapper="b"
              steps={["Carlos", 2500, "Kalogs", 2500, "Carlinhos", 2500]}
            />
          </span>
          <span>{t("welcomepage:And this is my factory")}</span>
        </h1>
      </TextWrapper>
      <ScrollSign />
      <LottieBackground>
        <Lottie options={defaultOptions} height={750} width={750} />
      </LottieBackground>
    </Container>
  );
}

export default WelcomePanel;
