import React from 'react'
import FinancialServicesIcon from '../../assets/hsic/financial-services.png'
import TourismIcon from '../../assets/hsic/tourism.png'
import TechnologyIcon from '../../assets/hsic/tech.png'
import TradingLogisticsIcon from '../../assets/hsic/logistics.png'

const categories = [
	{
		title: 'Financial Services',
		icon: FinancialServicesIcon,
		rows: [
			{ label: 'Investment banking activities', code: '661201' },
			{ label: 'Insurance agents and brokers', code: '622200' },
			{ label: 'Trusts, funds and financial entities', code: '644000' },
		],
	},
	{
		title: 'Tourism',
		icon: TourismIcon,
		rows: [
			{ label: 'Travel agency activities', code: '791000' },
			{ label: 'Reservation & tourist services', code: '799000' },
			{ label: 'Guesthouses & accommodation', code: '550900' },
		],
	},
	{
		title: 'Technology',
		icon: TechnologyIcon,
		rows: [
			{ label: 'IT consultancy activities', code: '620200' },
			{ label: 'Software development', code: '620100' },
			{ label: 'Other IT service activities', code: '620900' },
		],
	},
	{
		title: 'Trading and logistics',
		icon: TradingLogisticsIcon,
		rows: [
			{ label: 'Export trading of cotton, textile fibre and yarn', code: '451202' },
			{ label: 'Export trading of rice', code: '451315' },
			{ label: 'Air transport services n.e.c.', code: '510900' },
		],
	},
]

function CategoryCard({ title, icon, rows }) {
	return (
		<div className="bg-white rounded-2xl sm:rounded-3xl border border-black/5 shadow-sm p-6 sm:p-7 md:p-8">
			<div className="flex items-center gap-4">
				<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1976e7] shadow overflow-hidden">
					<img src={icon} alt={title + ' icon'} className="w-7 h-7 object-contain" />
				</div>
				<h3 className="text-xl sm:text-2xl font-semibold text-[#232323]">{title}</h3>
			</div>
			<div className="mt-6 divide-y divide-[#e5e7eb]">
				{rows.map((r, i) => (
					<div key={i} className="flex items-center justify-between py-3">
						<span className="text-[#232323] text-sm sm:text-base">{r.label}</span>
						<span className="text-[#232323] text-sm sm:text-base font-medium">{r.code}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default function Categories() {
	return (
		<section className="w-full bg-[#f3ede6] py-12 sm:py-14 md:py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-8 sm:mb-10 md:mb-12">
					<h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#232323]">
						Most Common HSIC Code Categories
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
					{categories.map((c) => (
						<CategoryCard key={c.title} {...c} />
					))}
				</div>
			</div>
		</section>
	)
}

