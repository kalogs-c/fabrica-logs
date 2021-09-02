import { useState } from "react";

import Lottie from "react-lottie";
import SendingMail from "@LottieFiles/SendingMail/sendingMail.json";

// Components
import {
  FormCamp,
  Input,
  ContentInput,
  Wrapper,
  ButtonLabel,
  SubmitWrapper,
} from "./styles";

function Form() {
  // Lottie config
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: SendingMail,
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
    <>
      <Wrapper>
        <FormCamp
          onSubmit={(e) => {
            e.preventDefault();
            setAnimationState({
              ...animationState,
              isStopped: false,
              direction: animationState.direction === 1 ? -1 : 1,
            });
          }}
        >
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <ContentInput type="text" name="content" placeholder="Content" />
          <button
            type="submit"
            id="submit-btn"
            style={{ display: "none" }}
          ></button>
        </FormCamp>
        <SubmitWrapper>
          <ButtonLabel htmlFor="submit-btn">Let's work together!</ButtonLabel>
          <div>
            <Lottie
              options={defaultOptions}
              height={200}
              width={200}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </div>
        </SubmitWrapper>
      </Wrapper>
    </>
  );
}

export default Form;
