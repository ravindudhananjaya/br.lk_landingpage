import React from "react";
import handPng from "../../assets/ok-hand.png";

const ArrowPill = () => (
  <span className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded-full bg-black">
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='M13 5l7 7-7 7'/%3E%3C/svg%3E" alt="arrow" className="w-3.5 h-3.5" />
  </span>
);

const CtaButton = ({ icon, label, href = "#" }) => (
  <a
    href={href}
    className="group inline-flex items-center justify-between gap-3 bg-white text-[#232323] rounded-xl px-5 py-4 shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
  >
    <span className="inline-flex items-center gap-3">
      {icon}
      <span className="font-serif text-base md:text-lg font-semibold">{label}</span>
    </span>
    <ArrowPill />
  </a>
);

const Help = () => {
  return (
    <section className="bg-[#f3ede6] py-12 md:py-16 flex flex-col ">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col items-center text-center gap-y-4">
        <div className="mb-3 flex justify-center">
          <img src={handPng} alt="Helping Hand" className="w-45 h-45 object-contain" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#232323] mb-6">
          Need a Helping Hand?
        </h2>

        {/* Buttons layout: two on first row, one centered below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full place-items-center">
          <CtaButton
            label="Business Guides"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#232323" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                <path d="M14 3v6h6" />
              </svg>
            }
          />
          <CtaButton
            label="Contact Support"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#232323" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              </svg>
            }
          />
          <div className="md:col-span-2 flex justify-center">
            <CtaButton
              label="Schedule Consultation"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#232323" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;