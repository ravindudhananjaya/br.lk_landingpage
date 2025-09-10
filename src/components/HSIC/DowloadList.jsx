import React from 'react'

export default function DowloadList() {
	return (
		<section className="w-full bg-[#1f2833] text-white py-16 sm:py-20 md:py-24">
			<div className="max-w-6xl mx-auto px-4 text-center">
				<h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl">
					Download a full list of HSIC codes for free
				</h2>
				<p className="mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
					We've created a go-to resource for Hong Kong business owners looking to effortlessly navigate industry classifications.
				</p>

				<form className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-3xl mx-auto w-full">
					<input
						type="email"
						required
						placeholder="Enter your email address"
						aria-label="Email for HSIC codes download"
						className="flex-1 min-w-0 h-15 py-3 sm:py-0 rounded-xl border border-white/30 bg-transparent px-4 text-sm sm:text-base text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
					/>
					<button
						type="submit"
						className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-[#1976e7] hover:bg-[#155fbe] text-white font-semibold shadow w-full sm:w-auto transition-colors"
					>
						Download
					</button>
				</form>

				<p className="mt-4 text-xs sm:text-sm text-white/70">
					By clicking, you agree to our{' '}
					<a href="/terms" className="underline">Terms & Conditions</a>,{' '}
					<a href="/privacy" className="underline">Privacy</a> and{' '}
					<a href="/data-protection" className="underline">Data Protection Policy</a>
				</p>
			</div>
		</section>
	)
}

