import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <div className="relative overflow-auto bg-n-1 w-full h-full">
      <NavBar />
      <div className="relative mt-35 h-full">
        <button className="fixed z-10 left-5 top-1/9 bg-n-1 p-0 flex flex-col gap-1 items-start peer md:hidden">
          <div className="w-5 h-1 bg-black border border-black"></div>
          <div className="w-5 h-1 bg-black border border-blackborder border-black"></div>
          <div className="w-5 h-1 bg-black border border-black"></div>
        </button>
        <SideNav />
        <div className="pb-4 flex justify-end h-full relative">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
