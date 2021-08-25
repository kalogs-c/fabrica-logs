import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import styled from "styled-components";

// Components
import MainHeader from "./../src/components/Header";
import WelcomePanel from "./../src/components/WelcomePanel";

const WelcomeWrapper = styled.div`
  height: 80vh;
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
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["header", "welcomepage"])),
  },
});
