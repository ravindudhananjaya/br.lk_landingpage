import React, { useState } from "react";
import questionImg from "../../assets/question.png";
import dropdownIcon from "../../assets/Home/dropdown.png";

const faqData = [
  {
    question: "How much time you are going to take to finish my order?",
    answer:
      "Premium orders have a processing speed 3 times faster than Basic orders. We typically form companies within just 2 days. Securing the EIN takes an additional 3–5 days (Note: Most other providers require at least 2 weeks for EIN acquisition).",
  },
  {
    question: "What about taxes?",
    answer:
      "We help you structure your business to be as tax-efficient as possible. UK and US companies can provide significant tax advantages for Sri Lankan entrepreneurs, including access to double taxation treaties and corporate tax rates that may be lower than local rates. Our team provides ongoing tax consultation to ensure you remain compliant while maximizing your savings.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "For company registration, you'll need: a copy of your passport or national ID, proof of address (utility bill or bank statement), details of your business activity, and proposed company name. For UK companies, we also require a registered office address (which we can provide). All documents can be submitted digitally through our secure portal.",
  },
  {
    question: "Do you support my country?",
    answer:
      "Yes! We specialize in helping Sri Lankan entrepreneurs establish UK and US companies from anywhere in the world. Our services are designed specifically for international clients, and we handle all the complexities of cross-border business formation. We also support clients from other countries looking to establish international businesses.",
  },
  {
    question: "How do I get started with Ledger?",
    answer:
      "Getting started is simple! First, choose your preferred package (UK or US company formation). Then, complete our online application form and upload your required documents. Our team will review everything within 24 hours and guide you through the next steps. You'll have access to our client portal to track progress in real-time throughout the entire process.",
  },
];

const QuestionsExpertise = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-16">
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
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#232323] text-center mb-6">
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