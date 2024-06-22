import React from 'react'
import { useState } from 'react'

const About = () => {

  const [open, setOpen] = useState({simpic2024: false, simpic2023: false, simpic2022: false, simpic2021: false})

  const changeDisplay = (id) => {

    if (id === "simpic2024") {
        setOpen({...open, simpic2024: !open.simpic2024})
    } else if (id === "simpic2023") {
        setOpen({...open, simpic2023: !open.simpic2023})
    } else if  (id === "simpic2022") {
        setOpen({...open, simpic2022: !open.simpic2022})
    } else {
        setOpen({...open, simpic2021: !open.simpic2021})
    }
  }

  return (
    <div className='mt-[15em] w-screen h-screen flex justify-center'>
        <div className='w-[75vw] h-full'>
            <section>
                <p className='text-7xl font-bold text-center lg:text-start'>About SIMPIC</p>
                <div className='flex flex-col gap-4 mt-[4em] text-[20px] text-[rgba(0,0,0,1)] font-extralight text-center lg:text-start'>
                    <p>
                        Welcome to Siriraj International Medical Microbiology, Parasitology, and Immunoloogy Competition (SIMPIC2025) !
                        <br/>As a prestigious and globally recognized event, we take immense pride in helding space and opportunities that bring
                        <br />together brilliant minds in the fields of microbiology, parasitology, and immunology from all around the world.
                    </p>
                    <p>
                        Our competition serves as a  hub for aspiring medical students to showcase their medical knowledge, and forge
                        <br />meaningful connections within the scientific community and international friendships. With a rich tradition of
                        <br />excellence, we are committed to advancing knowledge, promoting collaboration, and driving a advancements in these
                        <br />vital disciplines.
                    </p>
                    <p>
                        Join us in this exciting journey of discovery, learning, and exploration as we collectively strive to push the boundaries
                        <br />of scientific understanding and culture exchanging
                    </p>
                </div>
            </section>
            <section className='flex flex-wrap-reverse lg:flex-nowrap mt-[10em] justify-center items-center'>
                <div className='lg:w-[70%] mt-[4em] lg:mt-0'>
                    <p className='text-7xl font-bold text-center lg:text-start'>President Message</p>
                    <div className='flex flex-col gap-4 mt-[4em] text-[20px] text-[rgba(0,0,0,1)] font-extralight text-center lg:text-start'>
                        <p>
                            With the year gone by, the wait is now done.
                            <br/>Our annual competition is back for everyone!
                        </p>
                        <p>Hello, aspiring participants,</p>
                        <p>
                            We, on behalf of the SIMPIC organizing comimittee, exttend a
                            <br/>warm embrace to medical students from every corner of the 
                            <br/>world. Welcome to our esteemed international competition,
                            <br/>SIMPIC 2025! 
                        </p>
                        <p>
                            Across thirteen years of evolution, this year marks a leap forward
                            <br/>in crafting an extraordinary and indelible event, specially
                            <br/>customized for medical studnets.
                        </p>
                        <p>
                            Mark your calendars for January 18-21, 2025. With meticulous
                            <br/>consideration, we've refined the competition rules, drawing from
                            <br/>invaluable insights garnered over previous editions. Anticipate a
                            <br/>year of heightened thrills, profound engagement, and
                            <br/>unparalleled fervor that surpasses all past experiences.
                        </p>
                        <p>
                            "Join Us for an Unforgettable Journey: A symphony of unique
                            <br/>competitions, cultural immersion, and the allure of Bangkok
                            <br/>awaits. From the very first note to the final crescendo, let SIMPIC
                            <br/>be the canvas where we paint smiles and weave cherished memories together."
                        </p>
                        <p>
                            Be part of the SIMPIC family!
                            <br/>Napak Banditrittidej
                            <br/>Presidents of SIMPIC 2024
                        </p>
                    </div>
                </div>
                <div className='w-[512px] h-[703px] bg-[rgba(130,130,130,1)]'></div>
            </section>  
            <section className='flex flex-col mt-[10em]'>
                <p className='text-7xl font-bold'>History</p>
                <div className='flex flex-col items-center mt-[3em] gap-5'>
                    <div 
                        className={`transition-all duration-300 ease-in-out w-full max-w-[516px] hover:-translate-y-1 hover:scale-105 ${open.simpic2024 ? "max-h-[129px]" : "max-h-[84px]"} flex gap-3 items-center px-4 py-4 bg-gradient-to-r from-[rgba(251,166,166,1)] to-[rgba(232,201,122,1)] rounded-lg cursor-pointer`} 
                        onClick={() => changeDisplay("simpic2024")}
                    >
                        <p className='flex items-center text-[24px] font-bold'>SIMPIC2024</p>
                        <p className={`${open.simpic2024 ? "w-[1px] h-[80px] bg-black" : "hidden"}`}></p>
                        <p className={`${open.simpic2024 ? "block text-xs lg:text-md" : "hidden"}`}>
                            Journery into a small world of
                            <br/>microbio,
                            <br/>immuno, and parasito
                        </p>
                    </div>
                    <div 
                        className={`transition-all duration-300 ease-in-out w-full max-w-[516px] hover:-translate-y-1 hover:scale-105 ${open.simpic2023 ? "max-h-[129px]" : "max-h-[84px]"} flex gap-3 items-center px-4 py-4 bg-gradient-to-r from-[rgba(251,166,166,1)] to-[rgba(232,201,122,1)] rounded-lg cursor-pointer`} 
                        onClick={() => changeDisplay("simpic2023")}
                    >
                        <p className='flex items-center text-[24px] font-bold'>SIMPIC2023</p>
                        <p className={`${open.simpic2023 ? "w-[1px] h-[80px] bg-black" : "hidden"}`}></p>
                        <p className={`${open.simpic2023 ? "block text-xs lg:text-md" : "hidden"}`}>
                            Journery into a small world of
                            <br/>microbio,
                            <br/>immuno, and parasito
                        </p>
                    </div>
                    <div 
                        className={`transition-all duration-300 ease-in-out w-full max-w-[516px] hover:-translate-y-1 hover:scale-105 ${open.simpic2022 ? "max-h-[129px]" : "max-h-[84px]"} flex gap-3 items-center px-4 py-4 bg-gradient-to-r from-[rgba(251,166,166,1)] to-[rgba(232,201,122,1)] rounded-lg cursor-pointer`} 
                        onClick={() => changeDisplay("simpic2022")}
                    >
                        <p className='flex items-center text-[24px] font-bold'>SIMPIC2022</p>
                        <p className={`${open.simpic2022 ? "w-[1px] h-[80px] bg-black" : "hidden"}`}></p>
                        <p className={`${open.simpic2022 ? "block text-xs lg:text-md" : "hidden"}`}>
                            Journery into a small world of
                            <br/>microbio,
                            <br/>immuno, and parasito
                        </p>
                    </div>
                    <div 
                        className={`transition-all duration-300 ease-in-out mb-[15em] w-full max-w-[516px] hover:-translate-y-1 hover:scale-105 ${open.simpic2022 ? "max-h-[129px]" : "max-h-[84px]"} flex gap-3 items-center px-4 py-4 bg-gradient-to-r from-[rgba(251,166,166,1)] to-[rgba(232,201,122,1)] rounded-lg cursor-pointer`} 
                        onClick={() => changeDisplay("simpic2021")}
                    >
                        <p className='flex items-center text-[24px] font-bold'>SIMPIC2021</p>
                        <p className={`${open.simpic2021 ? "w-[1px] h-[80px] bg-black" : "hidden"}`}></p>
                        <p className={`${open.simpic2021 ? "block text-xs lg:text-md" : "hidden"}`}>
                            Journery into a small world of
                            <br/>microbio,
                            <br/>immuno, and parasito
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About