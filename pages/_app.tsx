import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

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

  body {
    background-color: #fff;
  }
`;

const theme = {
  colors: {
    primary: "#fba754",
    greyFont: "#999",
    darkFont: "#111111",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
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
