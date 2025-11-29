import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <div className="relative overflow-auto bg-n-1 w-full h-full">
      <NavBar />
      <div className="relative flex justify-end mt-35 h-full">
        <button className="bg-n-1 p-0 flex flex-col gap-1 items-start peer mt-2 ml-10 md:hidden ">
          <div className="w-5 h-1 bg-black border border-black"></div>
          <div className="w-5 h-1 bg-black border border-blackborder border-black"></div>
          <div className="w-5 h-1 bg-black border border-black"></div>
        </button>
        <SideNav />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
