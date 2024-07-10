
import Image from 'next/image'
import React from 'react'
import Text from '@/components/text'

function Tokens() {
  return (
    <div>
      <div className='md:pt-10 pt-8'>
        <p className='text-center text-[#191f25] font-bold text-[30px]'>Our Tokens</p>
        <p className='text-center text-[#191f25] md:font-extralight font-light md:text-[50px] text-[40px]'>What is Cryption Coins?</p>
      </div>
      <div className='md:pt-20 md:pb-20 pt-14 md:px-20 md:text-[24px] text-[16px] md:font-light  px-5 text-[#191f25] text-center items-center justify-center '>
        Cryption Coin is a token, based on the Ethereum blockchain technology. It is the core asset of the new Cryption Marketplace.
    </div>
    <div className='grid md:grid-cols-[25%,50%,25%] md:gap-2 md:p-10 p-5 md:pb-28'>
    <div className='md:space-y-10 space-y-10'>
    <Text nums={'01'} title={'Without blockchain fluctuations'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.'}/>
            <Text nums={'02'} title={'No Transaction fees'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.'}/>

        </div>
        <div className='hidden md:block'>
            <Image src='/token.png' alt='tokens' width={1000} height={1000}/>
        </div>
        <div className='md:space-y-14 hidden md:block'>
            <Text reverse={true}  nums={'03'} title={'Protects the identity'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.'}/>
            <Text reverse={true} nums={'04'} title={'Instant Operations'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.'}/>
        </div>
        <div className=' space-y-10 pt-10 md:hidden'>
        <Text  nums={'03'} title={'Protects the identity'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.'}/>
        <Text nums={'04'} title={'Instant Operations'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.'}/>
        </div>
    </div>
    </div>
  )
}

export default Tokens
