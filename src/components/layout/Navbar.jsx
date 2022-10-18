import Link from "next/link";
import { MdLocalMovies } from "react-icons/md";
import Navbar_Desktop from "./components/navbar/Navbar_Desktop";

const navLinks = [
  {
    link: "Home",
    url: "/",
  },
  {
    link: "favourite",
    url: "/favourites",
  },
  {
    link: "Watched",
    url: "/watched",
  },
  {
    link: "About",
    url: "/about",
  },
];

function Navbar() {
  return (
    <>
      <header className="flex-1 max-w-[300px] border-r-[1px] border-[#0000001a] px-8 flex flex-col justify-between">
        <Link href="/">
          <div className="w-auto cursor-pointer flex items-center justify-start gap-2  p-8">
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

        <Navbar_Desktop navLinks={navLinks} />

        <footer className="p-8">
          <p className="text-[#989898] text-sm">
            Copyright ©{new Date().getFullYear()}
          </p>
        </footer>
      </header>
    </>
  );
}

export default Navbar;
