import Head from "next/head";

// Components
import { WelcomeWrapper } from "./style";
import MainHeader from "./Header";
import WelcomePanel from "./WelcomePanel";
import MiniAboutMe from "./MiniAboutMe";
import Projects from "./MainPageProjects";
import MySkills from "./MySkills";

export default function MainPage() {
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
      <Projects />
      <MySkills />
    </>
  );
}
