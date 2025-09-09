import React from 'react'
import BlogCards from '../components/Blog/BlogCards'
import Hero from '../components/Blog/Hero'
import Footer from '../components/home/Footer'
import Seo from '../components/Seo'
import Reveal from "../components/common/Reveal";

const Blog = () => {
  return (
  <div>
     <Seo
                    title="Blog | BR.LK"
                    description="Explore our latest articles and insights on business management, productivity, and more."
                    url="https://br.lk/blog"
                    image="/br-white.svg"
                  />
  <Hero />
  <Reveal variant="fade-up" threshold={0.15}><BlogCards /></Reveal>
    <Footer />
  </div>
  )
}

export default Blog