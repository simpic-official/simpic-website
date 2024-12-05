import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from '../images/simpic_logo.png'

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  const [showNavBar, setShowNavBar] = useState(true);
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  const listsOfPathname = [
    "/signup",
    "/login",
    "/registration",
    "/registration/observer",
    "/registration/competitor",
    "/registration/observer/advisor-info",
    "/registration/competitor/advisor-info",
  ];

  useEffect(() => {
    if (listsOfPathname.includes(pathname)) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    console.log(showNavBar);
  }, [pathname]);

  return (
    <nav className="w-screen flex justify-center">
      {/** desktop navbar */}
      <div
        className={`${
          showNavBar
            ? "w-screen max-w-screen-2xl hidden md:flex justify-around items-center p-4 absolute z-10"
            : "hidden"
        }`}
      >
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} className="w-[60px]"/>
          <p className="font-bold text-xl">SIMPIC 2025</p>
        </NavLink>
        <div className="flex md:gap-5 items-center">
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/program">Program</NavLink>
          <NavLink to="/competition">Competition</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink
            to="/login"
            className="transition ease-in-out delay-150 px-8 py-4 bg-[rgba(247,247,247,1)] hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 rounded-md"
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className="transition ease-in-out delay-150 px-8 py-4 text-white bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 rounded-md"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
      <div className="absolute w-screen p-4 flex md:hidden justify-end z-10" onClick={() => isShowMobileNav((prev) => !prev)}>
        <NavLink to="/" className="absolute left-4">SIMPIC2025</NavLink>
        {isShowMobileNav ? (
          <div>
            <IoMdClose
              className="text-3xl cursor-pointer"
              onClick={() => setIsShowMobileNav((prev) => !prev)}
            />
          </div>
        ) : (
          <div>
            <IoMdMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsShowMobileNav((prev) => !prev)}
            />
          </div>
        )}
        <div
          className={`absolute overflow-hidden w-[50%] p-4 py-5 rounded-lg shadow-xl bg-white transition-all duration-500 ease-in-out transform mt-10 ${
            isShowMobileNav
              ? "max-h-[30000px] opacity-100 translate-y-0 block"
              : "max-h-0 opacity-0 translate-y-5"
          }`}
        >
          <div className="flex flex-col gap-5 items-center">
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/program">Program</NavLink>
            <NavLink to="/competition">Competition</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink
              to="/login"
              className="transition ease-in-out delay-150 px-6 py-4 bg-[rgba(247,247,247,1)] hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 rounded-md"
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="transition ease-in-out delay-150 px-4 py-4 text-white bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 rounded-md"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
