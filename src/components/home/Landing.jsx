import Card from "../designs/Card";

function Landing({ data }) {
  return (
    <>
      <div className="w-full h-screen py-8 px-16 overflow-x-hidden overflow-y-scroll">
        <div className="w-full h-full ">
          <div className=""></div>
          <div className="py-4">
            <p className="mb-4 text-xl font-bold sticky top-[-32px] py-4 z-50 bg-white">
              Trending
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              {data.slice(1).map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
