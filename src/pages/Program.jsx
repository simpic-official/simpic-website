import React, { useState } from "react";
import { schedulesDay1,schedulesDay2, schedulesDay3, schedulesDay4, activities } from "../constants";
import Carousel from "../components/Carousel";
import CarouselCard from "../components/CarouselCard";

const Program = () => {
  const [selectDay, setSelectDay] = useState({
    day1: true,
    day2: false,
    day3: false,
    day4: false,
  });

  const handleSelectDay = (id) => {
    if (id === "day1") {
      setSelectDay({ day1: true, day2: false, day3: false, day4: false });
    } else if (id === "day2") {
      setSelectDay({ day1: false, day2: true, day3: false, day4: false });
    } else if (id === "day3") {
      setSelectDay({ day1: false, day2: false, day3: true, day4: false });
    } else if (id === "day4") {
      setSelectDay({ day1: false, day2: false, day3: false, day4: true });
    }
  };

  const slides = activities.map((slide, index) => (
    <CarouselCard key={index} slide={slide} />
  ))

  return (
    <section className="mt-[10em] w-screen h-screen flex flex-col items-center font-inter">
      <div className="w-[80%]">
        <p className="text-6xl text-center w-full font-bold">Time Table</p>
        <div className="mt-[5em]">
          <div className="flex gap-4">
            <p
              className={`${
                selectDay.day1
                  ? "text-2xl bg-[rgba(161,162,163,1)] p-4 rounded-t-lg font-semibold"
                  : "text-2xl p-4 text-[rgba(130,130,130,1)] font-semibold"
              }`}
              onClick={() => handleSelectDay("day1")}
            >
              Day 1
            </p>
            <p
              className={`${
                selectDay.day2
                  ? "text-2xl bg-[rgba(161,162,163,1)] p-4 rounded-t-lg font-semibold"
                  : "text-2xl p-4 text-[rgba(130,130,130,1)] font-semibold"
              }`}
              onClick={() => handleSelectDay("day2")}
            >
              Day 2
            </p>
            <p
              className={`${
                selectDay.day3
                  ? "text-2xl bg-[rgba(161,162,163,1)] p-4 rounded-t-lg font-semibold"
                  : "text-2xl p-4 text-[rgba(130,130,130,1)] font-semibold"
              }`}
              onClick={() => handleSelectDay("day3")}
            >
              Day 3
            </p>
            <p
              className={`${
                selectDay.day4
                  ? "text-2xl bg-[rgba(161,162,163,1)] p-4 rounded-t-lg font-semibold"
                  : "text-2xl p-4 text-[rgba(130,130,130,1)] font-semibold"
              }`}
              onClick={() => handleSelectDay("day4")}
            >
              Day 4
            </p>
          </div>
          <div>
            {selectDay.day1 && (
              <div className="w-full flex justify-center h-[612px] bg-[rgba(161,162,163,1)] rounded-b-lg rounded-r-lg">
                <div className="w-[70%] border-[1px] border-white my-10 p-4 rounded-md">
                  18 Jan 2025
                  <div className="grid grids-cols-1 divide-y mt-4 h-[80%]">
                    <div className="flex justify-between text-[rgba(130,130,130,1)] items-center">
                      <p>col1</p>
                      <div className="flex gap-8">
                        <p>col2</p>
                        <p>col3</p>
                      </div>
                    </div>
                    {schedulesDay1.map((schedule) => {
                      const { col1, col2, col3 } = schedule;
                      return (
                        <div className="flex justify-between text-black items-center">
                          <p>{col1}</p>
                          <div className="flex gap-8">
                            <p>{col2}</p>
                            <p>{col3}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {selectDay.day2 && (
              <div className="w-full flex justify-center h-[612px] bg-[rgba(161,162,163,1)] rounded-lg">
                <div className="w-[70%] border-[1px] border-white my-10 p-4 rounded-md">
                  19 Jan 2025
                  <div className="grid grids-cols-1 divide-y mt-4 h-[80%]">
                    <div className="flex justify-between text-[rgba(130,130,130,1)] items-center">
                      <p>col1</p>
                      <div className="flex gap-8">
                        <p>col2</p>
                        <p>col3</p>
                      </div>
                    </div>
                    {schedulesDay2.map((schedule) => {
                      const { col1, col2, col3 } = schedule;
                      return (
                        <div className="flex justify-between text-black items-center">
                          <p>{col1}</p>
                          <div className="flex gap-8">
                            <p>{col2}</p>
                            <p>{col3}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {selectDay.day3 && (
              <div className="w-full flex justify-center h-[612px] bg-[rgba(161,162,163,1)] rounded-lg">
                <div className="w-[70%] border-[1px] border-white my-10 p-4 rounded-md">
                  20 Jan 2025
                  <div className="grid grids-cols-1 divide-y mt-4 h-[80%]">
                    <div className="flex justify-between text-[rgba(130,130,130,1)] items-center">
                      <p>col1</p>
                      <div className="flex gap-8">
                        <p>col2</p>
                        <p>col3</p>
                      </div>
                    </div>
                    {schedulesDay3.map((schedule) => {
                      const { col1, col2, col3 } = schedule;
                      return (
                        <div className="flex justify-between text-black items-center">
                          <p>{col1}</p>
                          <div className="flex gap-8">
                            <p>{col2}</p>
                            <p>{col3}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {selectDay.day4 && (
              <div className="w-full flex justify-center h-[612px] bg-[rgba(161,162,163,1)] rounded-lg">
                <div className="w-[70%] border-[1px] border-white my-10 p-4 rounded-md">
                  21 Jan 2025
                  <div className="grid grids-cols-1 divide-y mt-4 h-[80%]">
                    <div className="flex justify-between text-[rgba(130,130,130,1)] items-center">
                      <p>col1</p>
                      <div className="flex gap-8">
                        <p>col2</p>
                        <p>col3</p>
                      </div>
                    </div>
                    {schedulesDay4.map((schedule) => {
                      const { col1, col2, col3 } = schedule;
                      return (
                        <div className="flex justify-between text-black items-center">
                          <p>{col1}</p>
                          <div className="flex gap-8">
                            <p>{col2}</p>
                            <p>{col3}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[5em]">
        <p className="text-6xl text-center w-full font-bold">Activities</p>
        <div className="max-w-full snap-x snap-mandatory overflow-x-scroll h-screen flex flex-grow z-0 gap-4">
            <Carousel slides={slides} />
      </div>
      </div>
    </section>
  );
};

export default Program;
