import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "JetBrains Mono", monospace;
    text-decoration: none;
    list-style: none;
    outline: none;
  }

  html {
    height: 100%;
  }

  body {
    background-color: #111111;
    height: 100%;
  }
`;

const theme = {
  colors: {
    primary: "#fba754",
    darkerPrimaryColor: "#C78442",
    greyFont: "#999",
    pFont: "#7D7268",
    darkFont: "#111111",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
