import React, { useMemo, useState } from "react";
import ListingDetail from "../../assets/listing-detail.png";
import FeeBreakdown from "../../assets/fee-breakdown.png";
import ReactCountryFlag from "react-country-flag";

const SectionCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-5 sm:p-6">
    <h2 className="font-serif text-xl sm:text-2xl text-[#232323]  flex items-center gap-2 mb-[50px]">
      <img src={ListingDetail} alt="Listing Detail" className="w-6 h-6" />
      {title}
    </h2>
    {children}
  </div>
);

const Row = ({ label, note, children }) => (
  <label className="block mb-4">
    <div className="text-sm text-[#6d7b92] mb-1 font-poppins">
      {label}
      {note && <span className="block text-xs text-[#9aa3af] font-poppins">{note}</span>}
    </div>
    {children}
  </label>
);

const Line = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 border-b border-black/5 text-sm sm:text-base font-poppins">
    <span className="text-[#4b5563]">{label}</span>
    <span className="text-[#111827]">{value}</span>
  </div>
);

const EbayCalculator = () => {
  const [soldPrice, setSoldPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [itemCost, setItemCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [category, setCategory] = useState("Collectibles");

  const fvfRate = 0.12; // simplified 12%
  const mpFee = 0.30; // simplified fixed managed payments fee

  const { finalValueFee, managedPaymentsFee, profit } = useMemo(() => {
    const sp = Number(soldPrice) || 0;
    const ip = Number(shippingPrice) || 0;
    const ic = Number(itemCost) || 0;
    const sc = Number(shippingCost) || 0;

    const revenue = sp + ip;
    const finalValueFee = revenue * fvfRate;
    const managedPaymentsFee = mpFee;
    const profit = revenue - finalValueFee - managedPaymentsFee - ic - sc;

    return { finalValueFee, managedPaymentsFee, profit };
  }, [soldPrice, shippingPrice, itemCost, shippingCost]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 bg-white rounded-[24px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Listing Details */}
        <SectionCard title="Listing Detail" className="">
          <Row label="Sold Price" note="(sale price not including shipping charge)">
            <input
              type="number"
              min="0"
              className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
              value={soldPrice}
              onChange={(e) => setSoldPrice(e.target.value)}
            />
          </Row>
          <Row label="Shipping Price" note="(charged to buyer)">
            <input
              type="number"
              min="0"
              className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
              value={shippingPrice}
              onChange={(e) => setShippingPrice(e.target.value)}
            />
          </Row>
          <Row label="Item Cost" note="(price you paid for item)">
            <input
              type="number"
              min="0"
              className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
              value={itemCost}
              onChange={(e) => setItemCost(e.target.value)}
            />
          </Row>
          <Row label="Shipping Cost" note="(price you paid for shipping)">
            <input
              type="number"
              min="0"
              className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
              value={shippingCost}
              onChange={(e) => setShippingCost(e.target.value)}
            />
          </Row>
          <Row label="Item Category" note="(select item category)">
            <select
              className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Collectibles</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </Row>

          {/* options (static) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4b5563] font-poppins">
            {[
              "Top Rated Seller",
              "Below Standard Seller",
              "International Fee",
              "Promoted Listing",
              "Sales Tax",
              "Other Fees",
            ].map((label) => (
              <label key={label} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-black/20" />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </SectionCard>

        {/* Right: Fee breakdown */}
        <div>
          <div className="bg-[#f6f7f9] rounded-2xl p-4 sm:p-6 shadow-sm ring-1 ring-black/5 h-full flex flex-col">
            <h2 className="font-serif text-xl sm:text-2xl text-[#232323] mb-6 sm:mb-[50px] flex items-center gap-2">
              <img src={FeeBreakdown} alt="Fee Breakdown" className="w-6 h-6" />
              Fee Breakdown
            </h2>
            <div className="flex flex-col  justify-between h-full">
                <div className="mt-4 space-y-0.5">
                    <Line label="Final value fee" value={`${finalValueFee.toFixed(2)} USD`} />
                    <Line label="Managed payments fee" value={`${managedPaymentsFee.toFixed(2)} USD`} />
                </div>

                <div className="mt-6 font-poppins  ">
                <div className="bg-[#1976e7] text-white rounded-xl px-5 py-4 flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <div className="text-base sm:text-lg">Profit from sale:</div>
                        <div className="text-2xl sm:text-3xl font-semibold">{profit.toFixed(2)}</div>
                    </div>
                    <div className="text-sm opacity-90"><span className="mr-2"> 
                        <ReactCountryFlag
                                        countryCode="US"
                                        svg
                                        style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }}
                                      /></span>USD</div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbayCalculator;
