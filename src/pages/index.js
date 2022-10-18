import Head from "next/head";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.API_URL}/trending/movie/week?api_key=${process.env.MOVIEDB_API_Key}`
  );
  const data = await res.json();

  return {
    props: {
      data: data.results,
    },
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Movie DB</title>
        <meta name="description" content="Next tailwind setup for easy work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing data={data} />
      </Layout>
    </>
  );
}
