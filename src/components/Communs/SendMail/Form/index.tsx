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
  Footer,
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
  let callback = "";

  // Data camps Ref
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  // Submit Form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const content = contentRef.current.value;

    const data = {
      name,
      email,
      content,
    };

    // API request
    callback = await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(({ status }) => {
      // Letter animation
      setAnimationState({
        ...animationState,
        isStopped: false,
        direction: animationState.direction === 1 ? -1 : 1,
      });
      return status === 200 ? "goodRequest" : "badRequest";
    });

    console.log(callback);
  };

  return (
    <>
      <Wrapper>
        <FormCamp onSubmit={(e) => handleSubmit(e)}>
          <Input
            ref={nameRef}
            required
            type="text"
            name="name"
            placeholder={t("email-inputs:Name")}
          />
          <Input
            ref={emailRef}
            required
            type="email"
            name="email"
            placeholder="Email"
          />
          <ContentInput
            ref={contentRef}
            required
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
              {emailSended === "goodRequest"
                ? t("email-inputs:Email sent!")
                : t("email-inputs:Ops")}
            </h3>
            <ButtonLabel
              onClick={(e) => {
                e.preventDefault();
                setEmailSended(null);
              }}
            >
              {emailSended === "goodRequest"
                ? t("email-inputs:Great!")
                : t("email-inputs:I'll try again")}
            </ButtonLabel>
          </Modal>
        ) : (
          <SubmitWrapper>
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
                    callback: () => setEmailSended(callback),
                  },
                ]}
              />
            </div>
            <Footer>
              {t("email-inputs:Not working? Try sending directly to")}{" "}
              <a href="mailto:carloscamilocontato@gmail.com">
                carloscamilocontato@gmail.com
              </a>
            </Footer>
          </SubmitWrapper>
        )}
      </Wrapper>
    </>
  );
}

export default Form;
