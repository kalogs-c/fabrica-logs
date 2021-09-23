import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { request } from "../lib/datocms";

import MainPage from "@components/MainPage";

export default function Home({ data }: { data: object[] }) {
  return <MainPage projectsData={data} />;
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
