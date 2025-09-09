import React from "react";
import brLogo from "../../assets/br-black.png";

const Hero = () => {
  return (
    <section className="bg-[#f3ede6] py-16 px-4 lg:px-8 lg:h-[550px]">
      <div className="max-w-[1650px] mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={brLogo} 
              alt="BR.LK Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-[#232323] mb-6">
            Terms and Conditions
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
            These terms govern your use of our services and establish the framework for our business relationship
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;