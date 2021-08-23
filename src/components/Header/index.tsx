import Lottie from "react-lottie";
import rotatingGear from "./../../LottieFiles/RotatingGear/gear.json";
import router from "next/router";
import { useState } from "react";

// components
import { Header, Wrapper, Title } from "./styles";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";

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

  const [title, setTitle] = useState("");
  useEffect(() => {
    if (window.screen.width > 360) {
      setTitle("Fabrica Logs");
    } else {
      setTitle("Fl");
    }
  }, []);

  return (
    <Header>
      <Wrapper onClick={() => router.push("/")}>
        <Title>{title}</Title>
        <Lottie options={defaultOptions} height={50} width={50} />
      </Wrapper>
      <NavBar />
      <div style={{ position: "absolute", right: 0 }}>
        <MobileMenu />
      </div>
    </Header>
  );
}
