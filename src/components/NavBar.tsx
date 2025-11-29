import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // scroll xuống
        setShowNav(false);
      } else {
        // scroll lên
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed z-50 top-0 w-full max-w-[1440px] h-25 p-7 bg-nav shadow-nav flex flex-1 items-center justify-around",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div>
        <a href="/">
          <h1 className="logo">
            <span className="text-primary">Dash</span>board
          </h1>
        </a>
      </div>
      <div className="xl:w-full max-w-174 flex rounded-input shadow-border-0">
        <button className="p-3 rounded-input order-1 peer" type="button">
          <img className="size-4" src="/Search.svg" alt="icon search" />
        </button>
        <input
          className="w-0 opacity-0 sm:opacity-100 sm:w-full sm:px-4 peer-focus:w-full peer-focus:opacity-100 peer-focus:px-4 transition-all duration-500"
          type="text"
          placeholder="Search your task hear..."
        />
      </div>

      <div className="hidden sm:flex gap-12 items-center ">
        <div className="flex gap-2">
          <button
            className="p-3 rounded-input hover:shadow-button-hover"
            type="button"
          >
            <img className="size-4" src="/notify.svg" alt="icon notify" />
          </button>
          <button
            className="p-3 rounded-input hover:shadow-button-hover"
            type="button"
          >
            <img
              className="size-4"
              src="/calculator.svg"
              alt="icon calculator"
            />
          </button>
        </div>
        <div className="text-inter-500">
          <p>Tuesday</p>
          <p className="text-date">20/06/2023</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
