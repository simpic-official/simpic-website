import React from "react";

const FaqsCard = ({ faq, openFaqsHandler, openFaqs }) => {

  const { question, answer, id } = faq

  console.log(`openFaqs.${id}`)

  console.log(openFaqs.id)
  return (
    <div className="w-full transition-all">
      <div className="flex justify-between">
        <p className="text-start text-xl">
          {question}
        </p>
        <p
          className="text-xl cursor-pointer"
          onClick={() => openFaqsHandler(id)}
        >
          +
        </p>
      </div>
      <p
        className={`overflow-hidden transition-all duration-500 ease-in-out transform mt-4 ${
          openFaqs[id]
            ? "max-h-96 opacity-100 translate-y-0 block"
            : "max-h-0 opacity-0 translate-y-5"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqsCard;
