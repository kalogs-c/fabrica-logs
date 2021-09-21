import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { request } from "../lib/datocms";

import MainPage from "@components/MainPage";

const HOMEPAGE_QUERY = `{
  allProjects {
    id
    title
    description
    image {
      url
    }
  }
}`;

export default function Home({ data }) {
  return <MainPage projectsData={data} />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const data = await request({
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
