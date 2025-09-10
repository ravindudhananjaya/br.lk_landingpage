import React from 'react'

import PaypalHero from '../../components/Calculator/PaypalHero'
import Seo from '../../components/Seo'

const PaypalCalculator = () => {
		return (
			<>
				<Seo
					title="PayPal Fee Calculator | BR.lk"
					description="Estimate PayPal fees for domestic and international transactions. Get a clear breakdown and your final amount."
				/>
				<PaypalHero />
			</>
		)
}

export default PaypalCalculator
