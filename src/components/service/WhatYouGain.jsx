import React from "react";
import stayInControlIcon from "../../assets/Services/stayincontrol.png";
import fastHassleIcon from "../../assets/Services/fasthassle.png";
import professionalIcon from "../../assets/Services/proffesionl.png";

const WhatYouGain = () => {
  return (
    <section className="bg-[#f3ede6] py-16 px-4 lg:px-8 ">
      <div className="max-w-[1450px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl lg:text-5xl text-[#232323]">
            What You Gain With Bookkeeping
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-20">
          {/* Stay in Control of Your Finances */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-3xl lg:text-4xl text-[#232323] leading-tight">
                Stay in Control of<br />
                Your Finances
              </h3>
              <p className="text-[#232323] text-lg leading-relaxed">
                At BR.LK, we believe bookkeeping shouldn't be a headache. Your accounts deserve to be clear, 
                organized, and up-to-date—not just at the end of the month, but every single day. That's why we 
                provide real-time bookkeeping support, giving you the financial visibility you need to make smarter 
                business decisions.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={stayInControlIcon} 
                alt="Stay in Control of Your Finances" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Fast & Hassle-Free Bookkeeping */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <img 
                src={fastHassleIcon} 
                alt="Fast & Hassle-Free Bookkeeping" 
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="font-serif font-bold text-3xl lg:text-4xl text-[#232323] leading-tight">
                Fast & Hassle-Free<br />
                Bookkeeping
              </h3>
              <p className="text-[#232323] text-lg leading-relaxed">
                No more drowning in receipts or chasing missing invoices. Simply send us your documents, and our 
                team will reconcile everything quickly and accurately. We'll even flag what's missing so you can 
                stay ahead—saving you hours of stress and unnecessary back-and-forth.
              </p>
            </div>
          </div>

          {/* Why Professional Bookkeeping Matters */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-3xl lg:text-4xl text-[#232323] leading-tight">
                Why Professional<br />
                Bookkeeping Matters
              </h3>
              <p className="text-[#232323] text-lg leading-relaxed">
                Outsourcing your bookkeeping isn't just about convenience—it's about accuracy, compliance, and 
                peace of mind. A professional ensures that your business avoids costly mistakes, stays tax-ready, 
                and remains financially healthy. With BR.LK, you can confidently focus on growing your business while we 
                handle the numbers.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={professionalIcon} 
                alt="Why Professional Bookkeeping Matters" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGain;