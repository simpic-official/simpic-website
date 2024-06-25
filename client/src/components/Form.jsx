import React from "react";

const Form = () => {
  return (
    <section className="w-[80%] border-[1px] border-[rgba(0,0,0,1)] p-10 rounded-lg">
      <div className="flex flex-col gap-8">
        <p className="text-[1.5em] mb-4 font-medium">
          Part 1 : Personal Information
        </p>
        {/** NAME */}
        <div className="flex gap-1 justify-between font-medium">
          <div className="flex flex-col gap-1">
            <label>First name</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Nickname</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** PROFILE PICTURE */}
        <div className="flex flex-col gap-1 font-medium">
          <label>Profile Picture</label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** NATIONALITY */}
        <div className="flex gap-1 justify-between font-medium">
          <div className="flex flex-col gap-1">
            <label>Nationality</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Thai ID / Passport ID</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Birthday</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** SEX */}
        <div className="flex gap-1 justify-between font-medium">
          <div className="flex flex-col gap-1">
            <label>Sex</label>
            <select className="border-[1px] bg-white border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]">
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
              <option value="">Option 4</option>
              <option value="">Option 5</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label>Gender</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>SIMPIC T-shirt size</label>
            <select className="border-[1px] bg-white border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]">
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
              <option value="">Option 4</option>
              <option value="">Option 5</option>
            </select>
          </div>
        </div>
        {/** RELIGION */}
        <div className="flex flex-col gap-1">
          <label>Religion</label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** RELIGIOUS CEREMONY */}
        <div className="flex flex-col gap-1">
          <label>
            Religious Ceremony (e.g. Islamic Prayer Times, please write clearly)
          </label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
      </div>
      {/** PART 2 - CONTACT INFORMATION */}
      <div className="flex flex-col gap-8 mt-8">
        <p className="text-[1.5em] mt-8 font-medium">
          Part 2: Contact Information
        </p>
        {/** EMAIL */}
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** PHONE */}
        <div className="flex gap-1 justify-between font-medium">
          <div className="flex flex-col gap-1">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Facebook</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Instagram</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** WHATAPPS */}
        <div className="flex gap-1 justify-between font-medium">
          <div className="flex flex-col gap-1">
            <label>Whatapps</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px]  placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Line ID</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Others</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2 min-w-[295px] placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
        {/** EMERGENCY CONTACT */}
        <div className="flex gap-10 justify-between font-medium">
          <div className="flex flex-col gap-1 w-[50%]">
            <label>Contact for Emergency</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
          <div className="flex flex-col gap-1 w-[50%]">
            <label>Phone Number for Emergency</label>
            <input
              type="text"
              placeholder="Jane"
              className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
            />
          </div>
        </div>
      </div>
      {/** PART 3 - MMEDICAL INFORMATION */}
      <div className="flex flex-col gap-8 mt-8">
        <p className="text-[1.5em] mt-8 font-medium">
          Part 3: Medical Information
        </p>
        <div className="flex flex-col gap-1">
          <label>Medical Condition</label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Medication and Medical Requirement</label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Allergy</label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Dietary Limitation</label>
          <input
            type="text"
            placeholder="Jane"
            className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2  placeholder:text-[rgba(130,130,130,1)]"
          />
        </div>
        {/** PART 4 - RADIO BUTTON */}

        <div>
          <p>Vegan or Vegetarian</p>
          <div className="flex gap-10">
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                value="yes vegan"
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                value="no vegan"
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
                className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                value="yes seasick"
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                value="no seasick"
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
                className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                value="yes carsick"
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="border-[1px] border-[rgba(224,224,224,1)] rounded-lg py-3 px-2"
                value="no carsick"
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
