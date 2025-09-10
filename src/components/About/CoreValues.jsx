import React from "react";
import coreValueImage from "../../assets/about/core value.png";

const CoreValues = () => {
  return (
    <section className="bg-[#f3ede6] py-16 px-4 lg:px-8">
      <div className="max-w-[1350px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-[#232323] mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
            The principles that guide everything we do and define who we are as a company.
          </p>
        </div>

        {/* Core Values Layout - Matching First Image Design */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Center Image */}
          <div className="flex justify-center items-center">
            <img 
              src={coreValueImage} 
              alt="Core Values Globe" 
              className="w-80 h-80 lg:w-96 lg:h-96 object-contain z-10"
            />
          </div>

          {/* Transparency - Top Left */}
          <div className="absolute top-0 left-0 w-72 lg:w-80 text-left">
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#1976e7] mb-4">
              Transparency
            </h3>
            <p className="text-[#232323] text-base lg:text-lg leading-relaxed">
              Legal tax planning strategies specifically designed for content creators and digital 
              entrepreneurs to minimize tax burden.
            </p>
          </div>

          {/* Partnership - Top Right */}
          <div className="absolute top-0 right-0 w-72 lg:w-80 text-right">
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#1976e7] mb-4">
              Partnership
            </h3>
            <p className="text-[#232323] text-base lg:text-lg leading-relaxed">
              We view our clients as partners in their journey, providing ongoing support beyond 
              just registration.
            </p>
          </div>

          {/* Efficiency - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-72 lg:w-80 text-left">
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#1976e7] mb-4">
              Efficiency
            </h3>
            <p className="text-[#232323] text-base lg:text-lg leading-relaxed">
              We streamline complex registration processes to deliver fast, reliable results 
              without compromising quality.
            </p>
          </div>

          {/* Compliance - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-72 lg:w-80 text-right">
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#1976e7] mb-4">
              Compliance
            </h3>
            <p className="text-[#232323] text-base lg:text-lg leading-relaxed">
              All our services are fully compliant with international regulations, ensuring 
              legitimate and sustainable business operations.
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl text-[#1976e7] mb-4">
              Transparency
            </h3>
            <p className="text-[#232323] text-base leading-relaxed">
              Legal tax planning strategies specifically designed for content creators and digital 
              entrepreneurs to minimize tax burden.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl text-[#1976e7] mb-4">
              Partnership
            </h3>
            <p className="text-[#232323] text-base leading-relaxed">
              We view our clients as partners in their journey, providing ongoing support beyond 
              just registration.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl text-[#1976e7] mb-4">
              Efficiency
            </h3>
            <p className="text-[#232323] text-base leading-relaxed">
              We streamline complex registration processes to deliver fast, reliable results 
              without compromising quality.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl text-[#1976e7] mb-4">
              Compliance
            </h3>
            <p className="text-[#232323] text-base leading-relaxed">
              All our services are fully compliant with international regulations, ensuring 
              legitimate and sustainable business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;