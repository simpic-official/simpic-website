import React, { useState, useEffect } from "react";
import VideoBackground from "../components/VideoBackground"; // Import your video background component
import { NavLink } from "react-router-dom";
import '../Home.css'; // Ensure correct path

const Home = ({ user }) => {
  const [mouseEnter, setMouseEnter] = useState("zero");
  const [bgColor, setBgColor] = useState("bg-[rgba(217,217,217,1)]");

  useEffect(() => {
    if (mouseEnter === "one") {
      setBgColor("bg-[rgb(239,238,220)]");
    } else if (mouseEnter === "two") {
      setBgColor("bg-[rgb(220,233,194)]");
    } else if (mouseEnter === "three") {
      setBgColor("bg-[rgb(211,219,252)]");
    } else if (mouseEnter === "four") {
      setBgColor("bg-[rgb(251,234,254)]");
    } else if (mouseEnter === "five") {
      setBgColor("bg-[rgb(223,241,254)]");
    } else if (mouseEnter === "six") {
      setBgColor("bg-[rgb(123,152,117)]");
    } else {
      setBgColor("bg-[rgba(217,217,217,1)]");
    }
  }, [mouseEnter]);

  return (
    <div className={`home-header min-w-screen min-h-screen ${bgColor} flex flex-col items-center`}>
      <VideoBackground /> {/* Add video background component */}

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

      <section className="flex flex-wrap w-full max-w-screen-2xl justify-between items-center h-[500px] px-4 md:px-20">
        <div className="flex flex-col gap-5">
          <p className="font-bold text-4xl">The new style competition</p>
          <p className="font-light text-gray-500">
            The new style of competition never seen before!
          </p>
          <button className="bg-black text-white px-4 py-3 rounded-lg w-fit">
            Learn more
          </button>
        </div>
      </section>

      {/* Other sections can follow here */}
    </div>
  );
};

export default Home;
