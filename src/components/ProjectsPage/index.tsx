import Head from "next/head";

// Components
import { Container } from "./styles";
import MainHeader from "@components/Communs/Header";

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
    </>
  );
}

export default ProjectsPage;
