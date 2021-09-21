import Head from "next/head";

// Components
import { Container } from "./styles";
import MainHeader from "@components/Communs/Header";
import SendMail from "@components/Communs/SendMail";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("pagetitles:Projects")} - Fabrica Logs</title>
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
