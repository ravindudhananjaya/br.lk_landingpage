import React from 'react'

import WiseHero from '../../components/Calculator/WiseHero'
import Seo from '../../components/Seo'

const WiseCalculator = () => {
		return (
			<>
				<Seo
					title="Wise (TransferWise) Fee Calculator | BR.lk"
					description="Calculate Wise transfer fees and exchange rates to see exactly what arrives after conversion."
				/>
				<WiseHero />
			</>
		)
}

export default WiseCalculator
