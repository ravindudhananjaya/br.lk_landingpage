import React from 'react'
import EbayCalculatorUI from '../../components/Calculator/EbayCalculator'
import EbayHero from '../../components/Calculator/EbayHero'
import Seo from '../../components/Seo'

const EbayCalculator = () => {
  return (
    <>
      <Seo
        title="eBay Fee Calculator | BR.lk"
        description="Calculate eBay selling fees accurately by category and marketplace. See final payout after all fees."
      />
      <EbayHero />
    </>
  )
}

export default EbayCalculator