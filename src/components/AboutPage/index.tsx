import Head from "next/head";

// Components
import MainHeader from "@components/Communs/Header";
import SendMail from "@components/Communs/SendMail";
import Description from "./Description";
import Bio from "./Bio";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("pagetitles:About")} - Fabrica Logs</title>
      </Head>
      <MainHeader />
      <Description />
      <Bio />
      <SendMail />
    </>
  );
}

export default AboutPage;
