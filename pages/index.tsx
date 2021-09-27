import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { request } from "../lib/datocms";

import { motion } from "framer-motion";

import MainPage from "@components/MainPage";

export default function Home({ data }: { data: object[] }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <MainPage projectsData={data} />
    </motion.div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const HOMEPAGE_QUERY: string = `{
    allProjects (first: 3, locale: ${locale}) {
      id
      title
      description
      image {
        url
      }
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
        "welcomepage",
        "miniaboutme",
        "main-page-projects",
        "some-skills",
        "email-inputs",
      ])),
      data,
    },
  };
};
