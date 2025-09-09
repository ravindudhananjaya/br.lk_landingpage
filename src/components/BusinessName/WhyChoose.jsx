import React from "react";

import Paperworkicon from "../../assets/Home/paperwork.png";
import Language from "../../assets/Home/language.png";
import CompanyReg from "../../assets/company-reg.png";
import BusinessFormation from "../../assets/business-formation.png";
import Payment from "../../assets/payment-gateway.png";
import MarketFocus from "../../assets/market-focus.png";
import Domain from "../../assets/global-banking.png";
import Target from "../../assets/target-icon.png";
// Card data
const cardData = [

 
  {
    icon: <img src={MarketFocus} alt="Market Focus" className="w-16 h-16 mb-5 rounded-full bg-blue-600 p-2" />,
    title: (
      <>
        <span className="text-[#1976e7]">Sri Lankan</span> Market Focus
      </>
    ),
    desc: "Names crafted specifically for the Sri Lankan business environment, considering local culture and market preferences.",
  },
  {
    icon: <img src={Domain} alt="Domain Availability" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Domain Availability</span>
      </>
    ),
    desc: "Instant check for .lk domain availability and alternative extensions to secure your online presence.",
  },
  {
    icon: <img src={Target} alt="Target Audience" className="w-16 h-16 mb-5 rounded-full bg-blue-600 p-2" />,
    title: (
      <>
        <span className="text-[#1976e7]">Industry-Specific</span>
      </>
    ),
    desc: "Tailored suggestions based on your industry, ensuring your name resonates with your target audience.",
  },
];

const WhyChooseCards = () => {
  return (
    <div className="bg-white py-10 flex flex-col items-center px-5">
      {/* Section header */}
  <div className="w-full max-w-[1200px] px-4 text-center mb-10 md:mb-14 lg:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#232323]">
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