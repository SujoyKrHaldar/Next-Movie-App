import Image from "next/image";
import { useState } from "react";

function Card({ item }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <div className="flex-[2_2_225px] h-[350px] p-4">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            loading="lazy"
            className={`opacity-60 duration-300
              ${isLoading ? "opacity-0" : ""}`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>

        <p className="text-white text-base font-bold">{item.title}</p>
      </div>
    </>
  );
}

export default Card;
