import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { request } from "../../lib/datocms";

import SingleProjectPage from "@components/SingleProjectPage";
import { motion } from "framer-motion";

export default function Projects({
  data,
  readme,
}: {
  data: object;
  readme: string;
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SingleProjectPage projectData={data} readmeContent={readme} />
    </motion.div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  const { id } = query;

  const HOMEPAGE_QUERY = `{
    project(filter: {
      id: {eq: ${id}},
    }, locale: ${locale}){
      id
      title
      description
      fullDescription
      image {
        url
      }
      technologies
      ghrepo
      repoName
    }
  }`;

  const data: any = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 3 },
  });

  const readme = await fetch(
    `https://api.github.com/repos/carloshcamilo/${data.project.repoName}/readme`
  ).then((res) => {
    const response: any = res.json();
    return response;
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "email-inputs",
        "single-project",
      ])),
      data,
      readme,
    },
  };
};
