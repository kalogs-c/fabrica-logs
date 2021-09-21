import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

import ProjectsPage from "@components/ProjectsPage";

export default function Projects() {
  return <ProjectsPage />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["header", "email-inputs", "pagetitles"])),
  },
});
