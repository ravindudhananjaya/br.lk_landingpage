import React, { useMemo, useState } from 'react'
import { Chart } from "react-google-charts";

// Amazon FBA Calculator (US marketplace focused, simplified)
// - Collapsed: shows inputs and Calculate button
// - On Calculate: expands to show results cards and breakdowns
// - Responsive and framework-free (no external chart libs)

const marketplaces = [
  { id: 'us', label: 'United States (amazon.com)', currency: '$', referralDefault: 0.15 },
  { id: 'uk', label: 'United Kingdom (amazon.co.uk)', currency: '£', referralDefault: 0.15 },
  { id: 'de', label: 'Germany (amazon.de)', currency: '€', referralDefault: 0.15 },
]

const categories = [
  { id: 'everything_else', label: 'Everything Else (15%)', rate: 0.15 },
  { id: 'electronics', label: 'Electronics (8%)', rate: 0.08 },
  { id: 'clothing', label: 'Clothing & Accessories (17%)', rate: 0.17 },
  { id: 'books', label: 'Books (15%)', rate: 0.15 },
]

const fulfillment = [
  { id: 'fba', label: 'FBA (Fulfillment by Amazon)' },
  { id: 'fbm', label: 'FBM (Merchant Fulfilled)' },
]

function toNumber(v) {
  const n = parseFloat(String(v).replace(/[^0-9.-]/g, ''))
  return isNaN(n) ? 0 : n
}

function classifySizeTier({ length, width, height, weightLbs }) {
  const longest = Math.max(length, width, height)
  const median = [length, width, height].sort((a, b) => a - b)[1]
  const shortest = Math.min(length, width, height)

  const isStandard = longest <= 18 && median <= 14 && shortest <= 8 && weightLbs <= 20
  return isStandard ? 'standard' : 'oversize'
}

// Very rough, simplified FBA fee schedule for US (assumption based)
function calcFbaFulfillmentFeeUSD({ weightLbs, sizeTier }) {
  if (weightLbs <= 0) return 0
  if (sizeTier === 'oversize') {
    // Oversize base + per lb
    const base = 9.39
    const extra = Math.max(0, weightLbs - 1) * 0.83
    return +(base + extra).toFixed(2)
  }
  // Standard-size: step schedule by weight
  if (weightLbs <= 0.375) return 3.22
  if (weightLbs <= 0.75) return 3.48
  if (weightLbs <= 1) return 3.77
  if (weightLbs <= 2) return 4.75
  const extra = Math.ceil(weightLbs - 2) * 0.38
  return +(4.75 + extra).toFixed(2)
}

function formatCurrency(n, currencySymbol = '$') {
  const sign = n < 0 ? '-' : ''
  const abs = Math.abs(n)
  return `${sign}${currencySymbol}${abs.toFixed(2)}`
}

// Using react-google-charts for the donut chart

export default function AmazonFBACaliculator() {
  const [state, setState] = useState({
    marketplace: 'us',
    category: 'everything_else',
    fulfillment: 'fba',
    sellingPrice: '',
    productCost: '',
    lengthIn: '',
    widthIn: '',
    heightIn: '',
    weightLbs: '',
    shippingToAmazon: '',
    marketingCost: '',
    storageCost: '',
  })

  const [expanded, setExpanded] = useState(false)

  const market = useMemo(() => marketplaces.find(m => m.id === state.marketplace) || marketplaces[0], [state.marketplace])
  const category = useMemo(() => categories.find(c => c.id === state.category) || categories[0], [state.category])

  const inputs = useMemo(() => ({
    sellingPrice: toNumber(state.sellingPrice),
    productCost: toNumber(state.productCost),
    length: toNumber(state.lengthIn),
    width: toNumber(state.widthIn),
    height: toNumber(state.heightIn),
    weightLbs: toNumber(state.weightLbs),
    shippingToAmazon: toNumber(state.shippingToAmazon),
    marketingCost: toNumber(state.marketingCost),
    storageCost: toNumber(state.storageCost),
  }), [state])

  const calc = useMemo(() => {
    const currency = market.currency
    const sizeTier = classifySizeTier({
      length: inputs.length,
      width: inputs.width,
      height: inputs.height,
      weightLbs: inputs.weightLbs,
    })

    const referralRate = category.rate || market.referralDefault
    const referralFee = inputs.sellingPrice * referralRate

    const fulfillmentFee = state.fulfillment === 'fba'
      ? calcFbaFulfillmentFeeUSD({ weightLbs: inputs.weightLbs, sizeTier })
      : 0 // FBM not included in Amazon fees here

    const amazonFees = referralFee + fulfillmentFee

    const yourCosts = inputs.productCost + inputs.shippingToAmazon + inputs.marketingCost + inputs.storageCost

    const revenue = inputs.sellingPrice
    const netProfit = revenue - amazonFees - yourCosts
    const profitMargin = revenue > 0 ? netProfit / revenue : 0
    const roi = yourCosts > 0 ? netProfit / yourCosts : 0

    const perUnit = {
      revenuePerUnit: revenue,
      costPerUnit: yourCosts,
      feesPerUnit: amazonFees,
    }

    // For donut chart: Shipping+Marketing, Net Profit, Product Details, Amazon Fees
    const donutData = [
      inputs.shippingToAmazon + inputs.marketingCost + inputs.storageCost,
      Math.max(0, netProfit),
      inputs.productCost,
      amazonFees,
    ]

    return {
      currency,
      sizeTier,
      referralFee,
      fulfillmentFee,
      amazonFees,
      yourCosts,
      revenue,
      netProfit,
      profitMargin,
      roi,
      perUnit,
      donutData,
    }
  }, [inputs, category.rate, market.currency, state.fulfillment])

  const onChange = (e) => {
    const { name, value } = e.target
    setState(s => ({ ...s, [name]: value }))
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    setExpanded(true)
  }

  const currency = calc.currency

  return (
    <section className="w-full bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm font-poppins">
      {/* Top form */}
      <form onSubmit={handleCalculate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Market place category */}
          <div className=''>
            <h3 className="font-serif text-lg text-[#232323] mb-4">Market place category</h3>
            <div className="space-y-4">
              <div className='font-poppins'>
                <label className="block text-sm text-gray-600 mb-1 font-poppins">Amazon Marketplace</label>
                <div className="flex items-center gap-2">
                  <span className="text-[#1976e7]">{currency}</span>
                  <select name="marketplace" value={state.marketplace} onChange={onChange} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]">
                    {marketplaces.map(m => (
                      <option key={m.id} value={m.id}>{m.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Product Category</label>
                <div className="flex items-center gap-2 font-poppins">
                  <span className="text-[#1976e7]">{currency}</span>
                  <select name="category" value={state.category} onChange={onChange} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]">
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Costs (right) */}
          <div>
            <h3 className="font-serif text-lg text-[#232323] mb-4">Pricing & Costs</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Selling Price</label>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1976e7]">{currency}</span>
                    <input name="sellingPrice" value={state.sellingPrice} onChange={onChange} placeholder="0.00" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Product Cost</label>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1976e7]">{currency}</span>
                    <input name="productCost" value={state.productCost} onChange={onChange} placeholder="0.00" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Product Category</label>
                <div className="flex items-center gap-2">
                  <span className="text-[#1976e7]">{currency}</span>
                  <select name="fulfillment" value={state.fulfillment} onChange={onChange} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]">
                    {fulfillment.map(f => (
                      <option key={f.id} value={f.id}>{f.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Costs (dimensions) */}
          <div>
            <h3 className="font-serif text-lg text-[#232323] mb-4">Pricing & Costs</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Length (inches)</label>
                <input name="lengthIn" value={state.lengthIn} onChange={onChange} placeholder="0" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Width (inches)</label>
                <input name="widthIn" value={state.widthIn} onChange={onChange} placeholder="0" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Height (inches)</label>
                <input name="heightIn" value={state.heightIn} onChange={onChange} placeholder="0" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Weight (lbs)</label>
                <input name="weightLbs" value={state.weightLbs} onChange={onChange} placeholder="0" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
              </div>
            </div>
          </div>

          {/* Additional Costs */}
          <div>
            <h3 className="font-serif text-lg text-[#232323] mb-4">Additional Costs (Optional)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Shipping to Amazon</label>
                <div className="flex items-center gap-2">
                  <span className="text-[#1976e7]">{currency}</span>
                  <input name="shippingToAmazon" value={state.shippingToAmazon} onChange={onChange} placeholder="0.00" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Marketing Cost</label>
                <div className="flex items-center gap-2">
                  <span className="text-[#1976e7]">{currency}</span>
                  <input name="marketingCost" value={state.marketingCost} onChange={onChange} placeholder="0.00" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Additional storage</label>
                <div className="flex items-center gap-2">
                  <span className="text-[#1976e7]">{currency}</span>
                  <input name="storageCost" value={state.storageCost} onChange={onChange} placeholder="0" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1976e7]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculate button */}
        <div className="w-full flex justify-center mt-8">
          <button type="submit" className="bg-[#1976e7] text-white rounded-full px-6 py-3 shadow hover:brightness-110 active:brightness-95 transition flex items-center gap-2">
            Calculate Profit
            <span className="text-lg">→</span>
          </button>
        </div>
      </form>

      {/* Results */}
      {expanded && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Metrics (left) */}
          <div className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
            <h4 className="font-serif text-lg text-[#232323]">Key Performance Metrics</h4>
            <div className="divide-y">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Net Profit</span>
                <span className={calc.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}>{formatCurrency(calc.netProfit, currency)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Profit Margin</span>
                <span className={calc.profitMargin >= 0 ? 'text-green-600' : 'text-red-600'}>{(calc.profitMargin * 100).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Return on Investment (ROI)</span>
                <span className={calc.roi >= 0 ? 'text-green-600' : 'text-red-600'}>{(calc.roi * 100).toFixed(2)}%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-[#1f2937] text-white rounded-xl p-4 text-center">
                <div className="text-xs opacity-80">Total Revenue</div>
                <div className="text-lg font-semibold">{formatCurrency(calc.revenue, currency)}</div>
              </div>
              <div className="bg-[#1f2937] text-white rounded-xl p-4 text-center">
                <div className="text-xs opacity-80">Total Costs</div>
                <div className="text-lg font-semibold">{formatCurrency(calc.yourCosts + calc.amazonFees, currency)}</div>
              </div>
            </div>
          </div>

          {/* Donut (right) */}
          <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center gap-4">
            <h4 className="font-serif text-lg text-[#232323] w-full">Key Performance Metrics</h4>
            <div className="w-full flex justify-center">
              <Chart
                chartType="PieChart"
                width={"100%"}
                height={"260px"}
                data={[
                  ['Type', 'Value'],
                  ['Shipping & Marketing', Math.max(0, calc.donutData[0])],
                  ['Net Profit', Math.max(0, calc.donutData[1])],
                  ['Product Details', Math.max(0, calc.donutData[2])],
                  ['Amazon Fees', Math.max(0, calc.donutData[3])],
                ]}
                options={{
                  pieHole: 0.5,
                  legend: 'none',
                  pieSliceText: 'none',
                  chartArea: { width: '90%', height: '90%' },
                  slices: {
                    0: { color: '#60a5fa' },
                    1: { color: '#facc15' },
                    2: { color: '#fb923c' },
                    3: { color: '#3b82f6' },
                  },
                  tooltip: { trigger: 'focus' },
                  backgroundColor: 'transparent',
                }}
                loader={<div className="text-sm text-gray-500">Loading chart…</div>}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm w-full">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: '#60a5fa' }} /> Shipping & Marketing</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: '#facc15' }} /> Net Profit</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: '#fb923c' }} /> Product Details</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: '#3b82f6' }} /> Amazon Fees</div>
            </div>
          </div>

          {/* Amazon Fees */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-serif text-lg text-[#232323] mb-4">Amazon Fees</h4>
            <div className="divide-y">
              <div className="flex justify-between py-2"><span className="text-gray-600">Referral Fee</span><span>{formatCurrency(calc.referralFee, currency)}</span></div>
              <div className="flex justify-between py-2"><span className="text-gray-600">Fulfillment Fee</span><span>{formatCurrency(calc.fulfillmentFee, currency)}</span></div>
              <div className="flex justify-between py-2 font-semibold"><span>Total Amazon Fees</span><span className="text-[#e11d48]">{formatCurrency(calc.amazonFees, currency)}</span></div>
            </div>
          </div>

          {/* Your Costs */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-serif text-lg text-[#232323] mb-4">Your Costs</h4>
            <div className="divide-y">
              <div className="flex justify-between py-2"><span className="text-gray-600">Product Cost</span><span>{formatCurrency(inputs.productCost, currency)}</span></div>
              <div className="flex justify-between py-2"><span className="text-gray-600">Shipping to Amazon</span><span>{formatCurrency(inputs.shippingToAmazon, currency)}</span></div>
              <div className="flex justify-between py-2"><span className="text-gray-600">Marketing Cost</span><span>{formatCurrency(inputs.marketingCost, currency)}</span></div>
              <div className="flex justify-between py-2"><span className="text-gray-600">Additional Storage</span><span>{formatCurrency(inputs.storageCost, currency)}</span></div>
              <div className="flex justify-between py-2 font-semibold"><span>Total Your Costs</span><span>{formatCurrency(calc.yourCosts, currency)}</span></div>
            </div>
          </div>

          {/* Per Unit Analysis */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-serif text-lg text-[#232323] mb-4">Per Unit Analysis</h4>
            <div className="space-y-2">
              <div className="flex justify-between bg-green-50 rounded-lg px-3 py-2"><span>Revenue per Unit</span><span>{formatCurrency(calc.perUnit.revenuePerUnit, currency)}</span></div>
              <div className="flex justify-between bg-gray-50 rounded-lg px-3 py-2"><span>Cost per Unit</span><span>{formatCurrency(calc.perUnit.costPerUnit, currency)}</span></div>
              <div className="flex justify-between bg-rose-50 rounded-lg px-3 py-2"><span>Fees per Unit</span><span>{formatCurrency(calc.perUnit.feesPerUnit, currency)}</span></div>
            </div>
          </div>

          {/* Analysis & Recommendations */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-serif text-lg text-[#232323] mb-4">Analysis & Recommendations</h4>
            {calc.netProfit < 0 ? (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-4 mb-4">
                <div className="font-semibold">Low Profitability Product</div>
                <div className="text-sm mt-1">This product may struggle to be profitable. Consider reviewing pricing or reducing costs.</div>
              </div>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl p-4 mb-4">
                <div className="font-semibold">Healthy Profitability</div>
                <div className="text-sm mt-1">Your pricing and costs appear sustainable. Consider scaling spend on marketing or volume.</div>
              </div>
            )}
            <div className="space-y-2 text-sm">
              <div>Size Tier: <span className="font-medium capitalize">{calc.sizeTier}</span> – affects FBA fulfillment fees</div>
              <div>Amazon fees represent <span className="font-medium">{((calc.amazonFees / Math.max(1, calc.revenue)) * 100).toFixed(1)}%</span> of total revenue</div>
              <div>Your costs represent <span className="font-medium">{((calc.yourCosts / Math.max(1, calc.revenue)) * 100).toFixed(1)}%</span> of total revenue</div>
              <div>ROI: <span className="font-medium">{(calc.roi * 100).toFixed(1)}%</span> – aim for 50%+ for growth</div>
            </div>
            <div className="mt-3 text-sm">
              <div className="font-semibold mb-1">Recommendations</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Consider increasing your selling price or reducing product cost</li>
                <li>Reduce shipping and marketing costs where possible</li>
                <li>Review packaging to remain within standard-size tier</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
