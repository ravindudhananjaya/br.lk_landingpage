import React from 'react'


const Hero = () => {
  return (
    <div className='bg-[#f3ede6] py-12 flex flex-col'>
      <div className='flex flex-col justify-center items-center text-center px-4'> 
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-serif">Business Activity HSIC Code Search</h1>
        <p className="text-black text-[18px] font-medium font-sans max-w-3xl mx-auto leading-relaxed">Hong Kong Standard Industrial Classification (HSIC) codes are used to indicate your company's major business activities. Every Hong Kong company must choose an HSIC code, which the Census and Statistics Department will use in the compilation, analysis and dissemination of industry statistics.</p>
        </div>
        <div className='flex justify-center mt-10 w-full px-4'>
          <div className='w-full max-w-6xl'>
           <div className='flex p-[50px] flex-col justify-end items-center gap-[50px] rounded-[24px] bg-[#FFFDFA] w-full'>
              <div className='relative w-full'>
                <svg
                  className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#667085]'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path d='M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z' stroke='currentColor' strokeWidth='2' />
                  <path d='M21 21l-3.5-3.5' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
                </svg>
                <input
                  type="text"
                  placeholder='Enter a keyword or HSIC code number'
                  aria-label='Search HSIC by business activity'
                  className='w-full h-[50px] pl-4 pr-11 py-[10px] rounded-[8px] border border-[#C0C9D3] placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#1976e7]/30'
                />
              </div>
              <div><p className='text-[#212833] text-center font-sans font-medium text-[14px]  leading-[150%]'>Use our free search to find the code that best describes your business activities.</p></div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Hero