import Head from "next/head";

// Components
import { WelcomeWrapper } from "./style";
import MainHeader from "@components/Communs/Header";
import WelcomePanel from "./WelcomePanel";
import MiniAboutMe from "./MiniAboutMe";
import SendMail from "@components/Communs/SendMail";

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
      <SendMail />
    </>
  );
}
