import React from "react";
import ukCompanyIcon from "../../assets/about/ukcompany.png";
import usaBusinessIcon from "../../assets/about/usabusiness.png";
import paymentIcon from "../../assets/about/payment.png";
import taxIcon from "../../assets/about/tax.png";
import complianceIcon from "../../assets/about/compliance.png";
import globalIcon from "../../assets/about/global.png";

const WhatWeDo = () => {
  const servicesData = [
    {
      icon: ukCompanyIcon,
      title: "UK Company Registration",
      titleHighlight: "UK",
      description: "Complete UK company formation services including registered address, company secretary, and all legal documentation required for legitimate business operations."
    },
    {
      icon: usaBusinessIcon,
      title: "USA Business Formation",
      titleHighlight: "USA",
      description: "End-to-end US business registration including LLC and Corporation formation, EIN acquisition, and state compliance management."
    },
    {
      icon: paymentIcon,
      title: "Payment Gateway Access",
      titleHighlight: "Payment",
      description: "Unlock access to PayPal, Wise, Stripe, and other international payment platforms through legitimate business registration."
    },
    {
      icon: taxIcon,
      title: "Tax Optimization",
      titleHighlight: "Tax",
      description: "Legal tax planning strategies specifically designed for content creators and digital entrepreneurs to minimize tax burden."
    },
    {
      icon: complianceIcon,
      title: "Compliance Management",
      titleHighlight: "Compliance",
      description: "Ongoing compliance support including annual filings, registered address services, and regulatory requirement management."
    },
    {
      icon: globalIcon,
      title: "Global Banking Solutions",
      titleHighlight: "Global",
      description: "Assistance with international bank account opening and multi-currency business banking solutions for global operations."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-[#232323] mb-6">
            What We Do
          </h2>
          
          
          
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            We provide comprehensive business registration and support services that enable Sri Lankan 
            entrepreneurs to establish legitimate business presence in the UK and USA, opening doors to global 
            opportunities.
          </p>
          
          {/* Decorative line */}
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-blue-200 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300 group"
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
              <h3 className="text-xl lg:text-2xl font-bold text-[#232323] mb-4">
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

export default WhatWeDo;