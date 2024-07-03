import React, { useState, useEffect } from "react";
import pic from "../images/pic.jpg";
import bird from "../images/bird.jpeg";
import square from "../images/square.svg";
import arrow from "../images/arrow.svg";
import merchandise from "../images/merchandise.svg";
import { NavLink } from "react-router-dom";

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
    <div className="min-w-screen min-h-screen bg-[rgba(255,255,255,1)] flex flex-col items-center font-inter scroll-smooth">
      <div className="relative bg-cover w-screen h-[750px] flex justify-center items ">
        <div
          className="h-[750px] w-screen opacity-40 bg-fixed"
          loading="lazy"
          style={{
            backgroundImage: `url(${pic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
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
              className="transition-all ease-in-out duration-300 delay-150 hover:-traanslate-y-1 hover:scale-110 bg-black hover:bg-gray-800 text-white w-fit px-4 py-3 rounded-lg"
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
      {/** first section */}
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
        <div>
          <img src={bird} alt="bird" className="w-[500px]" loading="lazy"/>
        </div>
      </section>
      {/** second section */}
      <section className="flex flex-wrap w-full max-w-screen-2xl h-fit justify-between items-center px-4 md:px-20">
        <div>
          <img src={square} alt="scare" loading="lazy" className="w-screen lg:w-auto" />
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex gap-4 mb-10 mt-8 md:mt-0">
            <p className="text-4xl font-bold">Merchandise</p>
            <NavLink to="/merchandise">
              <img src={arrow} alt="arrow" className="w-[40px] h-[40px]" loading="lazy"/>
            </NavLink>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <img src={merchandise} alt="merchandise" loading="lazy"/>
              <div className="mt-2">
                <p>SIMPIC Shirt</p>
                <p className="text-[rgba(130,130,130,1)] font-light">
                  Description of product
                </p>
                <p>$599</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img src={merchandise} alt="merchandise" loading="lazy"/>
              <div className="mt-2">
                <p>Tote Bag</p>
                <p className="text-[rgba(130,130,130,1)] font-light">
                  Description of product
                </p>
                <p>$299</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** third section */}
      <section className="flex flex-col w-screen max-w-screen-2xl justify-between items-center mt-[7em] px-4 lg:px-20">
        <div
          className={`${bgColor} min-h-[675px] w-full flex flex-col justify-between rounded-lg p-2`}
        >
          <p className="text-4xl font-bold p-4 lg:p-8">
            More than a competition
          </p>
          <div className="">
            <div className="flex gap-4 lg:gap-0 flex-wrap md:flex-nowrap w-full justify-around">
              <div
                className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[rgba(255,171,171,1)] hover:bg-[rgb(230,193,205)]  px-3 py-4 rounded-lg"
                onMouseEnter={() => setMouseEnter("one")}
                onMouseLeave={() => setMouseEnter("zero")}
              >
                <p className="text-md md:text-lg mb-2">Welcome Dinner</p>
                <p className="text-[rgba(130,130,130,1)] font-extralight text-xs md:text-md">
                  Body text for whatever you'd like to type. Add main
                  <br />
                  takeaway points, quotes, anecdotes, or even a very
                  <br />
                  very short story.
                </p>
              </div>
              <div
                className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[rgba(255,171,171,1)] hover:bg-[rgb(230,193,205)]  px-3 py-4 rounded-lg"
                onMouseEnter={() => setMouseEnter("two")}
                onMouseLeave={() => setMouseEnter("zero")}
              >
                <p className="text-md lg:text-lg mb-2">Conference</p>
                <p className="text-[rgba(130,130,130,1)] font-extralight text-xs md:text-md">
                  Body text for whatever you'd like to type. Add main
                  <br />
                  takeaway points, quotes, anecdotes, of even a very
                  <br />
                  very short story.
                </p>
              </div>
              <div
                className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[rgba(255,171,171,1)] hover:bg-[rgb(230,193,205)]  px-3 py-4 rounded-lg"
                onMouseEnter={() => setMouseEnter("three")}
                onMouseLeave={() => setMouseEnter("zero")}
              >
                <p className="text-md lg:text-lg mb-2">Night Party</p>
                <p className="text-[rgba(130,130,130,1)] font-extralight text-xs md:text-md">
                  Body text for whatever you'd like to type. Add main
                  <br />
                  takeaway points, quotes, anecdotes, of even a very
                  <br />
                  very short story.
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-4 lg:gap-0 flex-wrap md:flex-nowrap w-full justify-around">
              <div
                className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[rgba(255,171,171,1)] hover:bg-[rgb(230,193,205)] px-3 py-4 rounded-lg"
                onMouseEnter={() => setMouseEnter("four")}
                onMouseLeave={() => setMouseEnter("zero")}
              >
                <p className="text-md lg:text-lg mb-2">Museum Tour</p>
                <p className="text-[rgba(130,130,130,1)] font-extralight text-xs md:text-md">
                  Body text for whatever you'd like to type. Add main
                  <br />
                  takeaway points, quotes, anecdotes, of even a very
                  <br />
                  very short story.
                </p>
              </div>
              <div
                className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[rgba(255,171,171,1)] hover:bg-[rgb(230,193,205)]  px-3 py-4 rounded-lg"
                onMouseEnter={() => setMouseEnter("five")}
                onMouseLeave={() => setMouseEnter("zero")}
              >
                <p className="text-md lg:text-lg mb-2">Cultural Excursion</p>
                <p className="text-[rgba(130,130,130,1)] font-extralight text-xs md:text-md">
                  Body text for whatever you'd like to type. Add main
                  <br />
                  takeaway points, quotes, anecdotes, of even a very
                  <br />
                  very short story.
                </p>
              </div>
              <div
                className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[rgba(255,171,171,1)] hover:bg-[rgb(230,193,205)]  px-3 py-4 rounded-lg"
                onMouseEnter={() => setMouseEnter("six")}
                onMouseLeave={() => setMouseEnter("zero")}
              >
                <p className="text-md lg:text-lg mb-2">Community</p>
                <p className="text-[rgba(130,130,130,1)] font-extralight text-xs md:text-md">
                  Body text for whatever you'd like to type. Add main
                  <br />
                  takeaway points, quotes, anecdotes, of even a very
                  <br />
                  very short story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** fourth section */}
      <section className="flex flex-col w-screen max-w-screen-2xl justify-between items-center mt-[5em] px-4 md:px-20">
        <div>
          <p className="text-xl md:text-4xl font-bold">
            What happens at SIMPIC last year
          </p>
        </div>
      </section>
      {/** fifth section */}
      <section className="flex flex-col w-screen max-w-screen-2xl h-[750px] bg-[rgba(98,149,162,1)] justify-between items-center mt-[5em]  px-4 md:px-20">

      </section>
    </div>
  );
};

export default Home;
