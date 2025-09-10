import React from 'react'
import EbayCalculator from './EbayCalculator'

const EbayHero = () => {
  return (
    <div className='bg-[#f3ede6] py-12 flex flex-col'>
      <div className='flex flex-col justify-center items-center text-center px-4'> 
        <h1 className="md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight mb-4 font-serif">eBay Fee Calculator</h1>
        <p className="text-black text-[18px] font-medium font-sans max-w-3xl mx-auto leading-relaxed">Calculate exactly how much you'll pay in eBay fees and what you'll receive after selling your items. Perfect for Sri Lankan entrepreneurs looking to expand their business globally through eBay's marketplace.</p>
        </div>
        <div className='flex justify-center p-[50px] lg:p-[100px] md:p-[80px] sm:p-[50px] mt-10'>
            <EbayCalculator />
        </div>
    </div>
  )
}

export default EbayHero