import Head from "next/head";

// Components
import { Container } from "./styles";
import MainHeader from "@components/Communs/Header";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Fabrica Logs</title>
      </Head>
      <Container>
        <MainHeader />
        <h1>AboutPage</h1>
      </Container>
    </>
  );
}

export default AboutPage;
