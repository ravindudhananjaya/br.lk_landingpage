import React from 'react'

import Hero from '../components/BusinessName/Hero';
import WhyChooseCards from '../components/BusinessName/WhyChoose';
import BestPractices from '../components/BusinessName/BestPractices';
import TakeAction from '../components/BusinessName/TakeAction';
import QuestionsExpertise from '../components/BusinessName/QuestionsExpertise';
import Footer from '../components/home/Footer';
import Seo from '../components/Seo';

const NameGeneratorPage = () => {
  return (
    <div>
        <Seo
          title="Business Name Generator | BR.lk"
          description="Generate unique, memorable business names for your Sri Lankan venture. Check domain availability and get expert suggestions."
        />
        <Hero />
        <WhyChooseCards />
        <TakeAction />
        <BestPractices />
        <QuestionsExpertise />
        <Footer />
    </div>
  )
}

export default NameGeneratorPage;