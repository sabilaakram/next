import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

function Card() {
  return (
    <div className='flex flex-col md:flex-row md:gap-5 gap-5 items-center justify-center md:pb-16 pb-10'>
                <div className='grid md:grid-[25%,10%,10%,10%,20%] md:w-96 border border-gray-200 md:mt-[62px] bg-white'>
        <div className='bg-gray-300 md:p-6 p-4'>
            <p className='md:text-center text-center md:font-[800] md:text-[60px] text-[50px] text-gray-400'>-35%</p>
            <p className='md:text-center text-center md:font-[500] md:text-[15px] text-[20px] text-gray-400'>Round 1</p>
        </div>
        <Separator />
        <div className='text-gray-400 md:text-center text-center md:font-bold font-bold md:p-6 p-5'>Dec 1 – Jan 31</div>
        <Separator />
        <div className='md:p-6 p-5 flex md:flex items-center justify-center gap-2'>
            <p className='text-gray-400 md:text-center text-center md:font-bold font-bold'>1 CRN = 0.00014 BTC</p>
            <p className='text-gray-300 md:text-center text-center md:font-normal font-normal '>Token rate</p>
        </div>
        <Separator />
        <div className='md:p-6 p-5 flex md:flex items-center justify-center gap-2'>
            <p className='text-gray-400 md:text-center text-center md:font-bold font-bold'>12 500 000</p>
            <p className='text-gray-300 md:text-center text-center md:font-normal font-normal '>Hard Cap</p>
        </div>
        <Separator />
        <div className='flex items-center justify-center p-8'>
            <Button className='px-8 py-4 font-bold bg-gray-200 text-gray-400'>BUY NOW</Button>
        </div>
      
    </div>
        <div className='grid md:grid-[30%,15%,15%,15%,25%] md:w-96 border border-gray-200 bg-white'>
        <div className='bg-gradient-to-r from-[#0FB7A1] to-[#04DB8A] md:p-10 p-6'>
            <p className='md:text-center text-center md:font-[800] md:text-[80px] text-[50px] text-white'>-25%</p>
            <p className='md:text-center text-center md:font-[500] md:text-[15px] text-[20px] text-white'>Round 2</p>
        </div>
        <Separator />
        <div className='text-[#121822] md:text-center text-center md:font-bold font-bold md:p-6 p-5'>Feb 1 - Apr 14</div>
        <Separator />
        <div className='md:p-6 p-5 flex md:flex items-center justify-center gap-2'>
            <p className='text-[#121822] md:text-center text-center md:font-bold font-bold'>1 CRN = 0.00014 BTC</p>
            <p className='text-[#121822] md:text-center text-center md:font-normal font-normal '>Token rate</p>
        </div>
        <Separator />
        <div className='md:p-6 p-5 flex md:flex items-center justify-center gap-2'>
            <p className='text-[#121822] md:text-center text-center md:font-bold font-bold'>12 500 000</p>
            <p className='text-[#121822] md:text-center text-center md:font-normal font-normal '>Hard Cap</p>
        </div>
        <Separator />
        <div className='flex items-center justify-center p-8'>
            <Button className='px-8 py-4 font-bold bg-gradient-to-r from-[#0FB7A1] to-[#04DB8A] hover:bg-gradient-to-r hover:from-[#04DB8A] hover:to-[#0FB7A1]'>BUY NOW</Button>
        </div>
      
    </div>
    <div className='grid md:grid-[25%,10%,10%,10%,20%] md:w-96 border border-gray-200 md:mt-[62px] bg-white'>
        <div className='bg-gray-300 md:p-6 p-4'>
            <p className='md:text-center text-center md:font-[800] md:text-[60px] text-[50px] text-gray-900'>-15%</p>
            <p className='md:text-center text-center md:font-[500] md:text-[15px] text-[20px] text-gray-900'>Round 3</p>
        </div>
        <Separator />
        <div className='text-gray-900 md:text-center text-center md:font-bold font-bold md:p-6 p-5'>Jun 1 – Sep 15</div>
        <Separator />
        <div className='md:p-6 p-5 flex md:flex items-center justify-center gap-2'>
            <p className='text-gray-900 md:text-center text-center md:font-bold font-bold'>1 CRN = 0.00014 BTC</p>
            <p className='text-gray-800 md:text-center text-center md:font-normal font-normal '>Token rate</p>
        </div>
        <Separator />
        <div className='md:p-6 p-5 flex md:flex items-center justify-center gap-2'>
            <p className='text-gray-900 md:text-center text-center md:font-bold font-bold'>10 000 000</p>
            <p className='text-gray-800 md:text-center text-center md:font-normal font-normal '>Hard Cap</p>
        </div>
        <Separator />
        <div className='flex items-center justify-center p-8'>
            <Button className='px-8 py-4 font-bold bg-gray-200 text-gray-900'>COMING SOON</Button>
        </div>
      
    </div>

    </div>
  )
}

export default Card
