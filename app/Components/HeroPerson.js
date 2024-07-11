"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroPerson = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 1.5 }, // Start scale
      {
        scale: 1, // End scale
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top top", // When the top of the image hits the top of the viewport
          end: "bottom top", // When the bottom of the image hits the top of the viewport
          scrub: true, // Smooth scrubbing
        },
      }
    )
  }, [])

  return (
    <div className='mt-10 w-full h-[60vh] overflow-hidden sm:h-[90vh] bg-slate-500'>
      <img 
        ref={imgRef} 
        className='w-full h-full object-cover' 
        src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/6458a6db645ec6a527000cfa_home-hero-p-800.webp" 
        alt="Hero Image" 
      />
    </div>
  )
}

export default HeroPerson
