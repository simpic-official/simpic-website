import React, { useState, useEffect } from "react";
import Parallax from "../components/Parallax";
import { NavLink } from "react-router-dom";
import './Home.css'; 

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
    <div className={`home-header ${bgColor}`}>
      <Parallax />
      <div className="home-header-content">
        <div className="relative w-screen max-w-screen-2xl h-[750px] flex flex-col justify-center items-center gap-4">
          <p className="home-header-title">SIMPIC 2025</p>
          <p className="home-header-subtitle">
            The 14th Siriraj International Medical Microbiology, Parasitology, and <br />
            Immunology Competition
          </p>
          <NavLink
            to="/registration"
            className="home-header-button"
          >
            Register Now
          </NavLink>
        </div>
      </div>

      {/* Rest of the sections */}
      <section className="home-section">
        <div className="home-section-content">
          <p className="home-section-title">The new style competition</p>
          <p className="home-section-description">
            The new style of competition never seen before!
          </p>
          <button className="home-section-button">
            Learn more
          </button>
        </div>
      </section>

      {/* Other sections can follow here */}
    </div>
  );
};

export default Home;
