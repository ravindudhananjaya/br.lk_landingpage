import React from 'react'
import BusinessSolutionsUI from '../components/resources/ComprehensiveSolutions'
import Hero from '../components/resources/Hero'
import Partners from '../components/services/Partners'
import Help from '../components/services/help'
import QuestionsExpertise from '../components/home/QuestionsExpertise'
import LaunchBusinessHero from '../components/home/LaunchBusinessHero'
import Footer from '../components/home/Footer'
import Seo from '../components/Seo'
import Reveal from "../components/common/Reveal";

const Resources = () => {
  return (
    <div>
        <Seo
          title="Resources | BR.LK"
          description="Tools, guides, and insights to plan, start, and grow your business in Sri Lanka."
          url="https://br.lk/resources"
          image="/br-white.svg"
        />
  <Hero/>
  <Reveal variant="fade-up" threshold={0.15}><BusinessSolutionsUI /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={100}><Partners/></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={150}><Help/></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={200}><QuestionsExpertise /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={250}><LaunchBusinessHero /></Reveal>
      <Footer />

    </div>
  )
}

export default Resources