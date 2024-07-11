"use client"
import React from 'react'
import { AiFillCarryOut } from 'react-icons/ai'

const What = () => {
  return (
    <>
             <div>
                <div className='xl:grid sm:grid sm:grid-cols-2 md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 flex-col w-full px-5 py-5  '>
                      <div className='xl:w-[100%] sm:w-[90%]  w-full xl:p-10 p-0 flex border-black place-content-start sm:border-r-2 border-r-0 justify-between'>
                        <h1 className='text-3xl font-bold mb-5'>(What I Do)</h1>
                        <AiFillCarryOut className='text-3xl'  />
                      </div>
                      <div  className=' ml-0 sm:grid  xl:grid xl:grid-cols-2 sm:grid-cols-2 '>
                           <div className='xl:flex flex-col xl:p-5 p-0 gap-x-10 border-b-0 xl:border-b-0  border-hello border-black'>
                                 <div className='   border-b-2 py-5 border-black'>
                                    <h1 className='font-bold text-2xl'>Digital Design</h1>
                                    <p className='text-[#5E5D5E] text-lg'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                                 </div>
                                 <div className=' border-b-2 py-5 border-black'>
                                 <h1 className='font-bold text-2xl'>Digital Design</h1>
                                 <p className='text-[#5E5D5E] text-lg '>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                                 </div>
                           </div>
                           <div className='xl:flex flex-col xl:p-5 p-0 gap-x-10  border-hello border-black'>
                           <div className=' border-b-2 py-5 border-black'>
                                    <h1 className='font-bold text-2xl' >Digital Design</h1>
                                    <p className='text-[#5E5D5E] text-lg xl:px-4'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                                 </div>
                                 <div className=' border-b-2 py-5 border-black'>
                                 <h1 className='font-bold text-2xl'>Digital Design</h1>
                                 <p className='text-[#5E5D5E] text-lg'>I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                                 </div>
                           </div>
                      </div>
                </div>
             </div>
    </>
  )
}

export default What