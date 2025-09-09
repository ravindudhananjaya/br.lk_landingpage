import React from "react";
import Check from "../../assets/check.png";
import Cross from "../../assets/cross.png";

const CheckIcon = ({ className = "w-3 h-3" }) => (
	<img src={Check} alt="Check Icon" className={className} />
);

const CrossIcon = ({ className = "w-3 h-3" }) => (
	<img src={Cross} alt="Cross Icon" className={className} />
);

const BestPractices = () => {
	const doItems = [
		"Keep it simple and memorable",
		"Make it easy to pronounce in both English and Sinhala/Tamil",
		"Ensure it reflects your business values",
		"Check for cultural sensitivity",
		"Verify domain and social media availability",
		"Test it with your target audience",
	];

	const avoidItems = [
		"Names that are too long or hard to remember",
		"Copying existing business names",
		"Using trademarked terms",
		"Names that might offend in any language",
		"Geographic limitations unless intentional",
	];

	return (
		<section className="w-full bg-[#fbf7f2] py-12 sm:py-16 md:py-20 px-4" aria-labelledby="bn-best-practices-title">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<div className="text-center mb-6 sm:mb-8 md:mb-12">
					<h2 id="bn-best-practices-title" className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#232323] leading-tight">
						Business Naming Best Practices
					</h2>
					<p className="mt-4 text-[#4a4a4a] text-sm sm:text-base md:text-lg">
						Follow these guidelines to choose the perfect name for your Sri Lankan business
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{/* DO card */}
					<div className="bg-[#f3ede5] rounded-3xl p-6 sm:p-8 shadow-sm">
						<h3 className="font-serif text-2xl sm:text-3xl text-[#232323] text-center mb-6">
							DO These Things
						</h3>
						<ul className="space-y-4">
							{doItems.map((item, idx) => (
								<li key={idx} className="flex items-start gap-3 text-[#232323] text-base sm:text-lg">
									<span className="mt-1 text-green-500 ">
										<CheckIcon />
									</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>

					{/* AVOID card */}
					<div className="bg-[#f3ede5] rounded-3xl p-6 sm:p-8 shadow-sm">
						<h3 className="font-serif text-2xl sm:text-3xl text-[#232323] text-center mb-6">
							AVOID These Mistakes
						</h3>
						<ul className="space-y-4">
							{avoidItems.map((item, idx) => (
								<li key={idx} className="flex items-start gap-3 text-[#232323] text-base sm:text-lg">
									<span className="mt-1 text-red-500">
										<CrossIcon />
									</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BestPractices;

