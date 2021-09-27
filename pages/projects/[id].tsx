import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { request } from "../../lib/datocms";

import SingleProjectPage from "@components/SingleProjectPage";
import { motion } from "framer-motion";

export default function Projects({ data }: { data: object }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SingleProjectPage projectData={data} />
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
    }
  }`;

  const data: object = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 3 },
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "email-inputs",
        "single-project",
      ])),
      data,
    },
  };
};
