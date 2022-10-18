import Link from "next/link";
import { MdLocalMovies } from "react-icons/md";
import Navbar_Desktop from "./Navbar_Desktop";

function Navbar() {
  return (
    <>
      <header
        className="fixed inset-0 z-50 w-full h-fit border-b border-b-[#0000001a] px-16 py-6
      flex items-center justify-between gap-4"
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

        <p>Search</p>
      </header>
    </>
  );
}

export default Navbar;
