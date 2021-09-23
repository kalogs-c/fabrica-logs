import Head from "next/head";
import MainHeader from "@components/Communs/Header";
import Project from "./Project";
import SendMail from "@components/Communs/SendMail";

function SingleProjectPage({ projectData }) {
  return (
    <>
      <Head>
        <title>Fabrica Logs</title>
      </Head>
      <MainHeader />
      <Project data={projectData} />
      <SendMail />
    </>
  );
}

export default SingleProjectPage;
