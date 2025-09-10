import React from "react";
import step3Icon from "../../assets/Home/3step.png";
import step1Icon from "../../assets/Home/one.png";
import step2Icon from "../../assets/Home/two.png";

const steps = [
  {
    icon: <img src={step1Icon} alt="Choose Your Package" className="w-25 h-25  mb-4 " />,
    title: "1. Choose Your Package",
    desc: "Select the package that meets your current needs, and easily add specialized services as your business grows.",
  },
  {
    icon: <img src={step2Icon} alt="Submit Your Details" className="w-25 h-25  mb-4 " />,
    title: "2. Submit Your Details",
    desc: "Provide the necessary information and documents, with guidance and expert advice every step of the way.",
  },
  {
    icon: <img src={step3Icon} alt="Receive Confirmation and Documents" className="w-25 h-25  mb-4 " />,
    title: "3. Receive Confirmation and Documents",
    desc: "Receive your certificate of incorporation and all legal documents within 24-48 hours.",
  },
];

const ThreeSteps = () => (
  <section className="bg-[#f3ede6] py-8 md:py-12 flex flex-col items-center">
    <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] text-center mb-3 text-[#232323] leading-tight">
      Register Your Company in<br className="hidden md:block" /> Three Simple Steps
    </h2>
    <p className="text-[#6d7b92] text-center text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 md:mb-12 px-4">
      Launch and manage your business with ease — from company formation to ongoing support.
    </p>

    {/* Desktop Layout */}
    <div className="hidden md:block relative w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-x-20 lg:gap-x-28 gap-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Card */}
            <div
              className=" px-6 lg:px-8 py-8 lg:py-10 flex flex-col items-center text-center transition-transform relative z-20"
              style={{ minHeight: 350 }}
            >
              {step.icon}
              <h3 className="font-serif text-lg lg:text-xl font-bold mb-3 leading-snug text-[#232323]">{step.title}</h3>
              <p className="text-[#6d7b92] text-sm lg:text-base leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow 1: From Step 1 → Step 2 (Top curve, above cards) */}
      {/* md-only smaller arrow */}
      <svg
        className="hidden md:block lg:hidden absolute top-[-5px] left-1/3 transform -translate-x-1/2 pointer-events-none z-10"
        width="220"
        height="70"
        viewBox="0 0 220 70"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="arrowhead-top-md"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="2.77"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#232323" />
          </marker>
        </defs>
        <path
          d="M 8 35 Q 110 5 212 35"
          stroke="#232323"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-top-md)"
        />
      </svg>
      {/* lg+ arrow */}
      <svg
        className="hidden lg:block absolute top-[-5px] left-1/3 transform -translate-x-1/2 pointer-events-none z-10"
        width="280"
        height="90"
        viewBox="0 0 280 90"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="arrowhead-top-lg"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="2.77"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#232323" />
          </marker>
        </defs>
        <path
          d="M 10 40 Q 140 5 270 40"
          stroke="#232323"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-top-lg)"
        />
      </svg>

      {/* Arrow 2: From Step 2 → Step 3 (Bottom curve, below cards) */}
      {/* md-only smaller arrow */}
      <svg
        className="hidden md:block lg:hidden absolute bottom-[-5px] left-2/3 transform -translate-x-1/2 pointer-events-none z-10"
        width="220"
        height="70"
        viewBox="0 0 220 70"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="arrowhead-bottom-md"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#232323" />
          </marker>
        </defs>
        <path
          d="M 8 40 Q 110 65 212 40"
          stroke="#232323"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-bottom-md)"
        />
      </svg>
      {/* lg+ arrow */}
      <svg
        className="hidden lg:block absolute bottom-[-5px] left-2/3 transform -translate-x-1/2 pointer-events-none z-10"
        width="280"
        height="90"
        viewBox="0 0 280 90"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="arrowhead-bottom-lg"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#232323" />
          </marker>
        </defs>
        <path
          d="M 10 50 Q 140 85 270 50"
          stroke="#232323"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-bottom-lg)"
        />
      </svg>
    </div>

    {/* Mobile Layout */}
    <div className="md:hidden w-full max-w-md mx-auto">
      {steps.map((step, idx) => (
        <div key={idx} className="relative mb-6 last:mb-0">
          <div className="bg-[#f3ede6] px-5 py-6 flex flex-col items-center text-center relative z-20">
            {step.icon}
            <h3 className="font-serif text-base font-bold mb-2 leading-snug text-[#232323]">{step.title}</h3>
            <p className="text-[#6d7b92] text-sm leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ThreeSteps;