import React from "react";
import expertKnowledgeIcon from "../../assets/about/expertknowledge.png";
import provenTrackIcon from "../../assets/about/proventrack.png";
import localUnderstandingIcon from "../../assets/about/localunderstand.png";

const WhyChoose = () => {
  const reasons = [
    {
      icon: expertKnowledgeIcon,
      title: "Expert Knowledge",
      description: "Our team consists of qualified professionals with deep expertise in international business law, taxation, and regulatory compliance across multiple jurisdictions."
    },
    {
      icon: provenTrackIcon,
      title: "Proven Track Record",
      description: "With hundreds of successful registrations and a 98% success rate, we have the experience and reliability you can trust for your business expansion."
    },
    {
      icon: localUnderstandingIcon,
      title: "Local Understanding",
      description: "As a Sri Lankan company, we understand the unique challenges faced by local entrepreneurs and provide tailored solutions that work in our context."
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 px-4 lg:px-8 relative overflow-hidden lg:h-screen">
      <div className="max-w-[1650px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Side - Title and Description (Centered) */}
          <div>
            <div className="relative space-y-4 sm:space-y-6 flex flex-col items-center justify-center text-center lg:items-center lg:justify-center lg:text-center h-full order-1 lg:order-1">
            <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px]  text-[#232323] leading-tight px-2">
              Why Choose<br />
              <span className="text-[#1976e7]">BR.LK?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg px-2">
              We're not just a registration service – we're your strategic partner in global business expansion.
            </p>
          </div>
          </div>

          {/* Right Side - Cards with Blue Rectangle Background */}
          <div className="relative h-auto sm:h-[400px] md:h-[500px] lg:h-[50px] rotate-0 sm:rotate-1 md:rotate-2 lg:rotate-3 order-2 lg:order-2">
            {/* Blue Rectangle Background - Responsive positioning */}
            <div 
              className="absolute -top-4 -left-4 -right-4 -bottom-4 sm:-top-6 sm:-left-6 sm:-right-6 sm:-bottom-6 md:-top-8 md:-left-8 md:-right-8 md:-bottom-8 bg-[#1976e7] z-0"
            ></div>

            {/* Cards Container - Responsive grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 -rotate-0 sm:-rotate-1 md:-rotate-2 lg:-rotate-3 p-2 sm:p-3 md:p-4">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="bg-[#1e3a8a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 lg:p-8 text-white shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    <img 
                      src={reason.icon} 
                      alt={reason.title} 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-2xl text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed text-center">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;