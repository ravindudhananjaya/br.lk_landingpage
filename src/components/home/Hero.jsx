import React from "react";
import heroImg from "../../assets/hero-new.png";
import globalIcon from "../../assets/Home/Vector.png";
import Tick from "../../assets/Home/tick.png";
import stripeLogo from "../../assets/Home/stripe.png";
import wiseLogo from "../../assets/Home/wise.png";
import paypalLogo from "../../assets/Home/paypal.png";

const Hero = () => {
  return (
    <section className="bg-[#f3ede6] min-h-screen flex flex-col items-center pb-8 md:pb-10 ">
      <div className="max-w-4xl w-full mx-auto text-center pt-10 md:pt-16 px-4">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
          Turn Your Ideas Into a{" "}
          <span className="text-[#1976e7] font-bold inline-flex items-center gap-2">
            Global
            <img
              src={globalIcon}
              alt="Global"
              className="inline-block align-text-bottom w-8 h-8 md:w-10 md:h-10"
              style={{ verticalAlign: "middle", display: "inline" }}
              draggable={false}
            />
          </span>{" "}
          Business <br className="hidden sm:block" />
          Empire
        </h1>
  <p className="text-[#232323] text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-9 leading-relaxed">
          Join 10,000+ entrepreneurs who’ve unlocked international markets through our UK & USA company registration. Get instant access to PayPal, Wise, international banking, and reduce your tax burden legally – all while building a business that operates worldwide.
        </p>
        <div className="font-serif">
          <button className="bg-[#1976e7] text-white font-extralight py-4 px-10 rounded-[36px] text-[14px]">
            Get Started
          </button>
          <button className="bg-transparent border border-[#1976e7] text-[#1976e7] font-medium py-4 px-10 rounded-[36px] ml-4 text-[14px]">
            Schedule a Call
          </button>
        </div>
  <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 relative">
          <div className="relative">
            <img
              src={heroImg}
              alt="Working at laptop"
              className="w-full h-full object-cover block select-none rounded-2xl"
              draggable={false}
            />
            
            {/* Floating Cards */}
            {/* Stripe Card - Top Left */}
            <div className="absolute z-10 bg-white rounded-2xl px-3 sm:px-4 py-1.5 sm:py-3 shadow-xl flex items-center gap-2 sm:gap-3 
                            top-4 sm:top-6 md:top-8 lg:top-10 
                            left-[-1.5rem] sm:left-[-2.5rem] md:left-[-3.5rem] lg:left-[-4rem]
                            origin-top-left scale-90 sm:scale-95 md:scale-100">
              <div className="w-15 h-15 rounded-full flex items-center justify-center">
                <img src={Tick} alt="tick" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <img src={stripeLogo} alt="Stripe" className="h-10 sm:h-12 md:h-14 w-auto" />
            </div>

            {/* Wise Card - Top Right */}
            <div className="absolute z-10 bg-white rounded-2xl px-3 sm:px-4 py-1.5 sm:py-3 shadow-xl flex items-center gap-2 sm:gap-3 
                            top-24 sm:top-32 md:top-40 
                            right-[-1.5rem] sm:right-[-3rem] md:right-[-5rem]
                            origin-top-right scale-90 sm:scale-95 md:scale-100">
              <div className="w-15 h-15 rounded-full flex items-center justify-center">
                <img src={Tick} alt="tick" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <img src={wiseLogo} alt="Wise" className="h-5 sm:h-6 md:h-7 w-auto" />
            </div>

            {/* PayPal Card - Bottom Center */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-xl flex items-center gap-2 sm:gap-3 
                            -bottom-2 sm:-bottom-6 md:-bottom-10 
                            origin-bottom scale-90 sm:scale-95 md:scale-100">
              <div className="w-15 h-15 rounded-full flex items-center justify-center">
                <img src={Tick} alt="tick" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <img src={paypalLogo} alt="PayPal" className="h-10 sm:h-12 md:h-14 w-auto" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;