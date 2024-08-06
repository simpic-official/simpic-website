import React from 'react';
import RefMat from "../images/RefMat.png";
import Prize from "../images/IP.png";

const Competition = () => {
  return (
    <section className="mt-40 w-screen h-screen flex flex-col items-center font-inter gap-32">
      <div className='w-4/5 flex flex-col items-center'>
        <p className='text-6xl font-bold'>Competition</p>
      </div>
      <div className='w-4/5 flex flex-col items-center'>
        <p className='text-6xl font-bold'>Prize</p>
        <div className='w-full flex justify-center mt-8'>
          <img src={Prize} alt="Prize" className="w-3/5 h-auto" />
        </div>
      </div>
      <div className='w-4/5 flex flex-col items-center'>
        <p className='text-6xl font-bold'>Reference Material</p>
        <div className='w-full flex justify-center mt-8'>
          <img src={RefMat} alt="Reference Material" className="w-3/5 h-auto" />
        </div>
      </div>
    </section>
  )
}

export default Competition;
