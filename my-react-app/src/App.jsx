import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Home/Hero'
import Navbar from './Common/Navbar'
import StatsSection from './Home/StatsSection'
import JobSearchSection from './Home/JobSearchSection'
import PopularIndustries from './Home/PopularIndustries'
import CTASection from './Home/CTASection'
import Footer from './Common/Footer'

function App() {
  
  return (
    <>
    <Navbar/>
      <Hero/>
      <StatsSection/>
      <JobSearchSection/>
      <PopularIndustries/>
      <CTASection/>
      <Footer/>
    </>
  )
}

export default App
