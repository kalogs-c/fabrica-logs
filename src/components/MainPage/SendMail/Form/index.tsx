import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRef } from "react";

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

  const [emailSended, setEmailSended] = useState("");
  const [emailCallback, setEmailCallback] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  const name = nameRef.current.value;
  const email = emailRef.current.value;
  const content = contentRef.current.value;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Letter animation
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: animationState.direction === 1 ? -1 : 1,
    });

    // Form data
    const data = {
      name,
      email,
      content,
    };

    fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if ((await res.status) === 200) {
        setEmailCallback("good");
        return;
      }
      setEmailCallback("bad");
    });
  };

  return (
    <>
      <Wrapper>
        <FormCamp onSubmit={(e) => handleSubmit(e)}>
          <Input
            ref={nameRef}
            type="text"
            name="name"
            placeholder={t("email-inputs:Name")}
          />
          <Input ref={emailRef} type="email" name="email" placeholder="Email" />
          <ContentInput
            ref={contentRef}
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
            <h3>
              {emailSended === "good"
                ? t("email-inputs:Email sent!")
                : t("email-inputs:Ops :( Something went wrong")}
            </h3>
            <ButtonLabel
              onClick={(e) => {
                e.preventDefault();
                setEmailSended(false);
              }}
            >
              {emailSended === "good" && t("email-inputs:Great!")}
              {emailSended === "bad" && t("email-inputs:I'll try again")}
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
                eventListeners={[
                  {
                    eventName: "complete",
                    callback: () => setEmailSended(emailCallback),
                  },
                ]}
              />
            </div>
          </SubmitWrapper>
        )}
      </Wrapper>
    </>
  );
}

export default Form;
