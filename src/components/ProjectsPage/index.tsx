import Head from "next/head";

// Components
import { Container } from "./styles";
import MainHeader from "@components/Communs/Header";
import SendMail from "@components/Communs/SendMail";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Fabrica Logs</title>
      </Head>
      <Container>
        <MainHeader />
        <h1>ProjectsPage</h1>
      </Container>
      <SendMail />
    </>
  );
}

export default ProjectsPage;
