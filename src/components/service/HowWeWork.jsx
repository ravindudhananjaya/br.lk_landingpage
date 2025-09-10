import React from "react";
import questionImage from "../../assets/question.png";
import whatWeDoIcon from "../../assets/Services/whatwedo.png";
import whyChooseIcon from "../../assets/Services/whychoose.png";
import simplePricingIcon from "../../assets/Services/simplepricing.png";

const HowWeWork = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-8">
      <div className="max-w-[1450px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl lg:text-5xl text-[#232323] mb-6">
            How We Work
          </h2>
          <p className="text-[#232323] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Managing your books shouldn't slow you down. With BR.LK, bookkeeping becomes simple, transparent, and fully compliant—so you can focus on scaling your global business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-12">
            {/* What We Do Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img src={whatWeDoIcon} alt="What We Do" className="w-12 h-12" />
                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#232323]">
                  What We Do
                </h3>
              </div>
              <ul className="space-y-3 ml-16">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#1976e7] mt-3 flex-shrink-0"></div>
                  <span className="text-[#232323] text-lg">Track daily expenses & transactions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#1976e7] mt-3 flex-shrink-0"></div>
                  <span className="text-[#232323] text-lg">Prepare monthly financial reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#1976e7] mt-3 flex-shrink-0"></div>
                  <span className="text-[#232323] text-lg">Handle tax filings & compliance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#1976e7] mt-3 flex-shrink-0"></div>
                  <span className="text-[#232323] text-lg">Keep everything organized in one secure online platform</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img src={whyChooseIcon} alt="Why Choose Us" className="w-12 h-12" />
                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#232323]">
                  Why Choose Us
                </h3>
              </div>
              <ul className="space-y-3 ml-16">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#1976e7] mt-3 flex-shrink-0"></div>
                  <span className="text-[#232323] text-lg">Stress-free bookkeeping for UK & USA companies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#1976e7] mt-3 flex-shrink-0"></div>
                  <span className="text-[#232323] text-lg">Transparent, flat-rate pricing (no surprises)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#1976e7] mt-3 flex-shrink-0"></div>
                  <span className="text-[#232323] text-lg">Expert support tailored for global entrepreneurs</span>
                </li>
              </ul>
            </div>

            {/* Simple Pricing Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img src={simplePricingIcon} alt="Simple Pricing" className="w-12 h-12" />
                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#232323]">
                  Simple Pricing
                </h3>
              </div>
              <div className="ml-16">
                <div className="flex items-baseline space-x-2">
                  <span className="text-[#22c55e] font-bold text-3xl lg:text-4xl">$200</span>
                  <span className="text-[#232323] text-xl">/ month</span>
                  <span className="text-[#6b7280] text-lg">– all-inclusive bookkeeping for your business.</span>
                </div>
              </div>
            </div>

            {/* Get Started Button */}
            <div className="ml-16 pt-6">
              <button className="bg-[#232323] hover:bg-[#333333] text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors inline-flex items-center space-x-3 group">
                <span>Get Started</span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={questionImage}
                alt="Illustration of people working together"
                className="w-full max-w-lg h-auto"
                style={{
                  maxWidth: "500px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;