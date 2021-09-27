import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

import AboutPage from "@components/AboutPage";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <AboutPage />
    </motion.div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "header",
      "email-inputs",
      "aboutme",
      "pagetitles",
    ])),
  },
});
