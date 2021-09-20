import Head from "next/head";

// Components
import { Container } from "./styles";
import MainHeader from "@components/Communs/Header";
import SendMail from "@components/Communs/SendMail";
import Description from "./Description";
import Bio from "./Bio";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Fabrica Logs</title>
      </Head>
      <MainHeader />
      <Container>
        <Description />
        <Bio />
      </Container>
      <SendMail />
    </>
  );
}

export default AboutPage;
