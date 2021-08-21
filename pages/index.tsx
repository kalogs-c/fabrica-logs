import Head from "next/head";

// Components
import MainHeader from "./../src/components/Header";

export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
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
