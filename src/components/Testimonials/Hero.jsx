import React from "react";
import Hero1 from "../../assets/Testimonials/hero1.png";
import Hero2 from "../../assets/Testimonials/hero2.png";
import Hero3 from "../../assets/Testimonials/hero3.png";
import Hero4 from "../../assets/Testimonials/hero4.png";
import Hero5 from "../../assets/Testimonials/hero5.png";
import Hero6 from "../../assets/Testimonials/hero6.png";
import Hero7 from "../../assets/Testimonials/hero7.png";
import Hero8 from "../../assets/Testimonials/hero8.png";

const Hero = () => {
  return (
  <section className="w-full bg-[#f3ede6] ">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Collage container (desktop/tablet) */}
        <div className="hidden md:flex relative  items-end justify-center gap-4 md:gap-6 lg:gap-8">
          {/* Left stack */}
          <div className="flex flex-col gap-6 translate-y-[4rem]">
            <div className="w-44 h-32 lg:w-52 lg:h-36 rounded-2xl overflow-hidden shadow-md">
              <img src={Hero1} alt="left-top" className="w-full h-full object-fit" />
            </div>
            <div className="w-44 h-40 lg:w-52 lg:h-44 rounded-2xl overflow-hidden shadow-md">
              <img src={Hero2} alt="left-bottom" className="w-full h-full object-fit" />
            </div>
          </div>

        {/* Center tall cards */}
                  <div className="flex items-end gap-4 md:gap-6 lg:gap-8 -translate-y-8">
                    <div className="w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-[22rem] rounded-3xl overflow-hidden shadow-lg  translate-y-[-1rem]">
                      <img src={Hero3} alt="center-1" className="w-full h-full object-fit" />
                    </div>
                    <div className="w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-[22rem] rounded-3xl overflow-hidden shadow-lg  translate-y-[-4rem] ">
                      <img src={Hero4} alt="center-2" className="w-full h-full object-fit" />
                    </div>
                    <div className="w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-[22rem] rounded-3xl overflow-hidden shadow-lg  translate-y-[-4rem]">
                      <img src={Hero5} alt="center-3" className="w-full h-full object-fit" />
                    </div>
                    <div className="w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-[22rem] rounded-3xl overflow-hidden shadow-lg  translate-y-[-1rem]">
                      <img src={Hero6} alt="center-4" className="w-full h-full object-fit" />
                    </div>
                  </div>

                  {/* Right stack */}
          <div className="flex flex-col gap-6 translate-y-[4rem]">
            <div className="w-44 h-40 lg:w-52 lg:h-44 rounded-2xl overflow-hidden shadow-md">
              <img src={Hero7} alt="right-top" className="w-full h-full object-fit" />
            </div>
            <div className="w-44 h-40 lg:w-52 lg:h-44 rounded-2xl overflow-hidden shadow-md">
              <img src={Hero8} alt="right-bottom" className="w-full h-full object-fit" />
            </div>
          </div>
        </div>

        {/* Centered text */}
        <div className="mt-10 md:mt-12 text-center">
          <h2 className="font-serif text-[#232323] text-2xl md:text-3xl lg:text-4xl font-semibold">
            Trusted by 5,000+
          </h2>
          <h3 className="font-serif text-[#232323] text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Entrepreneurs
          </h3>
          <p className="text-[#232323] text-md md:text-base lg:text-[20px] leading-relaxed max-w-2xl md:max-w-3xl mx-auto mt-4">
            Join thousands who have successfully launched their global businesses with our expert guidance and seamless
            registration process
          </p>
        </div>

        {/* Mobile layout: simplified grid */}
        <div className="md:hidden grid grid-cols-3 gap-3 mt-8">
          <div className="col-span-1 flex flex-col gap-3">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f3ede6]">
              <img src={Hero1} alt="m-left-1" className="w-full h-full object-contain" />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f3ede6]">
              <img src={Hero2} alt="m-left-2" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#f3ede6]">
              <img src={Hero3} alt="m-center-1" className="w-full h-full object-contain" />
            </div>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#f3ede6]">
              <img src={Hero4} alt="m-center-2" className="w-full h-full object-contain" />
            </div>
          </div>
           <div className="col-span-1 flex flex-col gap-3">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f3ede6]">
              <img src={Hero7} alt="m-left-1" className="w-full h-full object-contain" />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f3ede6]">
              <img src={Hero8} alt="m-left-2" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

  {/* Stats band below hero (full-width) */}
  <div className="mt-50 md:mt-20 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8">
          {/* Blue line behind cards (hidden on mobile) */}
          <div className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#2a6cf4]/80 w-full"></div>

          {/* Cards: desktop/tablet horizontally staggered with rotation; mobile grid 2x2 without rotation */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Desktop / Tablet */}
            <div className="hidden sm:flex items-center justify-center gap-6 md:gap-8 lg:gap-25">
              <div className="bg-white rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[-6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">5000+</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Happy Clients</div>
              </div>
              <div className="bg-white rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">50+</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Countries Served</div>
              </div>
              <div className="bg-white rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[-6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">98%</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Success Rate</div>
              </div>
              <div className="bg-white rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">24/7</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Support Available</div>
              </div>
            </div>

            {/* Mobile: 2x2 grid */}
            <div className="sm:hidden flex flex-col gap-4 w-full max-w-xl mx-auto px-10">
              <div className="bg-white rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">5000+</div>
                <div className="text-[#6d7b92] text-xs mt-1">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">50+</div>
                <div className="text-[#6d7b92] text-xs mt-1">Countries Served</div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">98%</div>
                <div className="text-[#6d7b92] text-xs mt-1">Success Rate</div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">24/7</div>
                <div className="text-[#6d7b92] text-xs mt-1">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;