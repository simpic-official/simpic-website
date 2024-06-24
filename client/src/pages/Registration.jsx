import React, { useState } from 'react'

const Registration = () => {

  const [selectedTeam, setSelectedTeam] = useState("");

  const handleTeamSelector = (id) => {
    if (id === "observer") {
        setSelectedTeam("observer")
    } else if (id === "competitor") {
        setSelectedTeam("competitor")
    }
  }

  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center'>
        <div className='flex flex-col gap-6 items-center'>
            <p className='text-3xl font-bold'>Register as a competitor or behavior</p>
            <div className='flex gap-3'>
                <div className={`transition-all ease-in-out duration-150 delay-75 w-[296px] h-[192px] border-[2px] border-[rgba(121,121,121,1)] rounded-xl flex relative p-4 ${selectedTeam === "observer" && "bg-[rgb(217,217,217)] border-[rgb(67,114,221)]"}`} onClick={() => handleTeamSelector('observer')}>
                    <label className='justify-self-start self-end text-[24px] font-semibold'>Observer</label>
                    <input type="checkbox" value="observer" className='rounded-full absolute right-4 top-4'/>
                </div>
                <div className={`transition-all ease-in-out duration-150 delay-75 w-[296px] h-[192px] border-[2px] border-[rgba(121,121,121,1)] rounded-xl flex relative p-4 ${selectedTeam === "competitor" && "bg-[rgb(217,217,217)] border-[rgb(67,114,221)]"}`} onClick={() => handleTeamSelector('competitor')}>
                    <label className='justify-self-start self-end text-[24px] font-semibold'>Competitor/Advisor</label>
                    <input type="checkbox" value="observer" className='rounded-full absolute right-4 top-4'/>
                </div>
            </div>
            {selectedTeam === "" && (
                <button className='text-[rgba(130,130,130,1)] bg-[rgba(217,217,217,1)] px-6 py-4 rounded-lg font-semibold text-[24px]'>
                    Please select one
                </button>
            )}
            {selectedTeam === "observer" && (
                <button className='text-black bg-[rgba(139,146,218,1)]  px-6 py-4 rounded-lg font-semibold text-[24px]'>
                    Join as an Observer
                </button>
            )}
            {selectedTeam === "competitor" && (
                <button className='text-black bg-[rgba(139,146,218,1)] px-6 py-4 rounded-lg font-semibold text-[24px]'>
                    Join as an Competitor/Advisor
                </button>
            )}
        </div>
    </div>
  )
}

export default Registration