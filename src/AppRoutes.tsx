import { Outlet } from "react-router";

const AppRoutes = () => {
  return (
    <div className="min-h-screen w-full relative">
      <img
        className="absolute -z-1000 w-full h-full object-cover object-center opacity-90"
        src="/bg.webp"
        alt="bg-body"
      />
      <div className="container">
        <div className="w-full h-full max-w-[1440px] max-h-[1024px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AppRoutes;
