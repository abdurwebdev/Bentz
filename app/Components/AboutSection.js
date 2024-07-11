"use client"
import React from 'react'
import { AiFillTwitterCircle, AiOutlineGlobal, AiOutlineInstagram } from 'react-icons/ai'

const AboutSection = () => {
  return (
    <div className='py-4 lg:border-b-2 border-b-0 border-[80%]  border-[#1E1E21] flex flex-col place-items-start justify-start md:flex-row'>
        <div className='order-2  md:ml-14 md:w-[40%]  '>
        <h1 className='text-2xl font-bold md:py-20  '>(About Me )</h1>
        <div className='flex gap-x-3 items-center  md:mt-30 justify-center md:justify-start mt-5 text-[#F5F3EF]'>
            <AiOutlineInstagram className='px-3 py-3 bg-[#1E1E21] border rounded-full text-5xl'/>
            <AiFillTwitterCircle className='px-3 py-3 bg-[#1E1E21] border rounded-full text-5xl'/>
            <AiOutlineGlobal className='px-3 py-3 bg-[#1E1E21] border rounded-full text-5xl'/>
        </div>
        </div>
        <div className='mt-5 order-1 md:w-[60%] md:border-b-0 border-b-0 md:border-r-2   font-bold text-5xl text-[#1E1E21]  border-[#1E1E21] py-10'>
               <h1>As a digital designer, I focus on producing top-notch and impactful digital experiences.</h1>
        </div>
    </div>
  )
}

export default AboutSection