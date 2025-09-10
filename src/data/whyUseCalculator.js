// Content for the reusable WhyUse section across calculator pages.
// Keep this file data-only: just titles, descriptions, and left paragraph lines.

export const whyUseContent = {
  amazon: {
    left: [
      "Selling on Amazon can be highly",
      "profitable, but understanding the",
      "true cost structure is crucial for",
      "success. Our comprehensive FBA",
      "calculator eliminates guesswork",
      "by providing accurate fee",
      "calculations, profit analysis, and",
      "actionable recommendations.",
      "Whether you're a new seller",
      "validating product ideas or an",
      "experienced merchant optimizing",
      "existing listings, our tool helps",
      "you make data-driven decisions",
      "that maximize profitability and",
      "minimize financial risks.",
    ],
    reasons: [
      {
        title: "Global Marketplace Support",
        description:
          "Calculate fees for all major Amazon marketplaces including US, UK, Europe, Canada, and more.",
      },
      {
        title: "Accurate Profit Analysis",
        description:
          "Get detailed profit breakdowns with visual representations and actionable insights.",
      },
      {
        title: "Complete Fee Transparency",
        description:
          "Understand all Amazon fees including referral, fulfillment, storage, and additional costs.",
      },
    ],
  },
  ebay: {
    // Left paragraph lines; when absent, component will use its internal default
    left: [
      "Understanding eBay's fee",
      "structure is essential for pricing",
      "your products competitively",
      "while maintaining healthy profit",
      "margins. This calculator helps you",
      "plan better by showing the exact",
      "amount you'll receive after all",
      "eBay fees, PayPal processing fees,",
      "and international transaction",
      "costs are deducted. Make",
      "informed decisions about your",
      "global selling strategy.",
    ],
    reasons: [
      {
        title: "Precise Fee Calculations",
        description:
          "Real-time calculations based on current eBay fee structure including final value fees, listing fees, and optional upgrade costs.",
      },
      {
        title: "Category-Specific Rates",
        description:
          "Different eBay categories have different fee structures. Get accurate calculations for electronics, fashion, collectibles, and more.",
      },
      {
        title: "Global Selling Focus",
        description:
          "Calculate fees for international sales including currency conversion and cross-border transaction costs.",
      },
    ],
  },
  paypal: {
    left: [
      "As a Sri Lankan business owner",
      "understanding PayPal fees is",
      "crucial for pricing your products",
      "correctly and managing cash flow.",
      "This calculator helps you plan",
      "better by showing the exact",
      "amount you'll receive after all fees",
      "are deducted.",
    ],
    reasons: [
      {
        title: "Accurate Calculations",
        description:
          "Real-time fee calculations based on current PayPal rates.",
      },
      {
        title: "International Focus",
        description:
          "Designed for cross-border transactions and global business.",
      },
      {
        title: "Detailed Breakdown",
        description:
          "See exactly where your money goes with a clear fee breakdown.",
      },
    ],
  },
  wise: {
    // No custom left paragraph provided; the component can use the default when undefined or empty
    left: undefined,
    reasons: [
      {
        title: "Transparent Pricing",
        description:
          "No hidden fees or surprises. See exactly what you'll pay before you transfer.",
      },
      {
        title: "Real-time Exchange Rates",
        description:
          "Get live mid-market exchange rates updated every few seconds.",
      },
      {
        title: "Global Coverage",
        description:
          "Calculate fees for transfers to over 80+ countries worldwide.",
      },
    ],
  },
}

export default whyUseContent;
