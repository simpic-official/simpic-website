import React from "react";

const Form = ({ rounded, formData, handleChange }) => {

  const { 
    firstName,
    lastName,
    nickName,
    profilePic,
    nationality,
    ID,
    birthday,
    sex,
    gender,
    shirtSize,
    religion,
    religiousCeremony,
    email,
    phone,
    facebook,
    instagram,
    whatsapp,
    lineID,
    others,
    emergencyContact,
    emergencyPhone,
    medicalCondition,
    medication,
    allergy,
    dietaryLimitation,
    yesVegan,
    seasick,
    carsick, } = formData

  return (
    <section className={`w-[90%] lg:w-[80%] border-[1px] outline-none border-[rgba(0,0,0,1)] p-4 lg:p-10 max-w-screen-2xl ${rounded}`}>
      {/** PART 1 - PERSONAL INFORMATION */}
      <div className="p-5 lg:p-0 flex flex-col gap-4">
        <p className="text-[24px] font-medium text-center lg:text-start">
          Part 1 : Personal Information
        </p>
        {/** NAME - LAYER */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-1 font-medium  lg:w-[31%]">
            <label>First name</label>
            <input
              type="text"
              placeholder="Jane"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium  lg:w-[31%]">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Jane"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium  lg:w-[31%]">
            <label>Nickname</label>
            <input
              type="text"
              placeholder="Jane"
              name="nickName"
              value={nickName}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** PROFILE PICTURE */}
        <div className="flex flex-col gap-1 font-medium ">
          <label>Profile Picture</label>
          <input
            type="text"
            placeholder="Jane"
            name="profilePic"
            value={profilePic}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 lg:w-full placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** NATIONALITY - LAYER */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Nationality</label>
            <input
              type="text"
              placeholder="Jane"
              name="nationality"
              value={nationality}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Thai ID / Passport ID</label>
            <input
              type="text"
              placeholder="Jane"
              name="ID"
              value={ID}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Birthday</label>
            <input
              type="text"
              placeholder="Jane"
              name="birthday"
              value={birthday}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** SEX - LAYER */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-1 font-medium  min-w-[31%]">
            <label>Sex</label>
            <select name="sex" value={sex} defaultValue="" onChange={handleChange} className="border-[1px] outline-none bg-white border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]">
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
              <option value="option 3">Option 3</option>
              <option value="option 4">Option 4</option>
              <option value="option 5">Option 5</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Gender</label>
            <input
              type="text"
              placeholder="Jane"
              name="gender"
              value={gender}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium  min-w-[31%]">
            <label>SIMPIC T-shirt size</label>
            <select name="shirtSize" value={shirtSize} onChange={handleChange} className="border-[1px] outline-none bg-white border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]">
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
              <option value="option 3">Option 3</option>
              <option value="option 4">Option 4</option>
              <option value="option 5">Option 5</option>
            </select>
          </div>
        </div>
        {/** RELIGION */}
        <div className="flex flex-col gap-1 font-medium ">
          <label>Religion</label>
          <input
            type="text"
            placeholder="Jane"
            name="religion"
            value={religion}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** RELIGIOUS CEREMONY */}
        <div className="flex flex-col gap-1 font-medium ">
          <label>
            Religious Ceremony (e.g. Islamic Prayer Times, please write clearly)
          </label>
          <input
            type="text"
            placeholder="Jane"
            name="religiousCeremony"
            value={religiousCeremony}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
      </div>
      {/** PART 2 - CONTACT INFORMATION */}
      <div className="p-5 lg:p-0 flex flex-col gap-4 lg:mt-8">
        <p className="text-[24px] font-medium text-center lg:text-start">
          Part 2: Contact Information
        </p>
        {/** EMAIL */}
        <div className="flex flex-col gap-1 font-medium ">
          <label>Email</label>
          <input
            type="text"
            placeholder="Jane"
            name="email"
            value={email}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** PHONE - LAYER */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Jane"
              name="phone"
              value={phone}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Facebook</label>
            <input
              type="text"
              placeholder="Jane"
              name="facebook"
              value={facebook}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Instagram</label>
            <input
              type="text"
              placeholder="Jane"
              name="instagram"
              value={instagram}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** WHATSAPP - LAYER */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Whatsapp</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Line ID</label>
            <input
              type="text"
              placeholder="Jane"
              name="lineID"
              value={lineID}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium lg:w-[31%]">
            <label>Others</label>
            <input
              type="text"
              placeholder="Jane"
              name="others"
              value={others}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** EMERGENCY CONTACT - LAYER */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-1 font-medium  w-full lg:w-[48%]">
            <label>Contact for Emergency</label>
            <input
              type="text"
              placeholder="Jane"
              name="emergencyContact"
              value={emergencyContact}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 font-medium  w-full lg:w-[48%]">
            <label>Phone Number for Emergency</label>
            <input
              type="text"
              placeholder="Jane"
              name="emergencyPhone"
              value={emergencyContact}
              onChange={handleChange}
              className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
      </div>
      {/** PART 3 - MMEDICAL INFORMATION */}
      <div className="p-5 lg:p-0 flex flex-col gap-4 lg:mt-8">
        <p className="text-[24px] font-medium text-center lg:text-start">
          Part 3: Medical Information
        </p>
        <div className="flex flex-col gap-1 font-medium ">
          <label>Medical Condition</label>
          <input
            type="text"
            placeholder="Jane"
            name="medicalCondition"
            value={medicalCondition}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        <div className="flex flex-col gap-1 font-medium ">
          <label>Medication and Medical Requirement</label>
          <input
            type="text"
            placeholder="Jane"
            name="medication"
            value={medication}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        <div className="flex flex-col gap-1 font-medium ">
          <label>Allergy</label>
          <input
            type="text"
            placeholder="Jane"
            name="allergy"
            value={allergy}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        <div className="flex flex-col gap-1 font-medium ">
          <label>Dietary Limitation</label>
          <input
            type="text"
            placeholder="Jane"
            name="dietaryLimitation"
            value={dietaryLimitation}
            onChange={handleChange}
            className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** PART 4 - RADIO BUTTON */}
        <div>
          <p>Vegan or Vegetarian</p>
          <div className="flex gap-10">
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                name="yesVegan"
                value="yes vegan"
                onClick={handleChange}
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                name="noVegan"
                value="no vegan"
                onClick={handleChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>
        <div>
          <p>Experienced Seasick</p>
          <div className="flex gap-10">
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                name="yesSeasick"
                value="yes seasick"
                onClick={handleChange}
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                name="noSeasick"
                value="no seasick"
                onClick={handleChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>
        <div>
          <p>Experienced Carsick</p>
          <div className="flex gap-10">
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                name="yesCarsick"
                value="yes carsick"
                onClick={handleChange}
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] outline-none border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                name="noCarsick"
                value="no carsick"
                onClick={handleChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>
      </div>
      {/** FILE SUBMISSION */}
      <div></div>
    </section>
  );
};

export default Form;