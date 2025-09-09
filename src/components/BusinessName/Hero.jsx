import React from 'react'

import NameGenerator from './NameGenerator'

const Hero = () => {
  return (
    <div className='bg-[#f3ede6] py-12 flex flex-col'>
      <div className='flex flex-col justify-center items-center text-center px-4'> 
        <h1 className="text-4xl font-semibold mb-4 font-serif">Create Your Perfect Business Name</h1>
        <p className="text-black text-[18px] font-medium font-sans max-w-3xl mx-auto leading-relaxed">Generate unique, memorable business names for your Sri Lankan venture. Get domain availability and expert suggestions instantly.</p>
        </div>
        <div className='flex justify-center p-[50px] lg:p-[100px] md:p-[80px] sm:p-[50px] mt-10'>
            <NameGenerator/>
        </div>
    </div>
  )
}

export default Hero