import React, { useState } from "react";
import orange from "../images/orange.svg";
import { faqs } from "../constants";
import FaqsCard from "../components/FaqsCard";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [openFaqs, setOpenFaqs] = useState({
    f1: false,
    f2: false,
    f3: false,
    f4: false,
  });

  const openFaqsHandler = (id) => {
    if (id === "f1") {
      setOpenFaqs({ ...openFaqs, f1: !openFaqs.f1 });
      console.log(openFaqs);
    } else if (id === "f2") {
      setOpenFaqs({ ...openFaqs, f2: !openFaqs.f2 });
    } else if (id === "f3") {
      setOpenFaqs({ ...openFaqs, f3: !openFaqs.f3 });
    } else if (id === "f4") {
      setOpenFaqs({ ...openFaqs, f4: !openFaqs.f4 });
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const contactData = new FormData(e.target);

  };

  return (
    <section className="mt-[10em] w-screen h-screen flex flex-col items-center font-inter">
      <div className="w-full lg:w-[75%] flex flex-wrap lg:flex-nowrap gap-10 justify-center lg:justify-between">
        <form
          className="flex flex-col items-start gap-8 w-[90%] lg:w-[50%]"
          onSubmit={submitFormHandler}
        >
          <p className="text-6xl font-bold text-center lg:text-start w-full lg:w-auto">Contact us</p>
          <p className=" text-lg lg:text-2xl text-[rgba(130,130,130,1)] font-light">
            Subheading for description or instructions
          </p>
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="flex flex-col gap-2 w-full lg:w-[50%]">
              <label>First name</label>
              <input
                placeholder="John"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
                className="border-[1px] border-[rgba(224,224,224,1)] px-4 py-2 rounded-lg text-[rgba(130,130,130,1)] text-[16px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-[50%]">
              <label>Last name</label>
              <input
                placeholder="Doe"
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                className="border-[1px] border-[rgba(224,224,224,1)] px-4 py-2 rounded-lg text-[rgba(130,130,130,1)] text-[16px] outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Email address</label>
            <input
              placeholder="johndoe@gmail.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="border-[1px] border-[rgba(224,224,224,1)] px-4 py-2 rounded-lg text-[rgba(130,130,130,1)] text-[16px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Your message</label>
            <textarea
              placeholder="Enter your question or message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="w-full min-h-[160px] border-[1px] border-[rgba(224,224,224,1)] px-4 py-2 rounded-lg text-[rgba(130,130,130,1)] text-[16px] outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
        <div className="bg-cover w-[90%] lg:w-auto flex justify-center">
          <img src={orange} alt="wallpaper"/>
        </div>
      </div>
      <div className="w-[75%] flex justify-between mt-[5em] flex-col gap-4">
        <p className="text-4xl font-bold mb-[1em]">FAQs</p>
        {faqs.map((faq) => (
          <FaqsCard
            key={faq.id}
            faq={faq}
            openFaqsHandler={openFaqsHandler}
            openFaqs={openFaqs}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
