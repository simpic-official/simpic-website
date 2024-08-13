import React, { useState, useEffect } from "react";
import VideoBackground from "../components/VideoBackground.jsx"; 
import { NavLink } from "react-router-dom";
import '../Home.css'; 

const Home = ({ user }) => {
  const [mouseEnter, setMouseEnter] = useState("zero");

  return (
    <div className={`home-header min-w-screen min-h-screen flex flex-col items-center`}>
      <VideoBackground /> 

      <div className="absolute text-center flex flex-col gap-3">
        <div className="relative w-screen max-w-screen-2xl h-[750px] flex flex-col justify-center items-center gap-4">
          <p className="text-[48px] md:text-[64px] text-black font-extrabold">
            SIMPIC 2025
          </p>
          <p className="text-[16px] md:text-[24px]">
            The 14th Siriraj International Medical Microbiology, Parasitology,
            and <br />
            Immunology Competition
          </p>
          <NavLink
            to="/registration"
            className="transition-all ease-in-out duration-300 delay-150 hover:-translate-y-1 hover:scale-110 bg-black hover:bg-gray-800 text-white w-fit px-4 py-3 rounded-lg"
          >
            Register Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
