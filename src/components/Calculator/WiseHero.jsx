import React from 'react'

import WiseCalculator from './WiseCalculator'

const WiseHero = () => {
  return (
    <div className='bg-[#f3ede6] py-12 flex flex-col'>
      <div className='flex flex-col justify-center items-center text-center px-4'> 
        <h1 className="text-4xl font-semibold mb-4 font-serif">Wise Fee Calculator</h1>
        <p className="text-black text-[18px] font-medium font-sans max-w-3xl mx-auto leading-relaxed">Calculate exactly how much you'll pay to send money from Sri Lanka abroad using<br/> Wise. Get transparent, upfront pricing with no hidden costs.</p>
        </div>
        <div className='flex justify-center p-[50px] lg:p-[100px] md:p-[80px] sm:p-[50px] mt-10'>
            <WiseCalculator />
        </div>
    </div>
  )
}

export default WiseHero