import React from "react";
import TargetIcon from "../../assets/target-icon.png";
import GlobeIcon from "../../assets/globe-icon.png";
import BookIcon from "../../assets/book-icon.png";

/**
 * Reusable WhyUse section. Styling is unchanged; content can be varied per page.
 * Props:
 * - leftContent: ReactNode rendered inside the left paragraph
 * - reasons: [{ icon?, title, description }] icons optional; defaults will be used if not provided
 */
const WhyUse = ({ leftContent, reasons: reasonsProp }) => {
  const defaultReasons = [
    {
      icon: TargetIcon,
      title: "Precise Fee Calculations",
      description:
        "Real-time calculations based on current eBay fee structure including final value fees, listing fees, and optional upgrade costs.",
    },
    {
      icon: GlobeIcon,
      title: "Category-Specific Rates",
      description:
        "Different eBay categories have different fee structures. Get accurate calculations for electronics, fashion, collectibles, and more.",
    },
    {
      icon: BookIcon,
      title: "Global Selling Focus",
      description:
        "Calculate fees for international sales including currency conversion and cross-border transaction costs.",
    },
  ];

  // Merge provided reasons with default icons if icons are omitted
  const reasons = (reasonsProp && reasonsProp.length
    ? reasonsProp.map((r, i) => ({
        icon: r.icon || defaultReasons[i % defaultReasons.length].icon,
        title: r.title,
        description: r.description,
      }))
    : defaultReasons);

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="max-w-[1650px] mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="flex justify-center  sm:mb-10 md:mb-12 lg:mb-20">
          <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-[#232323] text-center">
            Why Use This Calculator?
          </h2>
        </div>

  {/* Content */}
  <div className="flex flex-col lg:flex-row w-full">
          {/* Left: Paragraph */}
          <div className="flex lg:block justify-center pl-0 lg:pl-[104px] xl:pl-[104px] ] pt-5 lg:pr-10  pr-0 ">
            <p className="text-gray-700 xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] font-normal leading-relaxed max-w-[34rem] text-center lg:text-left">
              {leftContent ?? (
                <>
                  {"Understanding eBay's fee"} <br />
                  {"structure is essential for pricing"} <br />
                  {"your products competitively"} <br />
                  {"while maintaining healthy profit"} <br />
                  {"margins. This calculator helps you"} <br />
                  {"plan better by showing the exact"} <br />
                  {"amount you'll receive after all"} <br />
                  {"eBay fees, PayPal processing fees,"} <br />
                  {"and international transaction"} <br />
                  {"costs are deducted. Make"} <br />
                  {"informed decisions about your"} <br />
                  {"global selling strategy."}
                </>
              )}
            </p>
          </div>

          {/* Right: Cards with dark accent rectangle behind */}
          <div className="relative flex-1 -mr-0 lg:-mr-8 mt-8 lg:mt-0 pr-3">
            {/* Accent rectangle (dark) */}
           <div className="flex justify-end">
             <div className="absolute mr-7 -top-2 right-0 h-8 sm:h-10 md:h-15 bg-[#0f172a] rounded-[2px] origin-left hidden lg:block w-[1000px] z-0 pointer-events-none py-5"  />
           </div>

  {/* Cards grid */}
  <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-start lg:justify-end gap-3 sm:gap-2 md:gap-4 lg:gap-4 w-full lg:w-[1000px] lg:ml-auto lg:mr-7 overflow-visible pb-2">
              {reasons.map((reason, index) => (
                <div
                  key={index}
          className="bg-[#1976e7] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col w-full md:w-[240px] lg:w-[300px] h-auto lg:h-[450px] mx-auto md:mx-0 md:shrink-0 gap-[20px]"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-5">
                    <img
                      src={reason.icon}
                      alt={reason.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-semibold text-lg sm:text-xl lg:text-[24px] text-center mb-2 sm:mb-3 md:mb-4 leading-tight">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-50/95 text-sm sm:text-base lg:text-[18px] leading-relaxed text-center">
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

export default WhyUse;