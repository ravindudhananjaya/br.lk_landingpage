export const takeActionContent = {
  amazon: {
    steps: [
      {
        title: 'Select Marketplace & Category',
        description:
          'Choose your target Amazon marketplace and select the appropriate product category to apply correct referral fee rates.',
      },
      {
        title: 'Enter Pricing Details',
        description:
          'Input your selling price, product cost, and choose between FBA (Fulfillment by Amazon) or FBM (Fulfillment by Merchant).',
      },
      {
        title: 'Add Product Dimensions',
        description:
          'Enter length, width, height, and weight. Our calculator automatically determines size tier and calculates dimensional weight.',
      },
      {
        title: 'Get Profit Analysis',
        description:
          'View comprehensive results including profit breakdown, fee analysis, and personalized recommendations for optimization.',
      },
    ],
  },
  paypal: {
    steps: [
      {
        title: 'Enter Transaction Details',
        description:
          "Input your transaction amount and specify the business location. These details determine which fee structure applies to your payment.",
      },
      {
        title: 'Select Currency & Location',
        description:
          'Choose your transaction currency and customer location. International transactions have different rates than domestic ones.',
      },
      {
        title: 'Choose Payment Type',
        description:
          'Select between goods & services or personal payments. Also specify if you want to include transaction protection fees.',
      },
      {
        title: 'Get Fee Breakdown',
        description:
          'View detailed calculations showing PayPal fees, currency conversion rates if applicable, and your final amount received.',
      },
    ],
  },
  ebay: {
    steps: [
      {
        title: 'Enter Listing Details',
        description:
          "Input your item's selling price, shipping cost, and any additional charges. These form the foundation for accurate fee calculations.",
      },
      {
        title: 'Select Item Category',
        description:
          'Choose the appropriate eBay category for your item. Different categories have varying fee structures that affect your total costs.',
      },
      {
        title: 'Choose Listing Options',
        description:
          'Select additional features like promoted listings, international shipping, or store subscriptions to get a complete fee breakdown.',
      },
      {
        title: 'Get Fee Breakdown',
        description:
          'View detailed calculations including final value fees, payment processing fees, and your net profit to optimize your pricing strategy.',
      },
    ],
  },
  wise: {
    steps: [
      {
        title: 'Enter Transfer Amount',
        description:
          'Input the amount you want to send. Our calculator will instantly show you the equivalent amount in your destination currency using real-time exchange rates.',
      },
      {
        title: 'Choose Payment Method',
        description:
          'Select your preferred payment method. Bank transfers offer the lowest fees, while debit and credit cards provide instant processing with higher costs.',
      },
      {
        title: 'Select Destination Country',
        description:
          "Choose the country and currency you're sending money to. We support transfers to 80+ countries with competitive rates for each destination.",
      },
      {
        title: 'Review Complete Breakdown',
        description:
          'Get a transparent view of all costs including our fee, the exchange rate used, and the exact amount your recipient will receive.',
      },
    ],
  },
}
