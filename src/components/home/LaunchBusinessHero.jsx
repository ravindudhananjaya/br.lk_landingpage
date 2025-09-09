import React from "react";
import launchImg from "../../assets/launch.png";

const LaunchBusinessHero = () => (
  <section className="w-full bg-white flex flex-col md:flex-row items-stretch min-h-[660px] relative overflow-hidden">
    {/* Left Side: Text */}
    <div className="flex-1 flex flex-col justify-center items-center px-6 py-14 z-10">
      <h1 className="font-serif text-[#232323] text-3xl md:text-5xl font-bold mb-6 text-center leading-tight align-middle">
        Launch Your Business<br />Without Borders
      </h1>
      <p className="text-[#232323] text-base md:text-lg mb-8 max-w-lg text-center">
        Join thousands of Sri Lankan entrepreneurs who’ve taken their first step into global markets with BR.LK.<br />
        Register your UK or USA company seamlessly, unlock PayPal, Wise, and international banking, and enjoy tax-friendly opportunities – empowering you to build a business that grows worldwide.
      </p>
      <div className="flex justify-center w-full">
        <button className="bg-[#232323] text-white font-medium text-base px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#444] transition-colors font-serif">
          Get Started Today
          <span className="ml-2 text-xl">→</span>
        </button>
      </div>
    </div>
    {/* Right Side: Image */}
    <div className="flex-1 flex items-end justify-end relative min-h-[300px]">
      <img
        src={launchImg}
        alt="Launch your business"
        className="w-full h-full  object-center md:rounded-none rounded-b-2xl "
        draggable={false}
        style={{
          maxHeight: 710,
          minHeight: 320,
          minWidth: 270,
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        }}
      />
    </div>
  </section>
);

export default LaunchBusinessHero;