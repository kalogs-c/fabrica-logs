import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AboutPage from "@components/AboutPage";

export default function Projects() {
  return <AboutPage />;
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["header", "email-inputs"])),
  },
});
