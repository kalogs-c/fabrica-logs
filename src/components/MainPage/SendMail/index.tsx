import { Container } from "./styles";
import Form from "./Form";
import { Title } from "@components/MainPage/Communs/Title";

function SendMail() {
  return (
    <>
      <Container className="email">
        <Title>Contact me</Title>
        <Form />
      </Container>
    </>
  );
}

export default SendMail;
