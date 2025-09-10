import React from "react";

const OurStory = () => {
  const statsData = [
    {
      value: "500",
      suffix: "+",
      label: "Companies Registered",
  rotation: "lg:-rotate-3",
  counterRotation: "lg:rotate-3",
  hoverRotation: "lg:hover:-rotate-1"
    },
    {
      value: "50",
      suffix: "+", 
      label: "Countries Served",
  rotation: "lg:rotate-2",
  counterRotation: "lg:-rotate-2",
  hoverRotation: "lg:hover:rotate-1"
    },
    {
      value: "98",
      suffix: "%",
      label: "Success Rate",
  rotation: "lg:-rotate-2",
  counterRotation: "lg:rotate-2",
  hoverRotation: "lg:hover:-rotate-1"
    },
    {
      value: "24",
      suffix: "/7",
      label: "Support Available",
  rotation: "lg:rotate-3",
  counterRotation: "lg:-rotate-3",
  hoverRotation: "lg:hover:rotate-1"
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1685px] mx-auto ">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-[#232323] mb-4 sm:mb-6 lg:mb-8">
            Our Story
          </h2>
          <p className="text-[#232323] text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto px-2">
            Founded with a vision to break down barriers for Sri Lankan entrepreneurs, BR.LK emerged from the understanding 
            that geographical boundaries shouldn't limit business ambitions. We recognized the challenges faced by local 
            entrepreneurs in accessing global markets and payment systems, and created a comprehensive solution to bridge 
            this gap.
          </p>
        </div>

        {/* Stats Cards with Connecting Line */}
        <div className="relative mt-8 sm:mt-12 lg:mt-16">
          {/* Connecting Line - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#1976e7] transform -translate-y-1/2 z-0">
            {/* Line segments between cards */}
            <div className="absolute left-[12.5%] w-[25%] h-full bg-[#1976e7]"></div>
            <div className="absolute left-[37.5%] w-[25%] h-full bg-[#1976e7]"></div>
            <div className="absolute left-[62.5%] w-[25%] h-full bg-[#1976e7]"></div>
          </div>

          {/* Vertical Connecting Line for Mobile/Tablet */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-[#1976e7] transform -translate-x-1/2 z-0">
            {/* Connection dots for mobile */}
            
          </div>

          {/* Stats Grid - Centered with reduced gaps */}
 {/* Stats band below hero (full-width) */}
  <div className="mt-50 md:mt-20 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8">
          {/* Blue line behind cards (hidden on mobile) */}
          <div className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#2a6cf4]/80 w-full"></div>

          {/* Cards: desktop/tablet horizontally staggered with rotation; mobile grid 2x2 without rotation */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Desktop / Tablet */}
            <div className="hidden sm:flex items-center justify-center gap-6 md:gap-8 lg:gap-25">
              <div className="bg-[#f3ede6] rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[-6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">5000+</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Happy Clients</div>
              </div>
              <div className="bg-[#f3ede6] rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">50+</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Countries Served</div>
              </div>
              <div className="bg-[#f3ede6] rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[-6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">98%</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Success Rate</div>
              </div>
              <div className="bg-[#f3ede6] rounded-3xl shadow-sm px-8 py-6 md:px-10 md:py-8 rotate-[6deg]">
                <div className="text-[#1f60ff] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide font-serif">24/7</div>
                <div className="text-[#6d7b92] text-sm md:text-base mt-2 text-center">Support Available</div>
              </div>
            </div>

            {/* Mobile: 2x2 grid */}
            <div className="sm:hidden flex flex-col gap-4 w-full max-w-xl mx-auto px-10">
              <div className="bg-[#f3ede6] rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">5000+</div>
                <div className="text-[#6d7b92] text-xs mt-1">Happy Clients</div>
              </div>
              <div className="bg-[#f3ede6] rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">50+</div>
                <div className="text-[#6d7b92] text-xs mt-1">Countries Served</div>
              </div>
              <div className="bg-[#f3ede6] rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">98%</div>
                <div className="text-[#6d7b92] text-xs mt-1">Success Rate</div>
              </div>
              <div className="bg-[#f3ede6] rounded-2xl shadow-sm px-6 py-5 text-center">
                <div className="text-[#1f60ff] text-2xl font-semibold font-serif">24/7</div>
                <div className="text-[#6d7b92] text-xs mt-1">Support Available</div>
              </div>
            </div>
          </div>
        </div>

          {/* Connection Points for Desktop */}
          
        </div>
      </div>
    </section>
  );
};

export default OurStory;