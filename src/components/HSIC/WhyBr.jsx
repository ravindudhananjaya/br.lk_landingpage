import React from 'react'

const defaultSteps = [
  {
    title: 'Choose an HSIC Business Code',
    description:
      'We check your HSIC code with Census and Statistics Department in seconds and help you to proceed with the incorporation process.',
  },
  {
    title: 'Provide us with the documents',
    description:
      'We handle the application with the authorities and send it back for your electronic signature.',
  },
  {
    title: 'Incorporate your company',
    description:
      'We do KYC and company incorporation remotely. Your business is typically registered in less than three business days.',
  },
  {
    title: 'Open a business bank account',
    description:
      'We link you up with our local network of neobanks and traditional banks and fast-track your application.',
  },
]

const WhyBr = ({ steps = defaultSteps }) => {
  return (
    <section className="w-full bg-[#f3ede6] flex flex-col items-center py-10 sm:py-12 md:py-16 px-4">
      {/* Heading */}
      <div className="max-w-5xl w-full flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#232323]">
          Taking Action
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#232323]/70">
          Steps After Finding Your Perfect Name
        </p>
      </div>

  {/* Canvas with overlayed steps and arrows (no background) */}
  <div className="relative w-full max-w-5xl flex justify-center h-[560px] sm:h-[620px] md:h-[760px] lg:h-[920px] xl:h-[1000px]">
        

        {/* Mobile stacked steps overlayed on the background */}
        <div className="md:hidden absolute inset-0 z-10 flex items-center justify-center px-4">
          <ol className="w-full max-w-3xl space-y-6 text-center">
            {steps.map((step, idx) => (
              <li className="flex gap-4" key={idx}>
                <div className="text-[#1976e7] font-serif font-bold text-xl pt-1">{idx + 1}</div>
                <div>
                  <h3 className="font-serif font-semibold text-base text-[#232323]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[#232323]/80 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Overlayed steps and arrows for desktop */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
      {/* Step 1 */}
          <div className="absolute left-[0%] top-[3%] max-w-xs flex flex-col gap-[29px]">
            <div className="flex w-full justify-center items-center text-[#0061FE] text-center font-['Inknut_Antiqua'] md:text-[120px] lg:text-[160px] xl:text-[180px] font-medium leading-none opacity-50">
              1
            </div>
            <div className="mt-1 flex flex-col gap-[18px]">
              <h3 className="font-serif font-semibold text-base lg:text-lg text-[#232323] text-center">
        {steps[0]?.title || defaultSteps[0].title}
              </h3>
              <p className="mt-1 text-xs lg:text-sm xl:text-[18px] text-[#232323]/80 leading-relaxed text-center">
        {steps[0]?.description || defaultSteps[0].description}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="absolute right-[2%] top-[14%] max-w-xs flex flex-col gap-[29px]">
            <div className="flex w-full justify-center items-center text-[#0061FE] text-center font-['Inknut_Antiqua'] md:text-[120px] lg:text-[160px] xl:text-[180px] font-medium leading-none opacity-50">
              2
            </div>
            <div className="mt-1 flex flex-col gap-[18px]">
              <h3 className="font-serif font-semibold text-base lg:text-lg text-[#232323] text-center">
        {steps[1]?.title || defaultSteps[1].title}
              </h3>
              <p className="mt-1 text-xs lg:text-sm xl:text-[18px] text-[#232323]/80 leading-relaxed text-center">
        {steps[1]?.description || defaultSteps[1].description}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="absolute left-[0%] bottom-[14%] max-w-xs flex flex-col gap-[29px]">
            <div className="flex w-full justify-center items-center text-[#0061FE] text-center font-['Inknut_Antiqua'] md:text-[120px] lg:text-[160px] xl:text-[180px] font-medium leading-none opacity-50 pb-2">
              3
            </div>
            <div className="mt-1 flex flex-col gap-[18px]">
              <h3 className="font-serif font-semibold text-base lg:text-lg text-[#232323] text-center">
        {steps[2]?.title || defaultSteps[2].title}
              </h3>
              <p className="mt-1 text-xs lg:text-sm xl:text-[18px] text-[#232323]/80 leading-relaxed text-center">
        {steps[2]?.description || defaultSteps[2].description}
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="absolute right-[0%] bottom-[4%] max-w-xs flex flex-col gap-[29px]">
            <div className="flex w-full justify-center items-center text-[#0061FE] text-center font-['Inknut_Antiqua'] md:text-[120px] lg:text-[160px] xl:text-[180px] font-medium leading-none opacity-50">
              4
            </div>
            <div className="mt-1 flex flex-col gap-[18px]">
              <h3 className="font-serif font-semibold text-base lg:text-lg text-[#232323] text-center">
        {steps[3]?.title || defaultSteps[3].title}
              </h3>
              <p className="mt-1 text-xs lg:text-sm xl:text-[18px] text-[#232323]/80 leading-relaxed text-center">
        {steps[3]?.description || defaultSteps[3].description}
              </p>
            </div>
          </div>

          {/* Curved dashed arrows */}
          <div className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8 xl:inset-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="arrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 8 3, 0 6" fill="#232323" />
                </marker>
              </defs>

              {/* 1 -> 2 */}
              <path
                d="M 400 200 C 500 150, 550 200, 600 250"
                fill="none"
                stroke="#232323"
                strokeWidth="2.2"
                strokeDasharray="6 8"
                markerEnd="url(#arrow)"
              />

              {/* 2 -> 3 */}
              <path
                d="M 600 460 C 590 490, 500 660, 380 640"
                fill="none"
                stroke="#232323"
                strokeWidth="2.2"
                strokeDasharray="6 8"
                markerEnd="url(#arrow)"
              />

              {/* 3 -> 4 */}
              <path
                d="M 390 800 C 400 820, 500 900, 600 880"
                fill="none"
                stroke="#232323"
                strokeWidth="2.2"
                strokeDasharray="6 8"
                markerEnd="url(#arrow)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBr
