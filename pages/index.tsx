import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import styled from "styled-components";

// Components
import MainHeader from "@components/Header";
import WelcomePanel from "@components/WelcomePanel";
import MiniAboutMe from "@components/MiniAboutMe";

const WelcomeWrapper = styled.div`
  height: 100vh;
`;

export default function Home() {
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
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["header", "welcomepage"])),
  },
});
