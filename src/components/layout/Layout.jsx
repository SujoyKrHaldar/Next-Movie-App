import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <section className="flex justify-evenly">
        <Navbar />
        <main className="flex-1 ">{children}</main>
      </section>
    </>
  );
}

export default Layout;
