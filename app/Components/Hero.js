"use client"
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='px-10 sm:px-14 '>
        <h1 className='font-bold  text-[10vw] sm:tracking-tighter leading-[45px] sm:leading-none text-[#1E1E21]'>Bent Lindberg <br />
        Digital Designer</h1>
        <div className='flex items-center justify-between mt-10'>
               <h1 className='font-bold sm:text-2xl'>(Berlin, Germany)</h1>
               <button className=' gap-x-4 hidden sm:flex  items-center font-bold text-2xl animate-bounce'><AiOutlineDown />Scroll Down</button>
        </div>
    </div>
  )
}

export default Hero