import React from 'react';
import President from '../images/President.jpg';
import SIMPICHis1 from '../images/SIMPICHis-1.png';
import SIMPICHis2 from '../images/SIMPICHis-2.png';
import SIMPICHis3 from '../images/SIMPICHis-3.png';

const About = () => {
  return (
    <div className='mt-[15em] w-screen h-full flex justify-center'>
      <div className='w-[75vw]'>
        <section>
          <p className='text-7xl font-bold text-center lg:text-start'>About SIMPIC</p>
          <div className='flex flex-col gap-4 mt-[4em] text-[20px] text-[rgba(0,0,0,1)] font-extralight text-center lg:text-start'>
            <p>
              Welcome to Siriraj International Medical Microbiology, Parasitology, and Immunology Competition (SIMPIC2025)!
              <br />
              As a prestigious and globally recognized event, we take immense pride in holding space and opportunities that bring
              <br />
              together brilliant minds in the fields of microbiology, parasitology, and immunology from all around the world.
            </p>
            <p>
              Our competition serves as a hub for aspiring medical students to showcase their medical knowledge, and forge
              <br />
              meaningful connections within the scientific community and international friendships. With a rich tradition of
              <br />
              excellence, we are committed to advancing knowledge, promoting collaboration, and driving advancements in these
              <br />
              vital disciplines.
            </p>
            <p>
              Join us in this exciting journey of discovery, learning, and exploration as we collectively strive to push the boundaries
              <br />
              of scientific understanding and cultural exchange.
            </p>
          </div>
        </section>
        <section className='flex flex-wrap-reverse lg:flex-nowrap mt-[10em] justify-center items-center'>
          <div className='lg:w-[70%] mt-[4em] lg:mt-0'>
            <p className='text-7xl font-bold text-center lg:text-start'>President Message</p>
            <div className='flex flex-col gap-4 mt-[4em] text-[20px] text-[rgba(0,0,0,1)] font-extralight text-center lg:text-start'>
              <p>Dear our prospective participants,</p>
              <p>
                For the 14th year, our prestigious and globally recognized
                <br />
                competition, Siriraj International Medical Microbiology,
                <br />
                Parasitology, and Immunology Competition -
                <br />
                SIMPIC has returned.
              </p>
              <p>
                On behalf of the SIMPIC organizing committee, it is a great
                <br />
                pleasure and honor to welcome all the medical students
                <br />
                across the world to join us on this esteemed event.
                <br />
                We are more excited than ever to bring you an experience
                <br />
                that promises to be unforgettable and truly exceptional.
              </p>
              <p>
                Over a decade, SIMPIC has established itself as a prestigious platform,
                <br />
                uniting aspiring medical students who share the same passion and dedication.
                <br />
                Our competition is not merely a test of knowledge but a unique
                <br />
                opportunity to build lasting international friendships
                <br />
                and grow together as a community.
              </p>
              <p>
                "This year, from January 18-21, 2025, we will once again
                <br />
                create a vibrant space where competition and cultural immersion converge.
                <br />
                Whether you are a returning participant or joining us for the first time,
                <br />
                your presence will contribute to the dynamic and
                <br />
                enriching atmosphere that SIMPIC is renowned for.
              </p>
              <p>
                We are looking forward to seeing you in SIMPIC 2025!
                <br />
                Akrapol Suppasedtanon
                <br />
                President of SIMPIC 2025
              </p>
            </div>
          </div>
          <div className='w-[720px] h-auto flex justify-center items-center'>
            <img src={President} alt='President' className='w-full h-auto object-cover' />
          </div>
        </section>
        <section className='flex flex-col mt-[10em]'>
          <p className='text-7xl font-bold text-center'>SIMPIC History</p>
          <div className='w-full flex flex-col items-center'>
            <div className='w-[512px] h-auto'>
              <img src={SIMPICHis1} alt='SIMPIC History 1' className='w-full h-auto object-cover' />
            </div>
            <div className='w-[512px] h-auto'>
              <img src={SIMPICHis2} alt='SIMPIC History 2' className='w-full h-auto object-cover' />
            </div>
            <div className='w-[512px] h-auto mb-4'>
              <img src={SIMPICHis3} alt='SIMPIC History 3' className='w-full h-auto object-cover' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
