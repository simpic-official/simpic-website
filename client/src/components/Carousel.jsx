import React, { useRef } from "react";

const Carousel = ({ slides }) => {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-fit overflow-hidden mt-[5em]">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-hidden snap-x-mandatory"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-none snap-start">
            {slide}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={scrollNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
