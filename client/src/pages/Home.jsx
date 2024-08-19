import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Home.css'; 

const Home = ({ user }) => {
  const [mouseEnter, setMouseEnter] = useState("zero");

  return (
    <div className="home-header min-w-screen min-h-screen flex flex-col items-center">
      {/* Video background directly included here */}
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-absolute text-center flex flex-col gap-3">
        <div className="content-relative">
          <p className="text-large text-black font-extrabold">
            SIMPIC 2025
          </p>
          <p className="text-medium">
            The 14th Siriraj International Medical Microbiology, Parasitology,
            and <br />
            Immunology Competition
          </p>
          <NavLink
            to="/registration"
            className="transition-all hover-scale-110 bg-black hover-bg-gray-800 text-white w-fit px-4 py-3 rounded-lg"
          >
            Register Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
