import React from "react";
import heroImg from "../../assets/pricing-hero.png";

const Hero = () => {
return (
    <>
        <section className="bg-[#f3ede6]">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16  ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                    {/* Image blob */}
                    <div className="order-2 md:order-2">
                        <div className="relative w-full aspect-[5/3] md:aspect-[4/3] lg:aspect-[16/10]">
                            {/* Clipped image */}
                            <div
                                className=" inset-0 overflow-hidden"
                                style={{ clipPath: "ellipse(90% 90% )" }}
                            >
                                <img
                                    src={heroImg}
                                    alt="Two professionals discussing services"
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="order-1 md:order-1 ">
                        <h1 className="font-serif font-semibold text-[#232323] text-3xl md:text-5xl mb-4 md:mb-6">
                            Simple, Transparent Pricing
                        </h1>
                        <div className="">
                            <p className="text-[#232323]/70 text-base md:text-lg leading-relaxed max-w-md mb-6">
                                Choose the perfect plan to launch your global business empire. No hidden fees, no surprises - just straightforward pricing that scales with your success.
                            </p>
                            <button className="bg-[#222c36] text-white rounded-full px-6 py-2 font-medium ml-4 hover:bg-[#1a202c] transition flex items-center gap-2 font-serif">
                                Get Started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12h14m-7 7 7-7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Floating stats cards */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 -mt-8 md:-mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="rounded-2xl bg-[#EAF2FF] border border-[#DDE8FF] shadow-sm p-4 md:p-6 text-center">
                    <div className="text-[#1f4ed8] font-serif font-semibold text-2xl md:text-3xl">500+</div>
                    <div className="text-[#232323]/60 text-xs md:text-sm mt-1">Companies Registered</div>
                </div>
                <div className="rounded-2xl bg-[#EAF2FF] border border-[#DDE8FF] shadow-sm p-4 md:p-6 text-center">
                    <div className="text-[#1f4ed8] font-serif font-semibold text-2xl md:text-3xl">50+</div>
                    <div className="text-[#232323]/60 text-xs md:text-sm mt-1">Countries Served</div>
                </div>
                <div className="rounded-2xl bg-[#EAF2FF] border border-[#DDE8FF] shadow-sm p-4 md:p-6 text-center">
                    <div className="text-[#1f4ed8] font-serif font-semibold text-2xl md:text-3xl">98%</div>
                    <div className="text-[#232323]/60 text-xs md:text-sm mt-1">Success Rate</div>
                </div>
                <div className="rounded-2xl bg-[#EAF2FF] border border-[#DDE8FF] shadow-sm p-4 md:p-6 text-center">
                    <div className="text-[#1f4ed8] font-serif font-semibold text-2xl md:text-3xl">24/7</div>
                    <div className="text-[#232323]/60 text-xs md:text-sm mt-1">Support Available</div>
                </div>
            </div>
        </div>
    </>
);
};

export default Hero;