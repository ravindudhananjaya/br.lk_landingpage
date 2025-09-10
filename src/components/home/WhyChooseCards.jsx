import React from "react";
import fastRegiIcon from "../../assets/Home/fastregi.png";
import Paperworkicon from "../../assets/Home/paperwork.png";
import Language from "../../assets/Home/language.png";
import Security from "../../assets/Home/security.png";
import legal from "../../assets/Home/legal.png";
import realtime from "../../assets/Home/realtime.png"
// Card data
const cardData = [
  {
    icon: <img src={fastRegiIcon} alt="Lightning-Fast Registration" className="w-16 h-16 mb-5" />,
    title: (
      <>
        Lightning-Fast <br />
        <span className="text-[#1976e7]">Registration</span>
      </>
    ),
    desc: "Your business formed in record time. Complete registration in 24–48 hours with our streamlined digital process. No waiting weeks for approvals.",
  },
  {
    icon: <img src={Paperworkicon} alt="Minimal Paperwork" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Minimal</span> Paperwork <br />
        Required
      </>
    ),
    desc: "We handle everything while you provide minimal documentation. Our expert team manages the complex paperwork, so you can focus on growing your business.",
  },
  {
    icon: <img src={Language} alt="Local Language Support" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Local</span> Language Support
      </>
    ),
    desc: "Our friendly Sinhala and Tamil–speaking team is here to guide you every step of the way. Get personalized support in your preferred language.",
  },
  {
    icon: <img src={Security} alt="Secure & Compliant" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">100% Secure &<br />Compliant</span>
      </>
    ),
    desc: "Bank-level security for all your sensitive information with complete compliance to Sri Lankan regulations. Your data is protected with military–grade encryption.",
  },
  {
    icon: <img src={legal} alt="Expert Legal Guidance" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Expert</span> Legal Guidance
      </>
    ),
    desc: "Professional consultation from experienced business lawyers and registration specialists. Get expert advice tailored to your specific business needs.",
  },
  {
    icon: <img src={realtime} alt="Real-Time Progress Tracking" className="w-16 h-16 mb-5" />,
    title: (
      <>
        <span className="text-[#1976e7]">Real-Time</span> Progress Tracking
      </>
    ),
    desc: "Monitor your registration progress live through our customer portal. Get instant updates and notifications at every milestone of your business formation.",
  },
];

const WhyChooseCards = () => {
  return (
    <div className="bg-[#f3ede6] py-10 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="mt-12 md:mt-16 font-serif text-[var(--accent-black, #212833)] md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-[60px] mb-2">
          Why Choose BR.LK?
        </h2>
        <p className="text-[#606060] text-base md:text-lg">
          Experience the most efficient and reliable business registration process in Sri Lanka
        </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-[1450px] w-full">
        
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-sm text-center"
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