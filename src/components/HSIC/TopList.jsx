import React from 'react'

const defaultItems = [
	{
		code: '642000',
		category: 'Financial',
		description: 'Investment and holding companies',
	},
	{
		code: '702100',
		category: 'Professional',
		description: 'Public relation services',
	},
	{
		code: '620200',
		category: 'Technology',
		description:
			'Information technology consultancy activities and computer facilities management',
	},
	{
		code: '620900',
		category: 'Technology',
		description: 'Other information technology service activities',
	},
	{
		code: '741900',
		category: 'Marketing',
		description: 'Advertising services n.e.c.',
	},
	{
		code: '620900',
		category: 'Professional',
		description: 'Business management and consultancy services',
	},
]

const badgeTone = {
	Financial: 'bg-gray-100 text-gray-600',
	Professional: 'bg-gray-100 text-gray-600',
	Technology: 'bg-gray-100 text-gray-600',
	Marketing: 'bg-gray-100 text-gray-600',
}

export default function TopList({ title = 'Top List of HSIC Codes', items = defaultItems }) {
	return (
		<section className="w-full bg-[#fbf7f2] py-12 sm:py-14 md:py-16 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<div className="text-center mb-8 sm:mb-10 md:mb-12">
					<h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#232323]">
						{title}
					</h2>
				</div>

				{/* Grid */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 font-sans">
					{items.map((item, idx) => (
										<article
											key={`${item.code}-${idx}`}
											className="relative group bg-white rounded-2xl sm:rounded-3xl border border-black/5 shadow-sm p-5 sm:p-6 md:p-7 flex flex-col justify-between min-h-[160px] overflow-hidden"
										>
							{/* Top row: Code + Category */}
							<div className="flex items-start justify-between">
								<div className="inline-flex items-center">
									<span className="text-[#1976e7] font-semibold text-2xl sm:text-3xl leading-none">
										{item.code}
									</span>
								</div>
								<span
									className={`ml-3 inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
										badgeTone[item.category] || 'bg-gray-100 text-gray-600'
									}`}
								>
									{item.category}
								</span>
							</div>

							{/* Description */}
							<p className="mt-4 text-[#232323] text-sm sm:text-base leading-relaxed font-medium">
								{item.description}
							</p>

											{/* Hover overlay window */}
											<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 ease-out">
												{/* Dim + blur background confined to card */}
												<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
												{/* Centered window */}
												<div className="relative z-10 h-full w-full flex items-center justify-center p-4">
													<div className="pointer-events-auto  rounded-2xl   px-6 py-6 sm:px-8 sm:py-7 text-center max-w-md">
														<p className="text-white  text-base sm:text-lg font-medium">
															Choosing an HSIC code is one of the steps to register your company
														</p>
														<button
															type="button"
															className="mt-5 inline-flex items-center gap-2 bg-[#1976e7] hover:bg-[#155fbe] text-white font-semibold px-5 py-3 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1976e7]"
														>
															Get Started
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 24 24"
																fill="currentColor"
																className="w-5 h-5"
																aria-hidden="true"
															>
																<path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V6.31l-7.22 7.22a.75.75 0 1 1-1.06-1.06l7.22-7.22h-3.19a.75.75 0 0 1-.75-.75Z" />
																<path d="M3.75 5.25A2.25 2.25 0 0 1 6 3h5.25a.75.75 0 0 1 0 1.5H6A.75.75 0 0 0 5.25 6v12A.75.75 0 0 0 6 18.75h12a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 1 1.5 0V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h.75" />
															</svg>
														</button>
													</div>
												</div>
											</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

