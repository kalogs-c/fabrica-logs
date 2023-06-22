import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

import { motion } from "framer-motion";

import MainPage from "@components/MainPage";

export default function Home({ data }: { data: object[] }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <MainPage />
    </motion.div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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
    },
  };
};
