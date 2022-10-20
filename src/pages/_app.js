import "../styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress color="#b91c1c" height={5} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
