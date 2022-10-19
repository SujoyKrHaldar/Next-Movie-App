import Head from "next/head";
import { useRouter } from "next/router";
import Card from "../components/designs/Card";
import Layout from "../components/layout/Layout";

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `${process.env.API_URL}/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US
    &query=${query.keyword}&page=1&include_adult=false`
  );
  const data = await res.json();

  return {
    props: {
      data: data.results,
    },
  };
}

function search({ data }) {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Search results - MovieDB</title>
        <meta name="description" content="Next tailwind setup for easy work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="w-full h-max px-16 py-24">
          {data.length === 0 && (
            <div className="py-4">
              <h1 className="sticky top-[96px] py-6 z-10 bg-white ">
                Search result -{" "}
                <span className="font-bold ">{query.keyword}</span>
              </h1>
              <p>No result.</p>
            </div>
          )}

          {data.length > 0 && (
            <div className="py-4">
              <div className="sticky top-[96px] py-6 z-10 bg-white space-y-2">
                <h1>
                  Search result -{" "}
                  <span className="font-bold ">{query.keyword}</span>
                </h1>
                <p>
                  {data.length > 1
                    ? `${data.length} results found.`
                    : `${data.length} result found.`}
                </p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}

export default search;
