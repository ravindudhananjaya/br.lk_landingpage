import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/home/Footer'
import QuestionsExpertise from '../../components/home/QuestionsExpertise'
import WhyUse from '../../components/Calculator/WhyUse'
import OtherCalculators from '../../components/Calculator/OtherCalculators'
import { whyUseContent } from '../../data/whyUseCalculator'
import TakeAction from '../../components/Calculator/TakeAction'
import { takeActionContent } from '../../data/takeActionContent'

const App = () => {
  const { pathname } = useLocation()
  const variant = pathname.includes('/paypal')
    ? 'paypal'
    : pathname.includes('/wise')
    ? 'wise'
    : pathname.includes('/amazon')
    ? 'amazon'
    : 'ebay'

  const reasonsByVariant = {
    ebay: whyUseContent.ebay?.reasons,
    paypal: whyUseContent.paypal?.reasons,
    wise: whyUseContent.wise?.reasons,
    amazon: whyUseContent.amazon?.reasons,
  }

  const leftContentByVariant = {
    ebay: whyUseContent.ebay?.left && (
      <>
        {whyUseContent.ebay.left.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </>
    ),
    paypal: whyUseContent.paypal?.left && (
      <>
        {whyUseContent.paypal.left.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </>
    ),
    wise: whyUseContent.wise?.left && (
      <>
        {whyUseContent.wise.left.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </>
    ),
    amazon: whyUseContent.amazon?.left && (
      <>
        {whyUseContent.amazon.left.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </>
    ),
  }

  return (
    <div>
      {/* Slot for nested calculator pages */}
      <Outlet />

      {/* Common sections shared by all calculator pages */}
      <WhyUse
        leftContent={leftContentByVariant[variant]}
        reasons={reasonsByVariant[variant]}
      />
      <TakeAction steps={takeActionContent[variant]?.steps} />
      <OtherCalculators />
      <QuestionsExpertise />
      <Footer />
    </div>
  )
}

export default App