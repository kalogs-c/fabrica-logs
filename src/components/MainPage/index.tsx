import Head from "next/head";

// Components
import { WelcomeWrapper } from "./style";
import MainHeader from "@components/Communs/Header";
import WelcomePanel from "./WelcomePanel";
import MiniAboutMe from "./MiniAboutMe";
import Projects from "./MainPageProjects";
import SomeSkills from "./SomeSkills";
import SendMail from "@components/Communs/SendMail";

export default function MainPage({ projectsData }: { projectsData: object[] }) {
  return (
    <>
      <Head>
        <title>Fabrica Logs</title>
      </Head>
      <WelcomeWrapper>
        <MainHeader />
        <WelcomePanel />
      </WelcomeWrapper>
      <MiniAboutMe />
      <Projects data={projectsData} />
      <SomeSkills />
      <SendMail />
    </>
  );
}
