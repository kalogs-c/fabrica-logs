import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProjectsPage from "@src/components/ProjectsPage";

export default function Projects() {
  return <ProjectsPage />;
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["header", "email-inputs"])),
  },
});
