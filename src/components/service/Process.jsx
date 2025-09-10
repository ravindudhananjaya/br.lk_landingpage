import React from 'react'
import bg from '../../assets/servicebg.png'

const defaultSteps = [
  {
    title: 'Complete Online Form',
    description:
      'Easily provide the required information about yourself and your tax situation. Our team assists you at every step to ensure accuracy and completeness.',
  },
  {
    title: 'Submit Your Application',
    description:
      'BR.LK submits your completed Form W-7 application to the IRS, ensuring all documentation is in order for fast processing and approval.',
  },
  {
    title: 'Receive Your ITIN',
    description:
      'After approval, receive your ITIN letter from the IRS, ready for use in tax filing, banking, and other financial needs in the United States.',
  },

]

const Process = ({ steps = defaultSteps }) => {
  return (
    <section className="w-full bg-[#FFFDFA] flex flex-col items-center pt-10 px-4">
      {/* Heading */}
      <div className="max-w-5xl w-full flex flex-col items-center text-center  sm:mb-2 md:mb-6">
        <h2 className="font-serif font-bold text-[30px]  lg:text-[40px]   text-[#232323]">
          The Process Explained
        </h2>
        <p className="mt-5 sm:mt-10 text-xs sm:text-sm md:text-base text-[#232323]/70">
          With the dedicated support of BR.LK, obtaining your ITIN becomes a smooth and<br/> efficient experience. Our experts handle the intricate details so you can focus on what<br/> matters most.
        </p>
      </div>

  {/* Canvas with overlayed steps, arrows and background image */}
  <div className="relative w-full max-w-5xl flex justify-center h-[560px] sm:h-[620px] md:h-[760px] lg:h-[920px] xl:h-[1000px]">
        {/* Background graphic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <img
            src={bg}
            alt=""
            draggable="false"
            className="w-[520px] sm:w-[600px] md:w-[720px] lg:w-[800px] xl:w-[880px] opacity-[0.4]"/>
        </div>
        

        {/* Mobile stacked steps overlayed on the background */}
        <div className="md:hidden absolute  mt-10 flex items-center justify-center px-4">
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
            <div class="flex flex-col justify-center text-[#0061FE] text-center font-['Inknut_Antiqua'] text-[48px] font-medium leading-none">
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
            <div className="flex  flex-col justify-center text-[#0061FE] text-center font-['Inknut_Antiqua'] text-[48px] font-medium leading-none">
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
            <div className="flex items-center  flex-col justify-center text-[#0061FE] text-center font-['Inknut_Antiqua'] text-[48px] font-medium leading-none ">
              3
            </div>
            <div className="mt-1 pt-4 flex flex-col gap-[18px]">
              <h3 className="font-serif font-semibold text-base lg:text-lg text-[#232323] text-center">
        {steps[2]?.title || defaultSteps[2].title}
              </h3>
              <p className="mt-1 text-xs lg:text-sm xl:text-[18px] text-[#232323]/80 leading-relaxed text-center">
        {steps[2]?.description || defaultSteps[2].description}
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

             
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
