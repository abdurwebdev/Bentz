import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeroPerson from './Components/HeroPerson'
import AboutSection from './Components/AboutSection'
import What from './Components/What'

const page = () => {
  return (
    <div className='w-full h-[450vh] sm:h-[220vh] p-5 bg-[#F5F3EF]'>
      <Navbar/>
      <Hero/>
      <HeroPerson/>
      <AboutSection/>
      <What/>
    </div>
  )
}

export default page