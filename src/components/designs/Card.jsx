import Img from "../tools/Img";

function Card({ item }) {
  return (
    <>
      <div className="flex-[2_2_225px] h-[350px] p-4 rounded-md overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
            className="opacity-50"
          />
        </div>

        <p className="text-white text-base font-bold">{item.title}</p>
      </div>
    </>
  );
}

export default Card;
