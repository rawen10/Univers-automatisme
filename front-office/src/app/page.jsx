import React from 'react'
import "../styles/globals.css"
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Reviews from '@/components/Reviews'
import Cta from '@/components/Cta'
import Partnaires from '@/components/Partnaires'
import Stars from '@/components/Stars'
const page = () => {
  return (
    <div className=''>
     <Hero/>
     <About/>
     <Services/>
     <Work/>
     <Reviews/>
     {/* <Stars/> */}
     <Partnaires/>
    
     <Cta/>
    </div>
  )
}

export default page