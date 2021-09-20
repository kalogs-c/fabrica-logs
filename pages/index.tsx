import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

import MainPage from "@src/components/MainPage";

export default function Home() {
  return <MainPage />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "header",
      "welcomepage",
      "miniaboutme",
      "main-page-projects",
      "myskills",
      "email-inputs",
    ])),
  },
});
