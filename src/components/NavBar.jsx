import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {

  const location = useLocation();
  const { pathname } = location;

  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    if (pathname === "/signup") {
      setShowNavBar(false)
    } else if (pathname === "/login") {
      setShowNavBar(false)
    } else {
      setShowNavBar(true)
    }
    console.log(showNavBar)
  }, [pathname])

  return (
    <nav>
      {/** desktop navbar */}
      <div className={`${showNavBar ? "w-screen hidden md:flex justify-around items-center p-4 absolute z-10" : "hidden"}`}>
        <NavLink to="/">SIMPIC2025</NavLink>
        <div className='flex md:gap-5 items-center'>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/program">Program</NavLink>
          <NavLink to="/competition">Competition</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login" className='transition ease-in-out delay-150 px-8 py-4 bg-[rgba(247,247,247,1)] hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 rounded-md'>Log In</NavLink>
          <NavLink to="/signup" className='transition ease-in-out delay-150 px-8 py-4 text-white bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 rounded-md'>Sign Up</NavLink>
        </div>
      </div>
      {/** mobile navbar */}
      <div></div>
    </nav>
  )
}


export default NavBar