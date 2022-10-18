import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-full h-screen flex justify-evenly overflow-y-scroll">
        <Sidebar />
        <section className="flex-1 ">{children}</section>
      </main>
    </>
  );
}

export default Layout;
