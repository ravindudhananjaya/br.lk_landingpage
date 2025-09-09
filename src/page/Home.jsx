import React from "react";
import Hero from "../components/home/Hero";
import WhyChooseCards from "../components/home/WhyChooseCards";
import WhyTrustUs from "../components/home/WhyTrustUs";
import ThreeSteps from "../components/home/ThreeSteps";
import SolutionsGrid from "../components/home/SolutionsGrid";
import PricingPackages from "../components/home/PricingPackages";
import QuestionsExpertise from "../components/home/QuestionsExpertise";
import LaunchBusinessHero from "../components/home/LaunchBusinessHero";
import Footer from "../components/home/Footer";
import TestimonialCarousel from "../components/home/TestimonialCarousel";
import Seo from "../components/Seo";
import Reveal from "../components/common/Reveal";


const Home = () => {
  return (
    <div>
      <Seo
        title="BR.LK — Business Registration Made Simple"
        description="Register your company fast with transparent pricing, expert guidance, and 100% compliant setup for UK & USA presence."
        url="https://br.lk/"
        image="/br-white.svg"
      />
    
<Hero />
  <Reveal variant="fade-up" threshold={0.15}><WhyChooseCards /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={100}><WhyTrustUs /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={150}><ThreeSteps /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={200}><SolutionsGrid /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={250}><PricingPackages /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={300}><QuestionsExpertise /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={350}><TestimonialCarousel /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={400}><LaunchBusinessHero /></Reveal>
  <Footer />
    </div>
  );
};

export default Home;
