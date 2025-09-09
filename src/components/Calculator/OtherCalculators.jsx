import React from "react";
import CalImage from "../../assets/calImage.png";
import ArrowIcon from '../../assets/arrow-right.png';

const cardData = [
 
  {
    icon: <img src={CalImage} alt="ITIN Number Service" className="w-16 h-16 mb-5" />,
    title: "eBay Fee Calculator",
    desc: "Calculate eBay selling fees and costs for your online marketplace business",
    btn: "Calculate eBay Fees"
  },
  {
    icon: <img src={CalImage} alt="Annual Reports Service" className="w-16 h-16 mb-5" />,
    title: "Mercuri Bank Fee Calculator",
    desc: "Get your official IRS tax ID number to operate your business legally in the United States",
    btn: "Calculate eBay Fees"
  },
  {
    icon: <img src={CalImage} alt="Account Management Service" className="w-16 h-16 mb-5" />,
    title: "Etsy Fee Calculator",
    desc: "Calculate Etsy marketplace fees for your handmade and creative products",
    btn: "Calculate Etsy Fees"
  },
  {
    icon: <img src={CalImage} alt="USA Bank Account" className="w-16 h-16 mb-5" />,
    title: "Wise Fee Calculator",
    desc: "Calculate international transfer fees for global business transactions",
    btn: "Calculate Wise Fees"
  },
  {
    icon: <img src={CalImage} alt="Bookkeeping" className="w-16 h-16 mb-5" />,
    title: "Amazon Fee Calculator",
    desc: "Calculate Amazon selling fees & FBA costs for your e-commerce business",
    btn: "Calculate Amazon Fees"
  },
  {
    icon: <img src={CalImage} alt="Stripe Account" className="w-16 h-16 mb-5" />,
    title: "Profit Margin Calculator",
    desc: "Calculate and optimize profit margins for better business decision making",
    btn:"Calculate Margins"
  },
];

const OtherCalculators = () => (
  <section className="bg-[#fffdfa] py-12 px-4 flex flex-col items-center">
    <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-2 text-[#232323] leading-relaxed">
      Other Business Calculators &<br/> Resources
    </h2>
    <p className="text-black text-center text-base md:text-lg max-w-2xl mx-auto mb-10">
     Essential tools to help manage your business finances and marketplace operations
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className=" bg-[#f3ede6] rounded-[24px] px-[20px] py-[30px] flex flex-col items-center text-center shadow-sm gap-[25px]"
        >
          {card.icon}
          <h3 className="font-serif font-semibold text-xl mb-3 text-[#232323]">{card.title}</h3>
          <p className="text-[#232323] text-base mb-6">{card.desc}</p>
          <button className="mt-auto bg-[#1976e7] hover:bg-[#125bb5] transition-colors text-white font-semibold px-[40px] py-[10px] rounded-full flex items-center gap-2">
            {card.btn}
             <img src={ArrowIcon} alt="Arrow icon" className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default OtherCalculators;