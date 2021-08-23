import Lottie from "react-lottie";
import rotatingGears from "./../../LottieFiles/WelcomePageGear/gear.json";

import { Container, LottieContainer } from "./styles";

function WelcomePanel() {
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
      <h1>WelcomePanel</h1>
      <LottieContainer>
        <Lottie options={defaultOptions} height={500} width={500} />
      </LottieContainer>
    </Container>
  );
}

export default WelcomePanel;
