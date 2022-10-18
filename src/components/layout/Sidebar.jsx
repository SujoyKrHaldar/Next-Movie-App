import Link from "next/link";
import { useRouter } from "next/router";

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

function Sidebar() {
  const router = useRouter();

  return (
    <section
      className="flex-1 sticky top-0 max-w-[300px] h-full border-r border-[#0000001a] pl-12 
    flex flex-col justify-center"
    >
      <nav className=" font-semibold ">
        {navLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a
              className={`px-8 py-2 my-4 block text-[#989898] hover:text-black hover:bg-gray-100
              duration-300 rounded-l-md ${
                router.pathname == links.url
                  ? " text-black before:absolute before:w-[3px] before:h-full before:top-0 before:right-[-1.5px] before:bg-red-700"
                  : ""
              }`}
            >
              {links.link}
            </a>
          </Link>
        ))}
      </nav>

      <footer className="absolute border-t border-[#0000001a] bottom-0 left-0 w-full h-fit py-8 px-16">
        <p className="text-[#989898] text-sm">
          Copyright ©{new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}

export default Sidebar;
