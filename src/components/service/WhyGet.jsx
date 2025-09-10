import React from "react";
import ExpertIcon from "../../assets/Services/expert.png";
import FastIcon from "../../assets/Services/fast.png";
import DocumentIcon from "../../assets/Services/document.png";
import SecureIcon from "../../assets/Services/secure.png";

const WhyGet = () => {
  const servicesData = [
    {
      icon: ExpertIcon,
      title: "Expert Knowledge",
      titleHighlight: "Expert Knowledge",
      description: "Our team has extensive experience with IRS procedures and requirements, ensuring your application is handled correctly the first time."
    },
    {
      icon: FastIcon,
      title: "Fast Processing",
      titleHighlight: "Fast Processing",
      description: "We streamline the application process and work directly with certified acceptance agents to expedite your ITIN approval."
    },
    {
      icon: DocumentIcon,
      title: "Document Support",
      titleHighlight: "Document Support",
      description: "Complete assistance with document preparation, certification, and verification to meet all IRS requirements"
    },
    {
      icon: SecureIcon,
      title: "Secure & Confidential",
      titleHighlight: "Secure & Confidential",
      description: "Your personal information is handled with the highest level of security and confidentiality throughout the entire process."
    },
    
  ];

  return (
    <section className="bg-[#f3ede6]  py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-[30px]  lg:text-[40px] text-[#232323] mb-6">
            Why Get Your ITIN From Us
          </h2>
          
          
          
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Experience the difference of working with ITIN specialists who understand the complexities and can navigate them efficiently.
          </p>
          
          {/* Decorative line */}
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-[#FFFDFA] border-2 border-[#0061FE] rounded-[24px] py-[30px] px-5 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#1976e7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[24px]  font-normal font-serif text-[#232323] mb-4">
                <span className="text-[#1976e7]">{service.titleHighlight}</span>{" "}
                {service.title.replace(service.titleHighlight, "").trim()}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        
      </div>
    </section>
  );
};

export default WhyGet;