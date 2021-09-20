import Head from "next/head";

// Components
import { Container } from "./styles";
import MainHeader from "@components/Communs/Header";
import SendMail from "@components/Communs/SendMail";
import Bio from "./Bio";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Fabrica Logs</title>
      </Head>
      <Container>
        <MainHeader />
        <Bio />
      </Container>
      <SendMail />
    </>
  );
}

export default AboutPage;
