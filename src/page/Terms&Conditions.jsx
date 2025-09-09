import React from 'react'
import Hero from '../components/Terms&Conditions/Hero'
import TermsAndConditionsContent from '../components/Terms&Conditions/Terms&ConditionsContent'
import Seo from '../components/Seo'

const TermsAndConditions = () => {
  return (
    <div>
      <Seo
        title="Terms & Conditions | BR.lk"
        description="Read the terms and conditions governing the use of BR.lk and our services."
      />
      <Hero />
      <TermsAndConditionsContent />
    </div>
  )
}

export default TermsAndConditions