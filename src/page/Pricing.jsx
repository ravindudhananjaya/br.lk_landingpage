import React from 'react'
import Hero from '../components/pricing/Hero'
import WhyChooseCards from '../components/pricing/WhyChooseCards'
import PricingPackages from '../components/home/PricingPackages'
import QuestionsExpertise from '../components/home/QuestionsExpertise'
import LaunchBusinessHero from '../components/home/LaunchBusinessHero'
import Footer from '../components/home/Footer'
import Seo from '../components/Seo'
import Reveal from "../components/common/Reveal";

const Pricing = () => {
  return (
    <div>
        <Seo
          title="Pricing | BR.LK"
          description="Simple, transparent pricing for company registration and compliance services."
          url="https://br.lk/pricing"
          image="/br-white.svg"
        />

  <Hero />
  <Reveal variant="fade-up" threshold={0.15}><WhyChooseCards/></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={100}><PricingPackages /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={150}><QuestionsExpertise /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={200}><LaunchBusinessHero /></Reveal>
      <Footer />
    </div>
  )
}

export default Pricing