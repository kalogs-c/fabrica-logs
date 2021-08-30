import styled from "styled-components";
import { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0%  {opacity: 0.4 }
 50% {  opacity: 0.6 }
 100% {  opacity: 0.4; }
`;

export const Container = styled.div`
  position: relative;
  bottom: 0;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
