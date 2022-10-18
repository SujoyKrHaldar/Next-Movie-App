import Link from "next/link";
import { useRouter } from "next/router";

function Navbar_Desktop({ navLinks }) {
  const router = useRouter();

  return (
    <>
      <nav className=" font-semibold ">
        {navLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a
              className={`px-8 my-6 block text-[#989898] hover:text-black duration-300 ${
                router.pathname == links.url
                  ? " text-black before:absolute before:w-[3px] before:h-full before:top-0 before:right-[-2.15rem] before:bg-red-700"
                  : ""
              }`}
            >
              {links.link}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navbar_Desktop;
