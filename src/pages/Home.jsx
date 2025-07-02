import React from 'react'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import Reviews from '../components/Reviews'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Hero />
      <FAQ />
      <Reviews />
      <ContactSection />
    </div>
  )
}

export default Home