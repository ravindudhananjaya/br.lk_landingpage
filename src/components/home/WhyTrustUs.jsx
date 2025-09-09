import React from "react";

const WhyTrustUs = () => (
  <section className="bg-white flex flex-col items-center py-12 px-4">
    <h2 className="font-serif font-bold text-3xl md:text-5xl text-center mb-3 text-[#232323] leading-snug">
      Why Sri Lankans Trust Us<br className="hidden md:block " /> to Go Global
    </h2>
    <p className="text-[#6d7b92] text-center text-base md:text-lg max-w-2xl mx-auto mb-10 ">
      We specialize in helping Sri Lankan entrepreneurs expand internationally with
      speed, reliability, and tailored support every step of the way.
    </p>
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/H9dhgf7t9z8?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1"
            title="Why Sri Lankans Trust Us to Go Global"
            frameBorder="0"
            loading="lazy"
            allow="encrypted-media; picture-in-picture; clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhyTrustUs;