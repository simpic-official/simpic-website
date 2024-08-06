import React, { useState } from 'react';
import President from "../images/President.jpg";
import SIMPICHis from "../images/SIMPICHis.png";

const About = () => {
  const [open, setOpen] = useState({
    simpic2024: false,
    simpic2023: false,
    simpic2022: false,
    simpic2021: false
  });

  const toggleDisplay = (id) => {
    setOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const historyItems = [
    { year: "2024", label: "SIMPIC2024" },
    { year: "2023", label: "SIMPIC2023" },
    { year: "2022", label: "SIMPIC2022" },
    { year: "2021", label: "SIMPIC2021" }
  ];

  return (
    <div className='mt-[15em] w-screen h-screen flex justify-center'>
      <div className='w-[75vw] h-full'>
        
        {/* About Section */}
        <section>
          <p className='text-7xl font-bold text-center lg:text-start'>About SIMPIC</p>
          <div className='flex flex-col gap-4 mt-[4em] text-[20px] text-[rgba(0,0,0,1)] font-extralight text-center lg:text-start'>
            <p>
              Welcome to Siriraj International Medical Microbiology, Parasitology, and Immunology Competition (SIMPIC2025)!
              <br />As a prestigious and globally recognized event, we take immense pride in holding space and opportunities that bring
              <br />together brilliant minds in the fields of microbiology, parasitology, and immunology from all around the world.
            </p>
            <p>
              Our competition serves as a hub for aspiring medical students to showcase their medical knowledge and forge
              <br />meaningful connections within the scientific community and international friendships. With a rich tradition of
              <br />excellence, we are committed to advancing knowledge, promoting collaboration, and driving advancements in these
              <br />vital disciplines.
            </p>
            <p>
              Join us in this exciting journey of discovery, learning, and exploration as we collectively strive to push the boundaries
              <br />of scientific understanding and cultural exchange.
            </p>
          </div>
        </section>
        
        {/* President's Message Section */}
        <section className='flex flex-wrap-reverse lg:flex-nowrap mt-[10em] justify-center items-center'>
          <div className='lg:w-[70%] mt-[4em] lg:mt-0'>
            <p className='text-7xl font-bold text-center lg:text-start'>President's Message</p>
            <div className='flex flex-col gap-4 mt-[4em] text-[20px] text-[rgba(0,0,0,1)] font-extralight text-center lg:text-start'>
              <p>Dear prospective participants,</p>
              <p>
                For the 14th year, our prestigious and globally recognized
                <br />competition, Siriraj International Medical Microbiology,
                <br />Parasitology, and Immunology Competition - SIMPIC has returned.
              </p>
              <p>
                On behalf of the SIMPIC organizing committee, it is a great
                <br />pleasure and honor to welcome all medical students
                <br />across the world to join us at this esteemed event.
                <br />We are excited to offer an unforgettable and exceptional experience.
              </p>
              <p>
                SIMPIC has established itself as a prestigious platform,
                <br />uniting aspiring medical students with the same passion and dedication.
                <br />Our competition is an opportunity to build lasting international friendships
                <br />and grow as a community.
              </p>
              <p>
                "This year, from January 18-21, 2025, we will once again
                <br />create a vibrant space where competition and cultural immersion converge.
                <br />Whether you are returning or joining us for the first time,
                <br />your presence will contribute to the dynamic and enriching atmosphere.
              </p>
              <p>
                We look forward to seeing you at SIMPIC 2025!
                <br />Akrapol Suppasedtanon
                <br />President of SIMPIC 2025
              </p>
            </div>
          </div>
          <div className='w-[512px] h-[703px] flex justify-center items-center'>
            <img src={President} alt="President" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* History Section */}
        <section className='flex flex-col mt-[10em] items-center'>
          <p className='text-7xl font-bold text-center'>History</p>
          <div className='w-[65%] max-w-[512px] h-auto flex justify-center items-center mt-[3em]'>
            <img src={SIMPICHis} alt="SIMPICHis" className="w-full h-auto object-cover" />
          </div>
          <div className='flex flex-col items-center mt-[3em] gap-5'>
            {historyItems.map(item => (
              <div 
                key={item.year}
                className={`transition-all duration-300 ease-in-out w-full max-w-[516px] hover:-translate-y-1 hover:scale-105 ${open[`simpic${item.year}`] ? "max-h-[129px]" : "max-h-[84px]"} flex gap-3 items-center px-4 py-4 bg-gradient-to-r from-[rgba(251,166,166,1)] to-[rgba(232,201,122,1)] rounded-lg cursor-pointer`} 
                onClick={() => toggleDisplay(`simpic${item.year}`)}
              >
                <p className='flex items-center text-[24px] font-bold'>{item.label}</p>
                <p className={`${open[`simpic${item.year}`] ? "w-[1px] h-[80px] bg-black" : "hidden"}`}></p>
                <p className={`${open[`simpic${item.year}`] ? "block text-xs lg:text-md" : "hidden"}`}>
                  Journey into a small world of
                  <br />microbiology,
                  <br />immunology, and parasitology
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
