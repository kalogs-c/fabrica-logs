import { useState } from "react";
import Lottie from "react-lottie";
import LoadingCircle from "@LottieFiles/LoadingCircle/loadingcircle.json";

import { Container } from "./styles";

function LoadingCircleAnimation() {
  // Lottie config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingCircle,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
    direction: -1,
  });

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </Container>
  );
}

export default LoadingCircleAnimation;
