import styled from "styled-components";

import Lottie from "react-lottie";
import rotatingGear from "./../../LottieFiles/RotatingGear/gear.json";

// Components
import Navbar from "./Navbar";

const Header = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 50px;
`;

export default function MainHeader() {
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
      <div style={{display: "flex", alignItems: "center"}}>
        <h1>Fabrica Logs</h1>
        <Lottie options={defaultOptions} height={50} width={50} />
      </div>
      <Navbar />
    </Header>
  );
}
