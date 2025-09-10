import React from "react";
import heroImage from "../../assets/service-hero.png";

const HeroSection = () => {
  return (
    <section className="bg-[#f3ede6] py-16 px-4 lg:px-8">
      <div className="max-w-[1650px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={heroImage}
                
                
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
            <h1 className="font-serif font-bold text-[30px]  lg:text-[40px] text-[#232323] leading-tight">
              Quick & Simple ITIN<br/> Application
            </h1>
            
            <p className="text-[#232323] text-lg lg:text-xl leading-relaxed max-w-2xl">
             Get your Individual Taxpayer Identification Number (ITIN) with<br/> expert assistance from BR.LK. Our streamlined application<br/> process ensures a smooth experience, enabling you to<br/> efficiently manage taxes and financial obligations.
            </p>

            <div className="pt-4">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;