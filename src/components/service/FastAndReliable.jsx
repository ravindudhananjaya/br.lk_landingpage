import React from 'react'

const steps = [
  'Application Review (1–2 days)',
  'Document Verification (2–3 days)',
  'IRS Submission (Same day)',
  'IRS Processing (4–6 weeks)',
  'ITIN Approval & Delivery'
]

const FastAndReliable = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:gap-10 lg:gap-14 xl:gap-20 grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left content */}
          <div className=" lg:order-1">
            <h2 className="font-serif text-center md:text-left lg:text-left xl:text-left font-bold text-[30px] lg:text-[40px] xl:text-[42px] leading-[1.08] text-[#131a23] mb-6 sm:mb-8 lg:mb-12">
              <span className="block">Fast <span className="inline-block font-normal">&amp;</span> Reliable</span>
              <span className="block">Processing</span>
            </h2>
            <p className="text-[#232323] text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 lg:mb-14">
              Our streamlined process and expert team ensure your ITIN application is processed efficiently. We work diligently to
              minimize processing time while maintaining accuracy.
            </p>
            <div className=" flex items-center xs:items-start gap-6 xs:gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 justify-center xs:justify-start">
              <div className="space-y-1 sm:space-y-2 text-center xs:text-left">
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0061FE]">4–6</div>
                <div className="text-[#232323] text-xs sm:text-sm tracking-wide">Weeks Processing</div>
              </div>
              <div className="space-y-1 sm:space-y-2 text-center xs:text-left">
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0061FE]">95%</div>
                <div className="text-[#232323] text-xs sm:text-sm tracking-wide">Success Rate</div>
              </div>
              <div className="space-y-1 sm:space-y-2 text-center xs:text-left">
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0061FE]">24/7</div>
                <div className="text-[#232323] text-xs sm:text-sm tracking-wide">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right dark card */}
          <div className="w-full order-1 lg:order-2">
            <div className="bg-[#171d25] text-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 shadow-lg max-w-xl mx-auto lg:ml-auto">
              <ol className="space-y-5 sm:space-y-6 lg:space-y-8">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 sm:gap-4">
                    <span className="mt-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/70 flex-none" aria-hidden="true" />
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed font-light">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastAndReliable