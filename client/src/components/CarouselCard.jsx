import React from 'react'

const CarouselCard = ({ slide }) => {

  const { title, description, bg, img } = slide
    
    console.log(bg)

  return (
    <div className={`w-[500px] h-[462px] rounded-lg flex flex-col items-center justify-around p-5 py-0 pb-4`} style={{ backgroundColor: `${bg}` }}>
      <img src={img} className='object-cover w-[100%] h-[90%] rounded-md mt-5 shadow-xl'/>
      <div className='w-full mt-2'>
        <p className='text-2xl font-semibold'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CarouselCard