import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { request } from "../../lib/datocms";

import ProjectsPage from "@components/ProjectsPage";
import { motion } from "framer-motion";

export default function Projects({ data }: { data: object[] }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ProjectsPage projectsData={data} />
    </motion.div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const HOMEPAGE_QUERY = `{
    allProjects (locale: ${locale}) {
      id
      title
      description
      image {
        url
      }
      technologies
    }
  }`;

  const data: object[] = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 3 },
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "email-inputs",
        "pagetitles",
        "project-page",
      ])),
      data,
    },
  };
};
