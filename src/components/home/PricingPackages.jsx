import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const packagesData = [
  {
    name: "Monthly",
    price: "$129",
    note: "+ State Fee",
    features: [
      "Articles of Organization",
      "Lifetime Compliance Alerts",
      "Business Tax Consultation",
      "Incorporation documents",
      "Business templates",
    ],
    popular: false,
    color: "white",
    border: "border-transparent",
    btn: "border border-[#1976e7] text-[#1976e7] bg-white",
    btnHover: "hover:bg-[#f3ede6]",
    priceColor: "text-[#1976e7]",
  },
  {
    name: "Growth",
    price: "$159",
    note: "+ State Fee",
    features: [
      "Order priority",
      "Articles of Organization",
      "Fast EIN Business Tax Number",
      "BOI Reporting",
      "Business Bank Consultation",
      "Stripe Consultation",
      "Lifetime Compliance Alerts",
      "Business Tax Consultation",
    ],
    popular: true,
    color: "#eaf2ff",
    border: "border border-[#1976e7]",
    btn: "bg-[#1976e7] text-white",
    btnHover: "hover:bg-[#125bb5]",
    priceColor: "text-[#1976e7]",
  },
  {
    name: "Enterprise",
    price: "$50",
    note: "+ State Fee",
    features: [
      "Order priority",
      "Articles of Organization",
      "Fast EIN Business Tax Number",
      "BOI Reporting",
      "Business address",
      "Business Bank Consultation",
      "Stripe Consultation",
      "Incorporation documents",
      "Business Bank Consultation",
      "Business templates",
    ],
    popular: false,
    color: "white",
    border: "border border-[#e3e3e3]",
    btn: "border border-[#1976e7] text-[#1976e7] bg-white",
    btnHover: "hover:bg-[#f3ede6]",
    priceColor: "text-[#1976e7]",
  },
];

const countryTabs = [
  {
    label: "United States",
    flag: "US",
    value: "us",
  },
  {
    label: "United Kingdom",
    flag: "GB",
    value: "uk",
  },
];

const PricingPackages = () => {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const activeIndex = Math.max(0, countryTabs.findIndex(t => t.value === selectedCountry));

  return (
    <section className="bg-[#f3ede6] py-12 px-4 flex flex-col items-center">
      <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] text-center mb-3 text-[#232323] leading-tight">
        Choose Your Success
        <br className="hidden md:block" /> Package
      </h2>
      <p className="text-[#6d7b92] text-center text-base md:text-lg max-w-2xl mx-auto mb-8">
        Transparent, competitive pricing designed to fit businesses of every
        size. Select the perfect solution for your needs, with flexible options
        that scale as your business grows.
      </p>
      {/* Country Tabs */}
      <div className="flex items-center justify-center mb-10">
        <div
          className="relative inline-flex rounded-full bg-[#f4f4f4] p-1 shadow-sm overflow-hidden"
          role="tablist"
          aria-label="Select country"
        >
          {/* Sliding indicator */}
          <span
            className="pointer-events-none absolute left-1 top-1 h-[calc(100%-8px)] w-1/2 rounded-full bg-[#1976e7] shadow transition-transform duration-300 ease-out"
            style={{ width: 'calc(50% - 8px)', transform: `translateX(${activeIndex * 100}%)` }}
            aria-hidden="true"
          />
          {countryTabs.map((tab) => {
            const isActive = selectedCountry === tab.value;
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={isActive}
                className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm md:text-base focus:outline-none transition-colors ${isActive ? 'text-white' : 'text-[#232323]'}`}
                onClick={() => setSelectedCountry(tab.value)}
              >
                <span className="text-lg">
                  <ReactCountryFlag
                    countryCode={tab.flag}
                    svg
                    style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }}
                  />
                </span>
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      {/* Pricing Cards */}
      <div
        className="flex flex-col items-center justify-center gap-6 w-full max-w-5xl
                md:flex-row md:flex-wrap md:justify-center md:items-stretch md:gap-8"
      >
        {packagesData.map((pkg, idx) => {
          // Set custom heights for each card
          let cardHeight;
          if (idx === 0) cardHeight = 480;
          else if (idx === 1) cardHeight = 580;
          else if (idx === 2) cardHeight = 660;
          return (
            <div
              key={pkg.name}
              className={`relative w-full max-w-[350px] md:flex-1 rounded-2xl px-7 py-10 flex flex-col items-center text-center shadow-md overflow-hidden mx-auto ${pkg.border}`}
              style={{
                background: pkg.color,
                minWidth: 260,
                maxWidth: 350,
                height: cardHeight,
              }}
            >
              {pkg.popular && (
        <div className="absolute left-0 top-0 z-10 select-none pointer-events-none">
                  {/* Corner ribbon container */}
                  <div className="relative w-0 h-0">
                    {/* Diagonal ribbon */}
                    <div
                      className="absolute -left-8 top-4 rotate-[-45deg] bg-[#232323] text-white uppercase text-[10px] tracking-[0.2em] font-semibold text-center shadow-md"
                      style={{ width: 135, padding: '6px 0' }}
                    >
                      POPULAR
                    </div>
                  </div>
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#232323]">
                {pkg.name}
              </h3>
              <div className={`${pkg.priceColor} font-bold text-3xl mb-1`}>
                {pkg.price}
              </div>
              <div className="text-[#6d7b92] text-sm mb-6">{pkg.note}</div>
              <ul className="text-[#232323] text-base flex flex-col gap-3 mb-8 text-left w-full max-w-xs mx-auto">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-lg">○</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-7 py-2 rounded-full font-medium transition-all outline-none ${pkg.btn} ${pkg.btnHover}`}
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingPackages
