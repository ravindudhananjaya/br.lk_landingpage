import React from "react";
import everything1 from "../../assets/Services/everthing1.png";
import everything2 from "../../assets/Services/everthing2.png";
import everything3 from "../../assets/Services/everything3.png";
import everything4 from "../../assets/Services/everything4.png";
import everything5 from "../../assets/Services/everything5.png";

const EverythingOnePlace = () => {
  const firstRowServices = [
    {
      image: everything1,
      title: "Tax Filing",
      description: "Professional tax preparation and filing services for businesses",
      width: "3/5" // 60% width
    },
    {
      image: everything2,
      title: "Financial Reporting",
      description: "Real-time financial insights and comprehensive business reports",
      width: "2/5" // 40% width
    }
  ];

  const secondRowServices = [
    {
      image: everything3,
      title: "Payroll Management",
      description: "Streamlined payroll processing and employee management"
    },
    {
      image: everything4,
      title: "Expense Tracking",
      description: "Automated expense management and receipt tracking"
    },
    {
      image: everything5,
      title: "Business Consulting",
      description: "Strategic guidance to grow and optimize your business"
    }
  ];

  return (
    <section className="bg-[#F3EDE6] py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-[30px]  lg:text-[40px] text-[#232323] mb-4">
            Everything you need in one place
          </h2>
        </div>

        {/* First Row - 3/5 and 2/5 width cards */}
  <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {firstRowServices.map((service, index) => (
            <div
              key={index}
              className={`bg-[#f8f9fa] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                service.width === "3/5" ? "lg:w-3/5" : "lg:w-2/5"
              } w-full`}
              style={{ height: "480px" }}
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 h-40 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#232323] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                {/* Explore More Button */}
                <button className="bg-[#232323] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1976e7] transition-colors duration-300 flex items-center gap-2 w-fit">
                  Explore More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 equal width cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondRowServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ height: "480px" }}
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 h-40 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#232323] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                {/* Explore More Button */}
                <button className="bg-[#232323] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1976e7] transition-colors duration-300 flex items-center gap-2 w-fit">
                  Explore More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverythingOnePlace;