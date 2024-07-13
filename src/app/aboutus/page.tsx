"use client"
import { ButtonWithIcon } from '@/components/button'
import { ProgressBar } from '@/components/progressbar'
import { LucidePlay, LucideWatch } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <div id='aboutus'>
      <div>
        <p className='text-center text-[#191f25] font-bold text-[30px]'>Cryption</p>
        <p className='text-center text-[#191f25] md:font-extralight font-light md:text-[50px] text-[40px]'>Why choosing us</p>
      </div>
      <div className='grid md:grid-cols-[45%,45%] gap-5 md:gap-10 lg:gap-12 md:pt-20 pt-14 md:text-[15px] text-[12px] md:px-5 px-5 text-[#12232f] text-left items-center justify-center '>
        <div>
          Cryptoin is a blockchain-based marketplace, where buyers & sellers meet to carry out operations involving digital goods & assets with cryptocurrency transactions. The unique advantage here is an automatic matching of users, basing on an artificial intelligence approach. It is the first-ever artificial intelligence marketplace in the world, combining traditional and smart contract, blockchain, future-oriented ideas of connecting people and performing operations by analyzing user preferences. Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod.
        </div>
        <div className='gap-12 flex flex-col pt-10'>
          <ProgressBar value={75} leftText="Support countries" rightText="75%" color="#18D684" />
          <ProgressBar value={44} leftText="Operators" rightText="44%" color="#388C8D" />
          <ProgressBar value={62} leftText="Producers" rightText="62%" color="#017471" />
        </div>
      </div>
      <div className='relative w-full pt-[100px] md:pt-[450px]  '>
        <Image src="/globe.jpg" width={1000} height={1000} alt="aboutus" objectFit='cover' className='w-[150%] h-auto md:transform md:-translate-x-50' />
        <div className='absolute md:inset-5 inset-20 flex items-center justify-center flex-col md:gap-10 gap-2 md:pb-10 '>
          <Image src="/laptop.png" width={1000} height={1000} alt="aboutus" className='h-auto w-3/4 ' />
          <p className='text-center md:text-[30px] text-[12px] md:font-bold font-semibold text-white line-clamp'>How artificial intelligence & blockchain revolutionize the world of online marketplaces</p>
          <ButtonWithIcon text="Watch Video Now" icon={LucidePlay}  href="https://www.youtube.com/watch?v=0x0"/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
