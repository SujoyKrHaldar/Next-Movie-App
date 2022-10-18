import Head from "next/head";
import Layout from "../components/layout/Layout";

function favourite() {
  return (
    <>
      <Head>
        <title>Your favourites - Movie DB</title>
        <meta name="description" content="Next tailwind setup for easy work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex-1 w-full h-screen py-8 px-16 overflow-x-hidden overflow-y-scroll">
          <div className=" w-full h-full ">
            <div className=" py-4">
              <p className="mb-4 text-xl font-bold sticky top-[-32px] py-4 z-50 bg-white">
                Favourites
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {/* {data.map((item, index) => (
                  <Card key={index} item={item} />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default favourite;
