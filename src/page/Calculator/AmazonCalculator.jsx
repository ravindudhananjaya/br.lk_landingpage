import React from 'react'
import AmazonHero from '../../components/Calculator/AmazonHero'
import AmazonFBACaliculator from '../../components/Calculator/AmazonFBACaliculator'
import Seo from '../../components/Seo'

const AmazonCalculator = () => {
  return (
    <div>
      <Seo
        title="Amazon FBA Calculator | BR.lk"
        description="Estimate Amazon FBA fees, referral fees, and fulfillment costs. Get profit, margin, and ROI instantly."
      />
      <AmazonHero />
      {/* Calculator */}
   
    </div>
  )
}

export default AmazonCalculator