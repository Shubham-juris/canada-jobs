import React from 'react'
import Hero from '../Home/Hero'

import StatsSection from '../Home/StatsSection'
import JobSearchSection from '../Home/JobSearchSection'
import PopularIndustries from '../Home/PopularIndustries'
import CTASection from '../Home/CTASection'

const Homecontainer = () => {
  return (
   <>
  
   <Hero/>
      <StatsSection/>
      <JobSearchSection/>
      <PopularIndustries/>
      <CTASection/>
   </>
  )
}

export default Homecontainer
