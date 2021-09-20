import Head from "next/head";

// Components
import MainHeader from "@components/Communs/Header";
import SendMail from "@components/Communs/SendMail";
import Description from "./Description";
import Bio from "./Bio";
import MySkills from "./MySkills";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Fabrica Logs</title>
      </Head>
      <MainHeader />
      <Description />
      <Bio />
      <MySkills />
      <SendMail />
    </>
  );
}

export default AboutPage;
