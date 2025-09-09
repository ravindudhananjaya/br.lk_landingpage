import React from 'react'
import AmazonFBACalculator from './AmazonFBACaliculator'

const AmazonHero = () => {
  return (
    <div className='bg-[#f3ede6] py-12 flex flex-col'>
      <div className='flex flex-col justify-center items-center text-center px-4'> 
        <h1 className="text-4xl font-semibold mb-4 font-serif">Amazon FBA Fee Calculator</h1>
        <p className="text-black text-[18px] font-medium font-sans max-w-3xl mx-auto leading-relaxed">Calculate your Amazon selling profits with precision. Get accurate fee breakdowns for global marketplaces and make informed business decisions.</p>
        </div>
        <div className='flex justify-center p-[50px] lg:p-[120px] md:p-[80px] sm:p-[50px] mt-10'>
            <AmazonFBACalculator/>
        </div>
    </div>
  )
}

export default AmazonHero