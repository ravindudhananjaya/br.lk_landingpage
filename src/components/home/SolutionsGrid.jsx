import React from "react";
import agentIcon from "../../assets/Home/agent.png";
import EIN from "../../assets/Home/ein.png";
import BIO from "../../assets/Home/bio.png";
import Account from "../../assets/Home/account.png";
import USA from "../../assets/Home/usa.png";
import Bookkeeping from "../../assets/Home/Book.png";
import Stripe from "../../assets/Home/stripe.png";
import ArrowIcon from '../../assets/arrow-right.png';

const cardData = [
  {
    icon: <img src={agentIcon} alt="Registered Agent Service" className="w-16 h-16 mb-5" />,
    title: "Registered Agent Service",
    desc: "Ensure seamless compliance with our professional registered agent service. We handle all official state correspondence and legal documents on behalf of your business, providing reliable representation you can trust.",
  },
  {
    icon: <img src={EIN} alt="EIN Number" className="w-16 h-16 mb-5" />,
    title: "EIN Number",
    desc: "Get your official IRS tax ID number to operate your business legally in the United States.",
  },
  {
    icon: <img src={BIO} alt="BOI Report" className="w-16 h-16 mb-5" />,
    title: "BOI Report",
    desc: "We help file your Beneficial Ownership Information report to meet new federal compliance requirements.",
  },
  {
    icon: <img src={EIN} alt="ITIN Number Service" className="w-16 h-16 mb-5" />,
    title: "ITIN Number Service",
    desc: "Secure your Individual Taxpayer Identification Number (ITIN) for non-U.S. residents. This essential identifier enables you to fulfill tax obligations and conduct business activities within the United States.",
  },
  {
    icon: <img src={EIN} alt="Annual Reports Service" className="w-16 h-16 mb-5" />,
    title: "Annual Reports Service",
    desc: "Maintain your business in good standing with professionally prepared annual reports. We ensure timely filing of all required state documentation to preserve your company's active status and operational privileges.",
  },
  {
    icon: <img src={Account} alt="Account Management Service" className="w-16 h-16 mb-5" />,
    title: "Account Management Service",
    desc: "Gain valuable business insights through comprehensive account management and detailed reporting. Make informed strategic decisions with clear, actionable financial and operational data.",
  },
  {
    icon: <img src={USA} alt="USA Bank Account" className="w-16 h-16 mb-5" />,
    title: "USA Bank Account",
    desc: "Establish your U.S. banking presence with expert guidance. We assist international businesses in navigating the complexities of opening and managing American bank accounts, ensuring smooth financial operations.",
  },
  {
    icon: <img src={Bookkeeping} alt="Bookkeeping" className="w-16 h-16 mb-5" />,
    title: "Bookkeeping",
    desc: "Maintain accurate financial records with our professional bookkeeping services. From transaction recording to financial statement preparation, we ensure your books are organized, compliant, and ready for tax season.",
  },
  {
    icon: <img src={Stripe} alt="Stripe Account" className="w-16 h-16 mb-5" />,
    title: "Stripe Account",
    desc: "Enable secure online payments with professional Stripe account setup and management. We help you integrate reliable payment processing solutions to expand your business reach and improve customer experience.",
  },
];

const SolutionsGrid = () => (
  <section className="bg-white py-12 px-4 flex flex-col items-center">
    <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] text-center mb-2 text-[#232323] leading-tight">
      Comprehensive Business<br /><span className="block mt-2"></span>Solutions for Your Success
    </h2>
    <p className="text-[#6d7b92] text-center text-base md:text-lg max-w-2xl mx-auto mb-10">
      Complete end-to-end services to establish, manage, and grow your international business with confidence and compliance.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-6xl">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="bg-[#f6f3ef] rounded-2xl px-7 py-8 flex flex-col items-center text-center shadow-sm"
        >
          {card.icon}
          <h3 className="font-serif font-bold text-xl mb-3 text-[#232323]">{card.title}</h3>
          <p className="text-[#232323] text-base mb-6">{card.desc}</p>
          <button className="mt-auto bg-[#1976e7] hover:bg-[#125bb5] transition-colors text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2">
            Explore More
             <img src={ArrowIcon} alt="Arrow icon" className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default SolutionsGrid;