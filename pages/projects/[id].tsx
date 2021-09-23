import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { request } from "../../lib/datocms";

import SingleProjectPage from "@components/SingleProjectPage";

export default function Projects({ data }: { data: object }) {
  return <SingleProjectPage projectData={data} />;
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
      ...(await serverSideTranslations(locale, ["header", "email-inputs"])),
      data,
    },
  };
};
