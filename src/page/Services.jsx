import React from 'react' 
import Hero from '../components/services/Hero'
import SolutionsGrid from '../components/home/SolutionsGrid'
import Partners from '../components/services/Partners'
import Help from '../components/services/help'
import LaunchBusinessHero from '../components/home/LaunchBusinessHero'
import Footer from '../components/home/Footer'
import QuestionsExpertise from '../components/home/QuestionsExpertise'
import Seo from '../components/Seo'
import Reveal from "../components/common/Reveal";

const Services = () => {
  return (
    <div>
        <Seo
          title="Services | BR.LK"
          description="Company formation, compliance, and business support services tailored for international entrepreneurs."
          url="https://br.lk/services"
          image="/br-white.svg"
        />
        <Hero />
        <Reveal variant="fade-up" threshold={0.15}><SolutionsGrid /></Reveal>
        <Reveal variant="fade-up" threshold={0.15} delay={100}><Partners /></Reveal>
        <Reveal variant="fade-up" threshold={0.15} delay={150}><Help /></Reveal>
        <Reveal variant="fade-up" threshold={0.15} delay={200}><QuestionsExpertise /></Reveal>
        <Reveal variant="fade-up" threshold={0.15} delay={250}><LaunchBusinessHero /></Reveal>
        <Footer />
    </div>
  )
}

export default Services