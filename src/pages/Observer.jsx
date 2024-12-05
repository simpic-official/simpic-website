import React, { useState } from "react";
import RegistrationProcess from "../components/RegistrationProcess";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Form from "../components/Form";
import { NavLink, useNavigate } from "react-router-dom";


const Observer = () => {

  const [formData, setFormData] = useLocalStorage('formData', {
    firstName: "",
    lastName: "",
    nickName: "",
    profilePic: "",
    nationality: "",
    ID: "",
    birthday: "",
    sex: "",
    gender: "",
    shirtSize: "",
    religion: "",
    religiousCeremony: "",
    email: "",
    phone: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    lineID: "",
    others: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalCondition: "",
    medication: "",
    allergy: "",
    dietaryLimitation: "",
    yesVegan: "",
    noVegan: "",
    yesSeasick: "",
    noSeasick: "",
    yesCarsick: "",
    noCarsick: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData(prevState => ({
        ...prevState,
        [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }
  
  return (
    <div className="min-w-screen min-h-screen bg-[rgba(255,255,255,1)] flex flex-col items-center font-inter scroll-smooth font-inter">
      <Form rounded={"rounded-lg"} formData={formData} handleChange={handleChange} />
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

export default Observer;
