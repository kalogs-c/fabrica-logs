import Head from "next/head";
import MainHeader from "@components/Communs/Header";
import Project from "./Project";
import SendMail from "@components/Communs/SendMail";

function SingleProjectPage({ projectData, readmeContent }) {
  const projectName = projectData.project.title;
  return (
    <>
      <Head>
        <title>{projectName}</title>
      </Head>
      <MainHeader />
      <Project data={projectData} readmeContent={readmeContent} />
      <SendMail />
    </>
  );
}

export default SingleProjectPage;
