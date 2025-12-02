import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <div className="bg-n-1 w-full h-full">
      <NavBar />
      <div className="fixed z-10 w-full h-full max-w-[250px] lg:max-w-[330px] max-h-[1100px] overflow-clip">
        <button className="fixed z-10 left-5 top-1/9 bg-n-1 p-0 flex flex-col gap-1 items-start peer md:hidden">
          <div className="w-5 h-1 bg-black border border-black"></div>
          <div className="w-5 h-1 bg-black border border-blackborder border-black"></div>
          <div className="w-5 h-1 bg-black border border-black"></div>
        </button>
        <div className="mt-39 bg-primary h-full text-n-1 -translate-x-full opacity-0 md:translate-x-0 md:opacity-100 peer-focus:translate-x-0 peer-focus:opacity-100 transition-all duration-500">
          <SideNav />
          <button className="absolute bottom-[22%] left-5 p-4" type="button">
            <a href="/signin">
              <div className="flex gap-4 items-center">
                <img src="/iconLogout.svg" alt="icon logout" />
                Logout
              </div>
            </a>
          </button>
        </div>
      </div>
      <div className="pb-4 flex justify-end h-full pt-39 overflow-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
