import HeroSection from "../components/service/HeroSection";
import HowWeWork from "../components/service/HowWeWork";
import BookConsultation from "../components/service/BookConsultation";
import WhatYouGain from "../components/service/WhatYouGain";
import Footer from "../components/home/Footer";
import LaunchBusinessHero from "../components/home/LaunchBusinessHero";
import EverythingOnePlace from "../components/service/EverythingOnePlace";
import Seo from "../components/Seo";
import Reveal from "../components/common/Reveal";
const Service = () => {
  return (
    <div>
      <Seo
                      title="Service | BR.LK"
                      description="Learn more about our mission, vision, and the team behind BR.LK."
                      url="https://br.lk/service"
                      image="/br-white.svg"
                    />
      
  <HeroSection />
  <Reveal variant="fade-up" threshold={0.15}><HowWeWork /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={100}><BookConsultation /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={150}><WhatYouGain /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={200}><EverythingOnePlace /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={250}><LaunchBusinessHero /></Reveal>
      
      <Footer />
    </div>
  );
};

export default Service;