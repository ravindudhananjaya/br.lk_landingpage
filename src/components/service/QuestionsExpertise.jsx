import React, { useState } from "react";
import questionImg from "../../assets/question.png";
import dropdownIcon from "../../assets/Home/dropdown.png";

const faqData = [
  {
    question: "How long does the ITIN application process take?",
    answer:
      "The IRS typically processes ITIN applications within 7-11 weeks from the date they receive your complete application. However, during peak tax season (January-April), processing times may extend to 11-14 weeks. With our expedited service and proper documentation preparation, we help minimize delays and keep you informed throughout the process.",
  },
  {
    question: "What documents do I need for ITIN application?",
    answer:
      "You'll need original or certified copies of identity documents such as passport, national ID, driver's license, or birth certificate. Additionally, you need supporting documentation that shows your tax filing requirement, such as a tax return, letter from a withholding agent, or mortgage interest statement. We provide a complete checklist and help verify all documents meet IRS requirements.",
  },
  {
    question: "Can I apply for ITIN renewal through your service?",
    answer:
      "Yes, we handle both new ITIN applications and renewals. ITINs that haven't been used on a tax return for three consecutive years automatically expire and must be renewed. We make this renewal process seamless and ensure your ITIN remains active for your tax and financial needs.",
  },
  {
    question: "What are your service fees for ITIN registration?",
    answer:
      "Our ITIN service fees start at $299 for standard processing and vary based on complexity, urgency, and additional services required. This includes consultation, document review, application preparation, submission assistance, and follow-up support. Contact us for a personalized quote based on your specific situation.",
  },
  
];

const QuestionsExpertise = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-10 md:px-10 lg:px-0 xl:px-0 ">
      {/* FAQ Section */}
      <div className="flex-1 max-w-xl w-full  ">
        {faqData.map((faq, idx) => (
          <div key={idx} className="mb-5">
            <button
              className={`w-full flex justify-between items-center text-left rounded-xl px-6 py-5 transition bg-[#ede7dd]  focus:outline-none 
                ${openIdx === idx ? "" : ""}
              `}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{
                fontFamily: "inherit",
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "#232323",
                boxShadow: openIdx === idx ? "0 2px 8px 0 #dedede30" : "none",
              }}
            >
              <span>{faq.question}</span>
              <img
                src={dropdownIcon}
                alt="Dropdown arrow"
                className="ml-4 w-5 h-5 transition-transform duration-200"
                style={{
                  transform: openIdx === idx ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {openIdx === idx && faq.answer && (
              <div className="bg-white rounded-xl px-6 py-4 mt-2 text-[#232323] text-base font-normal leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Illustration and Heading */}
      <div className="flex-1 flex flex-col items-center justify-center pt-8 md:pt-0 max-w-xl w-full">
        <img
          src={questionImg}
          alt="Question illustration"
          className="mb-4 w-full max-w-md"
          style={{ height: "auto" }}
        />
        <h2 className="font-serif font-bold text-[30px]  lg:text-[40px] text-[#232323] text-center mb-6">
          Your Questions,<br className="hidden md:block" /> Our Expertise
        </h2>
        <p className="text-[#6d7b92] text-center text-base md:text-lg max-w-md mx-auto">
          Find quick answers to common questions about our business services. From setup processes to compliance requirements, we've compiled the insights you need to make informed decisions about your business journey.
        </p>
      </div>
    </section>
  );
};

export default QuestionsExpertise;