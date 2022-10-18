import Link from "next/link";
import { MdLocalMovies } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handelSearch = (e) => {
    e.preventDefault();
    if (query === "") return;
    const searchedQuery = query.trim().replaceAll(" ", "+");
    router.push(`/search?keyword=${searchedQuery}`);
  };

  return (
    <>
      <header
        className="fixed inset-0 z-50 w-full h-fit border-b border-b-[#0000001a] px-16 py-6
      flex items-center justify-between gap-4 bg-white"
      >
        <Link href="/">
          <div className="w-auto cursor-pointer flex items-center justify-start gap-2 ">
            <div
              className="text-red-700
            flex items-center text-4xl "
            >
              <MdLocalMovies />
            </div>
            <p className="text-xl font-bold">
              Movie<span className="text-red-700">DB</span>.
            </p>
          </div>
        </Link>

        <form
          onSubmit={handelSearch}
          className="flex-1 bg-gray-200 px-6 rounded-xl max-w-[400px] 
          flex items-center justify-between gap-4 mr-3"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none py-3 px-1 bg-transparent placeholder:text-sm "
            placeholder="Search by movies, tv shows and more"
          />
          {query.length === 0 ? (
            <div className="text-xl text-gray-500">
              <BiSearch />
            </div>
          ) : (
            <div
              onClick={() => setQuery("")}
              className="cursor-pointer text-xl text-gray-500"
            >
              <RiCloseLine />
            </div>
          )}
        </form>
      </header>
    </>
  );
}

export default Navbar;
