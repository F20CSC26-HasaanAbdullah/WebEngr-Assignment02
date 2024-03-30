
import React from 'react'
import { Navbar } from './component/Navbar'
import { Hero } from './component/Hero'
import { Features } from './component/Features'
import { Faq } from './component/Faq'
import { Cta } from './component/Cta'
import { Footer } from './component/Footer'
import { Pricing } from './component/Pricing'



function hello() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      
        <Features />
       
        <Faq />
        <Pricing />
        <Cta />
        <Footer />
      </div>

    </div>
  )
}

export default hello

