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
  Modal,
} from "./styles";
import { useTranslation } from "next-i18next";

function Form() {
  const { t } = useTranslation();

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

  const [emailSended, setEmailSended] = useState(false);

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
            setEmailSended(true)
          }}
        >
          <Input type="text" name="name" placeholder={t("email-inputs:Name")} />
          <Input type="email" name="email" placeholder="Email" />
          <ContentInput
            type="text"
            name="content"
            placeholder={t("email-inputs:Content")}
          />
          <button
            type="submit"
            id="submit-btn"
            style={{ display: "none" }}
          ></button>
        </FormCamp>
        {emailSended ? (
          <Modal>
            <h3>Email enviado com sucesso!</h3>
            <ButtonLabel
              onClick={(e) => {
                e.preventDefault();
                setEmailSended(false);
              }}
            >
              Maravilha!
            </ButtonLabel>
          </Modal>
        ) : (
          <SubmitWrapper>
            <ButtonLabel htmlFor="submit-btn">
              {t("email-inputs:Let's work together!")}
            </ButtonLabel>
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
        )}
      </Wrapper>
    </>
  );
}

export default Form;
