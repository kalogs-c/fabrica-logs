import Head from "next/head";

// Components
import MainHeader from "./../src/components/Header";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header"])),
    },
  };
}

export default function Home({ locale }) {
  return (
    <>
      <Head>
        <title>Fabrica Logs</title>
      </Head>
      <h2>{locale}</h2>
      <MainHeader />
    </>
  );
}
