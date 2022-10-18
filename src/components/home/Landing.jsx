import Card from "../designs/Card";

function Landing({ data }) {
  return (
    <>
      <section className="w-full h-max px-16 py-24">
        <h1 className="font-bold sticky top-[96px] py-6 z-10 bg-white ">
          Trending
        </h1>
        <div className="flex items-center gap-4 flex-wrap">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Landing;
