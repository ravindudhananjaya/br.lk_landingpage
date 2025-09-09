import AboutHero from "../components/About/AboutHero";
import OurStory from "../components/About/OurStory";
import CEOVision from "../components/About/CEOVision";
import WhatWeDo from "../components/About/WhatWeDo";
import CoreValues from "../components/About/CoreValues";
import WhyChoose from "../components/About/WhyChoose";
import LaunchBusinessHero from "../components/home/LaunchBusinessHero";
import Footer from "../components/home/Footer";
import Seo from "../components/Seo";
import Reveal from "../components/common/Reveal";

const About = () => {
  return (
    <div>
      <Seo
                title="About Us | BR.LK"
                description="Learn more about our mission, vision, and the team behind BR.LK."
                url="https://br.lk/about"
                image="/br-white.svg"
              />
  <AboutHero />
  <Reveal variant="fade-up" threshold={0.15}><OurStory /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={100}><CEOVision /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={150}><WhatWeDo /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={200}><CoreValues /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={250}><WhyChoose /></Reveal>
  <Reveal variant="fade-up" threshold={0.15} delay={300}><LaunchBusinessHero /></Reveal>
      <Footer />
    </div>
  );
};

export default About;
