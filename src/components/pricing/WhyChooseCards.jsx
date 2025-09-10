import React from "react";

import Paperworkicon from "../../assets/Home/paperwork.png";
import Language from "../../assets/Home/language.png";
import CompanyReg from "../../assets/company-reg.png";
import BusinessFormation from "../../assets/business-formation.png";
import Payment from "../../assets/payment-gateway.png";
import Tax from "../../assets/tax.png";
import Compliance from "../../assets/compliance.png";
import Banking from "../../assets/Global-banking.png";
// Card data
const cardData = [

  {
    icon: <img src={CompanyReg} alt="UK Company Registration" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">UK</span> Company <br />
        Registration
      </>
    ),
    desc: "Complete UK company formation services including registered address, company secretary, and all legal documentation required for legitimate business operations.",
  },
  {
    icon: <img src={BusinessFormation} alt="USA Business Formation" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">USA</span> Business<br />Formation
      </>
    ),
    desc: "End-to-end US business registration including LLC and Corporation formation, EIN acquisition, and state compliance management.",
  },
  {
    icon: <img src={Payment} alt="Payment Gateway Access" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Payment</span> Gateway <br />
        Access
      </>
    ),
    desc: "Unlock access to PayPal, Wise, Stripe, and other international payment platforms through legitimate business registration.",
  },
  {
    icon: <img src={Tax} alt="Tax Optimization" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Tax</span>  Optimization
      </>
    ),
    desc: "Legal tax planning strategies specifically designed for content creators and digital entrepreneurs to minimize tax burden.",
  },
  {
    icon: <img src={Compliance} alt="Compliance Management" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Compliance</span> Management 
      </>
    ),
    desc: "Ongoing compliance support including annual filings, registered address services, and regulatory requirement management.",
  },
  {
    icon: <img src={Banking} alt="Global Banking Solutions" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Global</span> Banking <br />
        Solutions
      </>
    ),
    desc: "Assistance with international bank account opening and multi-currency business banking solutions for global operations.",
  },
];

const WhyChooseCards = () => {
  return (
    <div className="bg-white py-10 flex flex-col items-center px-5">
      {/* Section header */}
  <div className="w-full max-w-[1200px] px-4 text-center mb-10 md:mb-14 lg:mb-16">
        <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-[#232323]">
          Why Choose BR.LK?
        </h2>
        <p className="mt-3 text-[#232323]/70 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          We specialize in helping international entrepreneurs and content creators establish legitimate
          business presence in the UK and USA, unlocking global opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-9 max-w-[1450px] w-full ">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-sm text-center border border-[#0061FE]"
          >
            {card.icon}
            <h3 className="font-serif text-2xl md:text-2xl font-bold mb-3 leading-snug">
              {card.title}
            </h3>
            <p className="text-[#232323] text-base md:text-[1.06rem] leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseCards;