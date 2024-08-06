import React from 'react'
import Reference from "../images/Reference Material.png";

const Competition = () => {
  return (
    <section className="mt-[10em] w-screen h-screen flex flex-col items-center font-inter gap-[20em]">
      <div className='w-[80%] flex justify-center'>
        <p className='text-6xl font-bold'>Competition</p>
      </div>
      <div className='w-[80%] flex justify-center'>
        <p className='text-6xl font-bold'>Prize</p>
      </div>
      <div className='w-4/5 flex flex-col items-center'>
        <p className='text-6xl font-bold'>Reference Material</p>
        <img src={Reference} alt="Reference Material" className="mt-8 w-full h-auto" />
      </div>
    </section>
  )
}

export default Competition
