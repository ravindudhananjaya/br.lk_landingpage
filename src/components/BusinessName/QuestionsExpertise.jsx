import React, { useState } from "react";
import questionImg from "../../assets/question.png";
import dropdownIcon from "../../assets/Home/dropdown.png";

const faqData = [
  {
    question: "What is the Best Business Name Generator for Sri Lankan Companies?",
    answer:
      "BR.LK's business name generator is specifically designed for the Sri Lankan market, considering local cultural context, language preferences, and business registration requirements. It provides instant domain availability checks for .lk domains and generates names that resonate with Sri Lankan consumers while ensuring international appeal for export businesses.",
  },
  {
    question: "What Are the Types of Business Structures in Sri Lanka?",
    answer:
      "Sri Lanka offers several business structures: Private Limited Company (most popular for medium-large businesses), Public Limited Company (for large corporations), Partnership (2+ partners sharing profits), Sole Proprietorship (individual ownership), and Limited Liability Partnership (LLP). Each has different liability, tax, and compliance requirements.",
  },
  {
    question: "What is a Good Business Name Example for Sri Lanka?",
    answer:
      "Good Sri Lankan business names often incorporate local elements: Ceylon Tea Traders (Pvt) Ltd (uses heritage), Lanka Digital Solutions (modern + local), Serendib Consulting (historical reference), or Pearl Technology Hub (combines local symbol with industry). The best names are memorable, easy to pronounce in local languages, and reflect your business values.",
  },
  {
    question: "How Do I Register My Business Name in Sri Lanka?",
    answer:
      "Register through the Registrar of Companies (ROC): 1) Search name availability online, 2) Reserve your name (valid for 60 days), 3) Prepare incorporation documents, 4) Submit documents with fees to ROC, 5) Receive Certificate of Incorporation. BR.LK handles the entire process for you, including document preparation, submission, and follow-up with authorities.",
  },
  
];

const QuestionsExpertise = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-16  px-4  lg:px-0 xl:px-0">
      {/* FAQ Section */}
      <div className="flex-1 max-w-xl w-full">
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
        <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-relaxed text-[#232323] text-center mb-6">
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