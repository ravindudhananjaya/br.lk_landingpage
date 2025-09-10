import React from "react";
import ceoImage from "../../assets/about/ceo.png";

const CEOVision = () => {
  return (
    <section className="bg-[#f3ede6] py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CEO Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={ceoImage} 
               
              />
            </div>
          </div>

          {/* CEO Vision Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-[#232323] mb-4">
                CEO's Vision
              </h2>
              <p className="text-[#1976e7] text-lg font-medium">
                Founder & Chief Executive Officer
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-[#1976e7] pl-6  p-6 rounded-r-lg">
              <blockquote className="text-gray-600 text-lg lg:text-xl font-medium leading-relaxed">
                <span className="font-bold text-4xl">"I</span> founded BR.LK with a simple yet powerful belief: every entrepreneur in 
                Sri Lanka should have the same opportunities as those in developed nations. 
                Our mission is to democratize global business access and help local talent 
                compete on the world stage."
              </blockquote>
            </div>

            {/* Description */}
            <div className="text-gray-600 text-base lg:text-lg leading-relaxed space-y-4">
              <p>
                Having experienced firsthand the challenges of international business 
                expansion, our CEO envisioned a platform that would eliminate 
                bureaucratic hurdles and provide comprehensive support for 
                entrepreneurs looking to establish their global presence.
              </p>
              <p>
                Today, BR.LK stands as a testament to that vision, helping hundreds of 
                businesses unlock their international potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOVision;