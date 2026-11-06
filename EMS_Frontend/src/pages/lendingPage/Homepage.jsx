import React from 'react'
import Loader from '@/components/ui/loader'
import Navbar from './navbar'
import HeroSection from './Hero'
import AboutSection from './About'
import FeaturesSection from './feature'
import TestimonialsSection from './testremonial'
import Footer from './footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default Homepage