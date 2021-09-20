import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

import AboutPage from "@components/AboutPage";

export default function Projects() {
  return <AboutPage />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["header", "email-inputs"])),
  },
});
