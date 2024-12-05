import React from "react";
import Form from "../components/Form";
import { useNavigate, NavLink } from "react-router-dom";

const Advisor = () => {
  
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }
  
  return (
    <div className="min-w-screen min-h-screen bg-[rgba(255,255,255,1)] flex flex-col items-center font-inter scroll-smooth font-inter">
      <Form rounded={"rounded-lg"}/>
      <div className="w-[80%] flex justify-between mt-10 mb-[10em]">
        <button className="gap-4 rounded-lg bg-[rgba(137,146,224,1)] px-8 py-4 w-fit font-bold text-[1.5em]" onClick={handleGoBack}>
          Back
        </button>
        <NavLink to="/registration/observer/advisor-info"className="gap-4 rounded-lg bg-[rgba(137,146,224,1)] px-8 py-4 w-fit font-bold text-[1.5em]">
          Continue
        </NavLink>
      </div>
    </div>
  );
};

export default Advisor;
