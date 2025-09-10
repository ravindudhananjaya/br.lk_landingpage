import React from "react";
import heroImg from "../../assets/services-hero.png";

const Hero = () => {
  return (
    <section className="bg-[#f3ede6]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Image blob */}
          <div className="order-2 md:order-1">
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
          <div className="order-1 md:order-2">
            <h1 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-[#232323]/70 text-base md:text-lg leading-relaxed max-w-md">
              Comprehensive business solutions to establish, manage, and grow your
              company in Sri Lanka with confidence and compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;