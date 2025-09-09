import React, { useState } from 'react';
import Calculator from '../../assets/cal.png';
import BusinessName from '../../assets/business-name.png';
import CompanyCheck from '../../assets/company-name.png';
import Slic from '../../assets/slicpng.png';




const SvgChevronRight = () => (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
);

const BusinessSolutionsUI = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const businessTools = [
        {
            id: 'name-generator',
            icon: <img src={BusinessName} alt="Business Name Icon" className="w-9 h-9" />,
            title: 'Business Name Generator',
            description: 'Generate unique business names for your Sri Lankan venture with our intelligent naming tool'
        },
        {
            id: 'name-checker',
            icon: <img src={CompanyCheck} alt="Company Check Icon" className="w-9 h-9" />,
            title: 'Company Name Checker',
            description: 'Check business name availability with the Registrar of Companies Sri Lanka instantly'
        },
        {
            id: 'slsic-search',
            icon: <img src={Slic} alt="SLSIC Code Icon" className="w-9 h-9" />,
            title: 'SLSIC Code Search',
            description: 'Find the right Sri Lankan Standard Industrial Classification codes for your business'
        }
    ];

    const feeCalculators = [
        {
            id: 'ebay-calculator',
            icon: <img src={Calculator} alt="eBay Fee Calculator Icon" className="w-9 h-9" />,
            title: 'eBay Fee Calculator',
            description: 'Calculate ebay selling fees and costs'
        },
        {
            id: 'etsy-calculator',
            icon:  <img src={Calculator} alt="eBay Fee Calculator Icon" className="w-9 h-9" />,
            title: 'etsy Fee Calculator',
            description: 'Calculate etsy marketplace fees'
        },
        {
            id: 'wise-calculator',
            icon:  <img src={Calculator} alt="eBay Fee Calculator Icon" className="w-9 h-9" />,
            title: 'wise free Calculator',
            description: 'Calculate international transfer fees'
        },
        {
            id: 'profit-calculator',
            icon:  <img src={Calculator} alt="eBay Fee Calculator Icon" className="w-9 h-9" />,
            title: 'Profit Margin Calculator',
            description: 'Calculate and optimize profit margins'
        },
        {
            id: 'mecuri-calculator',
            icon:  <img src={Calculator} alt="Mecuri Bank Fee Calculator Icon" className="w-9 h-9" />,
            title: 'Mecuri Bank Fee Calculator',
            description: 'Calculate banking fees and charges'
        },
        {
            id: 'paypal-calculator',
            icon:  <img src={Calculator} alt="PayPal Fee Calculator Icon" className="w-9 h-9" />,
            title: 'PayPal Fee Calculator',
            description: 'Calculate PayPal transaction fees'
        },
        {
            id: 'amazon-calculator',
            icon:  <img src={Calculator} alt="Amazon Fee Calculator Icon" className="w-9 h-9" />,
            title: 'Amazon Fee Calculator',
            description: 'Calculate Amazon selling fees & FBA costs'
        }
    ];

    const ToolCard = ({ tool, section }) => (
        <div
            className="bg-[#f3ede6] hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-gray-300 hover:shadow-md"
            onMouseEnter={() => setHoveredCard(tool.id)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3   transition-shadow duration-300">
                        {tool.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {tool.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {tool.description}
                        </p>
                    </div>
                </div>
                <div className="ml-4">
                    <div className={`w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform duration-300 ${
                        hoveredCard === tool.id ? 'scale-110' : ''
                    }`}>
                        <SvgChevronRight />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif">
                        Comprehensive Business<br />
                        Solutions for Your Success
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Complete end-to-end services to establish, manage, and grow your international
                        business with confidence and compliance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Business Tools Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Business Tools</h2>
                        <div className="space-y-6">
                            {businessTools.map((tool) => (
                                <ToolCard key={tool.id} tool={tool} section="tools" />
                            ))}
                        </div>
                    </div>

                    {/* Fee Calculators Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Fee Calculators</h2>
                        <div className="space-y-6">
                            {feeCalculators.map((calculator) => (
                                <ToolCard key={calculator.id} tool={calculator} section="calculators" />
                            ))}
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default BusinessSolutionsUI;