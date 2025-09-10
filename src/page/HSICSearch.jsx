import React, { useEffect } from 'react'
import Hero from '../components/HSIC/Hero'
import TopList from '../components/HSIC/TopList'
import DowloadList from '../components/HSIC/DowloadList'
import Categories from '../components/HSIC/Categories'
import WhyBr from '../components/HSIC/WhyBr'
import Footer from '../components/home/Footer'
import Seo from '../components/Seo'

const HSICSearch = () => {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Seo
        title="Business Activity HSIC Code Search | BR.lk"
        description="Search Hong Kong Standard Industrial Classification (HSIC) codes to match your company's major business activities and navigate industry classifications easily."
      />
      <div
        data-reveal
        className="transition-all duration-700 ease-out opacity-0 translate-y-6 will-change-transform"
      >
        <Hero />
      </div>
      <div
        data-reveal
        className="transition-all duration-700 ease-out opacity-0 translate-y-6 will-change-transform"
      >
        <TopList />
      </div>
      <div
        data-reveal
        className="transition-all duration-700 ease-out opacity-0 translate-y-6 will-change-transform"
      >
        <Categories />
      </div>
      <div
        data-reveal
        className="transition-all duration-700 ease-out opacity-0 translate-y-6 will-change-transform"
      >
        <DowloadList />
      </div>
      <div
        data-reveal
        className="transition-all duration-700 ease-out opacity-0 translate-y-6 will-change-transform"
      >
        <WhyBr />
      </div>
      <Footer />
    </div>
  )
}

export default HSICSearch