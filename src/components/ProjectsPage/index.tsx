import Head from "next/head";

// Components
import MainHeader from "@components/Communs/Header";
import SendMail from "@components/Communs/SendMail";
import { useTranslation } from "react-i18next";
import ProjectCardRender from "./ProjectCardRender";

function ProjectsPage({ projectsData }: { projectsData: object[] }) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("pagetitles:Projects")} - Fabrica Logs</title>
      </Head>
      <MainHeader />
      <ProjectCardRender data={projectsData} />
      <SendMail />
    </>
  );
}

export default ProjectsPage;
