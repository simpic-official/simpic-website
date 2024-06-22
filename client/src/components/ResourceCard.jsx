import React from 'react'

const ResourceCard = ({ slide }) => {

  const { type, title } = slide  

  return (
    <div className='h-[365px] flex flex-col justify-end relative drop-shadow-xl rounded-lg'>
        <div className='bg-[#D9D9D9] w-full h-full rounded-lg'></div>
        <div className='bg-white rounded-lg absolute bottom-0 w-full h-[55%] p-4 flex flex-col items-start gap-4'>
            <p className={`drop-shadow-lg rounded-full text-[14px] w-fit font-semibold px-4 py-1 bg-white
                        ${type === 'COMPETITION' ? 'text-[#700EF1]' : ''}
                        ${type === 'REGISTRATION' ? 'text-[#3174E4]' : ''}
                        ${type === 'GUIDEBOOK' ? 'text-[#C10000]' : ''}
                        ${type === 'PANDEMOS' ? 'text-[#FFAD00]' : ''}
                        `}>{type}</p>
            <p className='text-2xl font-semibold'>{title}</p>
            <p className='text-[rgba(0,0,0,0.2)] underline cursor-pointer'>Read now</p>
        </div>
    </div>
  )
}

export default ResourceCard