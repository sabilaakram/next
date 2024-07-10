import Card from '@/components/card';
import { Button } from '@/components/ui/button';
import Input from 'postcss/lib/input';
import React from 'react';
import { FaAt } from "react-icons/fa";

function Timeline() {
  return (
    <div className='bg-gray-100 md:pt-20 pt-16 '>
      <div className='md:pb-16'>
        <p className='text-center text-[#191f25] font-bold text-[30px]'>Cryption</p>
        <p className='text-center text-[#191f25] md:font-extralight font-light md:text-[50px] text-[40px]'>Timeline Discount</p>
      </div>
      <Card />
      <div className='bg-gradient-to-r from-[#0FB7A1] to-[#04DB8A] w-full h-72 mt-10 flex flex-col md:flex-row items-center p-10 justify-between'>
        <div className='bg-white border rounded-full w-24 h-24 self-center flex items-center justify-center'>
          <FaAt style={{ color: '#0FB7A1', width: '50%', height: '50%' }} />
        </div>
        <div >
            <p className='md:text-left text-center text-white font-light text-[25px] pl'>Keep up to date with our progress. <br/> Subscribe for e-mail updates.</p>
        </div>
        <div className='w-[400px] h-16 p-2 bg-white border rounded-full flex items-center'>
      <input 
        type="email" 
        placeholder="Your email address" 
        className="flex-grow h-full px-4 rounded-l-full outline-none"
        required
      />
      <Button className='px-8 py-4 font-bold bg-gradient-to-r from-[#0FB7A1] to-[#04DB8A] hover:bg-gradient-to-r hover:from-[#04DB8A] hover:to-[#0FB7A1] rounded-r-full'>
        Submit
      </Button>
    </div>
      </div>
    </div>
  );
}

export default Timeline;
