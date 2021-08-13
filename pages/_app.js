import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Georama';
    text-decoration: none;
    list-style: none;
    outline: none;
  }

  body {
    background-color: #111;
  }
`;

const theme = {
  colors: {
    primary: "#DEC51D",
    darkBackground: "#111111",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Georama:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
