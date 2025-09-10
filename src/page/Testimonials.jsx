import React from 'react'
import Hero from '../components/Testimonials/Hero'
import TestimonialContent from '../components/Testimonials/TestimonialContent'
import Footer from '../components/home/Footer'
import Seo from '../components/Seo'
import Reveal from "../components/common/Reveal";

const Testimonials = () => {
  return (
    <div>
        <Seo
                            title="Testimonials | BR.LK"
                            description="Read what our satisfied clients have to say about our services."
                            url="https://br.lk/testimonials"
                            image="/br-white.svg"
                          />
  <Hero/>
  <Reveal variant="fade-up" threshold={0.15}><TestimonialContent/></Reveal>
        <Footer/>
    </div>
  )
}

export default Testimonials