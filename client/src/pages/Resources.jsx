import React, { useState } from "react";
import Sample from "../images/sample.svg";
import { resources } from "../constants";
import ResourceCard from "../components/ResourceCard";

const Resources = () => {
  const [slides, setSlides] = useState(resources);
  const [selectedButton, setSelectedButton] = useState({
    all: true,
    comp: false,
    regis: false,
    guide: false,
    pandem: false,
  });

  const handleFilterFunction = (id) => {
    if (id === "all") {
      setSlides(resources);
    } else if (id === "COMPETITION") {
      const newSlide = resources.filter(
        (slide) => slide.type === "COMPETITION"
      );
      setSlides(newSlide);
      console.log(slides);
    } else if (id === "REGISTRATION") {
      const newSlide = resources.filter(
        (slide) => slide.type === "REGISTRATION"
      );
      setSlides(newSlide);
      console.log(slides);
    } else if (id === "GUIDEBOOK") {
      const newSlide = resources.filter((slide) => slide.type === "GUIDEBOOK");
      setSlides(newSlide);
      console.log(slides);
    } else if (id === "PANDEMOS") {
      const newSlide = resources.filter((slide) => slide.type === "PANDEMOS");
      setSlides(newSlide);
      console.log(slides);
    }
  };

  return (
    <section className="mt-[10em] w-screen h-screen flex flex-col items-center font-inter gap-[3em]">
      <div className="flex flex-col w-[75%] h-fit">
        <p className="text-6xl font-bold text-start">Resources</p>
        <div className="w-full flex justify-between bg-[rgba(230,230,230,1)] p-6 rounded-lg mt-[3em] drop-shadow-lg">
          <div className="flex flex-col items-start justify-center gap-8">
            <p className="text-4xl font-bold">Guidebook is available now</p>
            <p className="text-2xl font-extralight">
              the ultimate guide to survive in Bangkok
            </p>
            <button className="text-white bg-black rounded-lg p-4">
              Read now
            </button>
          </div>
          <div className="w-[55%]">
            <img src={Sample} alt="sample" />
          </div>
        </div>
      </div>
      <div className="w-[65%]">
        <div className="flex gap-6">
          <button
            className={`drop-shadow-lg rounded-full font-bold px-4 py-2 ${
              selectedButton.all === true
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-[rgb(229,229,229)]"
            }`}
            onClick={() => {
              handleFilterFunction("all");
              setSelectedButton({
                all: true,
                comp: false,
                regis: false,
                guide: false,
                pandem: false,
              });
            }}
          >
            All
          </button>
          <button
            className={`drop-shadow-lg rounded-full font-bold px-4 py-2 ${
              selectedButton.comp === true
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-[rgb(229,229,229)]"
            }`}
            onClick={() => {
              handleFilterFunction("COMPETITION");
              setSelectedButton({
                all: false,
                comp: true,
                regis: false,
                guide: false,
                pandem: false,
              });
            }}
          >
            Competition
          </button>
          <button
            className={`drop-shadow-lg rounded-full font-bold px-4 py-2 ${
              selectedButton.regis === true
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-[rgb(229,229,229)]"
            }`}
            onClick={() => {
              handleFilterFunction("REGISTRATION");
              setSelectedButton({
                all: false,
                comp: false,
                regis: true,
                guide: false,
                pandem: false,
              });
            }}
          >
            Registration
          </button>
          <button
            className={`drop-shadow-lg rounded-full font-bold px-4 py-2 ${
              selectedButton.guide === true
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-[rgb(229,229,229)]"
            }`}
            onClick={() => {
              handleFilterFunction("GUIDEBOOK");
              setSelectedButton({
                all: false,
                comp: false,
                regis: false,
                guide: true,
                pandem: false,
              });
            }}
          >
            Guidebook
          </button>
          <button
            className={`drop-shadow-lg rounded-full font-bold px-4 py-2 ${
              selectedButton.pandem === true
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-[rgb(229,229,229)]"
            }`}
            onClick={() => {
              handleFilterFunction("PANDEMOS");
              setSelectedButton({
                all: false,
                comp: false,
                regis: false,
                guide: false,
                pandem: true,
              });
            }}
          >
            Pandemos
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[2em]">
          {slides.map((slide, i) => (
            <ResourceCard slide={slide} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
