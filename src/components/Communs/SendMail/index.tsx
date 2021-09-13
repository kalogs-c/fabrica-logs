import { Container } from "./styles";
import Form from "./Form";
import { Title } from "@components/MainPage/Communs/Title";
import { useTranslation } from "next-i18next";

function SendMail() {
  const { t } = useTranslation();
  
  return (
    <>
      <Container className="email">
        <Title>{t("email-inputs:Contact me")}</Title>
        <Form />
      </Container>
    </>
  );
}

export default SendMail;
