import React from 'react'
import PaypalCalculator from './PaypalCalculator'

const PaypalHero = () => {
  return (
    <div className='bg-[#f3ede6] py-12 flex flex-col'>
        <div className='flex  flex-col justify-center items-center'> 
            <h1 className="md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight mb-4 font-serif">PayPal Fee Calculator</h1>
            <p className="text-gray-600 text-center text-[18px] font-medium font-sans self-center">Calculate exactly how much you'll pay in PayPal fees and what you'll receive after<br/> transactions. Perfect for Sri Lankan businesses selling globally or receiving<br/>international payments.</p>
        </div>
        <div className='flex justify-center p-[50px] lg:p-[100px] md:p-[80px] sm:p-[50px]  mt-10'>
            <PaypalCalculator />
        </div>
    </div>
  )
}

export default PaypalHero