import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainPage from "@components/MainPage";

export default function Home() {
  return <MainPage />;
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "header",
      "welcomepage",
      "miniaboutme",
      "main-page-projects",
      "some-skills",
      "email-inputs",
    ])),
  },
});
