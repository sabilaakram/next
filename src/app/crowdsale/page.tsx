"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import TokenDistributionChart from './components/fundchart/page'
import FundingAllocationChart from './components/tokenchart/page'

function Crowdsale() {
  return (
    <div className='grid lg:grid-cols-[30%,70%] md:grid-rows lg:mx-10 mx-5 lg:mt-20 mt-10 lg:mb-20 mb-10 gap-5'>
      <div className='lg:grid md:grid-cols-1 gap-7'>
        <p className='lg:font-light font-normal lg:text-[15px] text-[12px] text-slate-500 font-Montserrat'>
          Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='lg:font-bold font-bold lg:text-[15px] text-[12px] text-black font-Montserrat'>
          In order to make CRN token distribution process more efficient, the CRN price will now be linked to BTC:
        </p>
        <p className='lg:font-bold font-bold lg:text-[30px] text-[20px] text-slate-900 font-Montserrat'>
          1 CRN = 0.00014 BTC
        </p>
        <Button className='lg:font-bold font-bold lg:text-[20px] text-[15px] text-white font-Montserrat bg-gradient-to-r from-[#0FB7A1] to-[#04DB8A] lg:px-8 px-2 lg:py-6 py-5'>
          BUY TOKENS -25% OFF
        </Button>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-rows gap-5'>
        <div>
          <p className='lg:font-bold font-bold lg:text-[30px] text-[20px] text-slate-900 font-Montserrat text-center'>
            Fund distribution
          </p>
          <FundingAllocationChart />
        </div>
        <div>
          <p className='lg:font-bold font-bold lg:text-[30px] text-[20px] text-slate-900 font-Montserrat text-center'>
            Token distribution
          </p>
          <TokenDistributionChart />
        </div>
      </div>
    </div>
  )
}

export default Crowdsale
