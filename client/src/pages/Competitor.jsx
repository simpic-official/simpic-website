import React, { useState } from "react";
import RegistrationProcess from "../components/RegistrationProcess";
import Form from "../components/Form";
import { NavLink, useNavigate } from "react-router-dom";

const Competitor = () => {

  const [selectedCompetitor, setSelectedCompetitor] = useState(1);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }
  
  return (
    <div className="min-w-screen min-h-screen bg-[rgba(255,255,255,1)] flex flex-col items-center font-inter scroll-smooth font-inter">
      <div className="flex gap-10 justify-start w-[80%]">
        <p className={`bg-[rgba(217,217,217,1)] py-6 px-4 border-[rgba(0,0,0,1)] border-[1px] border-b-0 rounded-t-[20px]`}>Competitor 1</p>
        <p className={`bg-[rgba(217,217,217,1)] py-6 px-4 border-[rgba(0,0,0,1)] border-[1px] border-b-0 rounded-t-[20px]`}>Competitor 2</p>
        <p className={`bg-[rgba(217,217,217,1)] py-6 px-4 border-[rgba(0,0,0,1)] border-[1px] border-b-0 rounded-t-[20px]`}>Competitor 3</p>
        <p className={`bg-[rgba(217,217,217,1)] py-6 px-4 border-[rgba(0,0,0,1)] border-[1px] border-b-0 rounded-t-[20px]`}>Competitor 4</p>
      </div>
      <Form rounded={"rounded-none"}/>
      <div className="w-[80%] flex justify-between mt-10 mb-[10em]">
        <button
          className="gap-4 rounded-lg bg-[rgba(137,146,224,1)] px-8 py-4 w-fit font-bold text-[1.5em]"
          onClick={handleGoBack}
        >
          Back
        </button>
        <NavLink
          to="/registration/competitor/advisor-info"
          className="gap-4 rounded-lg bg-[rgba(137,146,224,1)] px-8 py-4 w-fit font-bold text-[1.5em]"
        >
          Continue
        </NavLink>
      </div>
    </div>
  );
};

export default Competitor;
