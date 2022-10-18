import Card from "../designs/Card";

function Landing({ data }) {
  return (
    <>
      <section className="w-full h-full">
        <div className="py-4">
          <p className="text-xl font-bold sticky top-[85px] py-6 z-10 bg-white">
            Trending
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
