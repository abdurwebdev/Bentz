"use client"
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='flex h-14    text-[#F5F3EF] gap-x-3 font-bold items-center justify-end '>
        <button className='border-2 text-xl bg-[#1E1E21] border-black px-4 py-2 rounded-full'>0</button>
        <button className='border-2 text-xl bg-[#1E1E21] border-black px-3 py-3 sm:px-5 rounded-full'><AiOutlineMenu className='sm:hidden'/><h1 className='hidden text-base sm:block'>MENU</h1></button> 
    </div>
  )
}

export default Navbar