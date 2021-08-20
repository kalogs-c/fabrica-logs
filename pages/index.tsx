import Head from "next/head";

// Components
import MainHeader from "./../src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrica Logs</title>
      </Head>
      <MainHeader />
    </>
  );
}
