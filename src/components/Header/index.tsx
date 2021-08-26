import Lottie from "react-lottie";
import rotatingGear from "./../../LottieFiles/RotatingGear/gear.json";
import router from "next/router";

// components
import { Header, Wrapper, Title } from "./styles";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default function MainHeader() {
  // Lottie config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rotatingGear,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Header>
      <Wrapper onClick={() => router.push("/")}>
        <Title />
        <Lottie options={defaultOptions} height={50} width={50} />
      </Wrapper>
      <NavBar />
      <div style={{ position: "absolute", right: 0 }}>
        <MobileMenu />
      </div>
    </Header>
  );
}
