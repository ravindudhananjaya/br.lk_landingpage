import React, { useMemo, useState } from "react";
import ListingDetail from "../../assets/listing-detail.png";
import FeeBreakdown from "../../assets/fee-breakdown.png";
import ReactCountryFlag from "react-country-flag";

const SectionCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-5 sm:p-6">
    <h2 className="font-serif text-xl sm:text-2xl text-[#232323] mb-4 flex items-center gap-2">
      <img src={ListingDetail} alt="Listing Detail" className="w-6 h-6" />
      {title}
    </h2>
    {children}
  </div>
);

const Row = ({ label, children }) => (
  <label className="block mb-4">
    <div className="text-sm text-[#6d7b92] mb-1 font-poppins">{label}</div>
    {children}
  </label>
);

const Line = ({ label, value, accent }) => (
  <div className="flex items-center justify-between py-2 border-b border-black/5 text-sm sm:text-base font-poppins">
    <span className="text-[#4b5563]">{label}</span>
    <span className={accent ? "text-[#16a34a] font-semibold" : "text-[#111827]"}>{value}</span>
  </div>
);

const WiseCalculator = () => {
  const [send, setSend] = useState(1000);
  const [sendCurrency, setSendCurrency] = useState("GBP");
  const [receiveCurrency, setReceiveCurrency] = useState("EUR");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");

  // Simple static rate table (no external calls)
  const rateTable = {
    GBP: { GBP: 1, EUR: 1.1516, USD: 1.27 },
    EUR: { EUR: 1, GBP: 0.868, USD: 1.09 },
    USD: { USD: 1, GBP: 0.79, EUR: 0.92 },
  };

  const currencyToFlag = { GBP: "GB", USD: "US", EUR: "EU" };

  const numericSend = Number(send) || 0;
  const rate = rateTable[sendCurrency]?.[receiveCurrency] ?? 1;

  // Fee schedule (approximate Wise-like model)
  const feeSchedule = {
    "Bank Transfer": { percent: 0.006, fixed: 0.35, min: 1.0 }, // 0.6% + fixed
    Card: { percent: 0.012, fixed: 0.35, min: 1.0 }, // 1.2% + fixed
  };

  const getVolumeDiscountPct = (amount) => {
    if (amount >= 50000) return 0.25;
    if (amount >= 20000) return 0.2;
    if (amount >= 10000) return 0.15;
    if (amount >= 5000) return 0.1;
    if (amount >= 1000) return 0.05;
    return 0;
  };

  const { bankFee, ourFee, volumeDiscount, totalFees, recipientGets, totalFeePct } = useMemo(() => {
    const cfg = feeSchedule[paymentMethod] || feeSchedule["Bank Transfer"];
    const bankFeeVal = 0; // bank fee kept 0 for simplicity
    const feeRaw = Math.max(cfg.min, cfg.fixed + numericSend * cfg.percent);
    const volDisc = feeRaw * getVolumeDiscountPct(numericSend);
    const fees = Math.max(0, bankFeeVal + feeRaw - volDisc);
    const netSend = Math.max(0, numericSend - fees);
    const recv = netSend * rate;
    const pct = numericSend > 0 ? (fees / numericSend) * 100 : 0;
    return {
      bankFee: bankFeeVal,
      ourFee: feeRaw,
      volumeDiscount: volDisc,
      totalFees: fees,
      recipientGets: recv,
      totalFeePct: pct,
    };
  }, [numericSend, paymentMethod, rate]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 bg-white rounded-[24px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left */}
        <SectionCard title="Transaction Details">
          <Row label="You send">
            <div className="flex gap-2 font-poppins">
              <input
                type="number"
                min="0"
                className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white"
                value={send}
                onChange={(e) => setSend(e.target.value)}
              />
              <select
                className="rounded-lg border border-black/10 px-3 py-2 bg-white"
                value={sendCurrency}
                onChange={(e) => setSendCurrency(e.target.value)}
              >
                <option>GBP</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </Row>

          <div className="rounded-xl bg-[#eef2f7] text-[#374151] px-4 py-3 text-sm font-poppins">
            1 {sendCurrency} = {rate} {receiveCurrency}
          </div>

          <Row label="Recipient gets">
            <div className="flex gap-2">
              <input
                readOnly
                className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
                value={recipientGets.toFixed(2)}
              />
              <select
                className="rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
                value={receiveCurrency}
                onChange={(e) => setReceiveCurrency(e.target.value)}
              >
                <option>EUR</option>
                <option>GBP</option>
                <option>USD</option>
              </select>
            </div>
          </Row>

          <Row label="How would you like to pay?">
            <select
              className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white font-poppins"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>Bank Transfer</option>
              <option>Card</option>
            </select>
          </Row>
        </SectionCard>

        {/* Right: Fee breakdown */}
        <div>
          <div className="bg-[#f6f7f9] rounded-2xl p-3 sm:p-4 shadow-sm ring-1 ring-black/5">
            <h2 className="font-serif text-xl sm:text-2xl text-[#232323] mb-2 flex items-center gap-2">
              <img src={FeeBreakdown} alt="Fee Breakdown" className="w-6 h-6" />
              Fee Breakdown
            </h2>
            <div className="mt-4 space-y-0.5 font-poppins">
              <Line label="Bank transfer fee" value={`${bankFee.toFixed(2)} ${sendCurrency}`} />
              <Line label="Our fee" value={`${ourFee.toFixed(2)} ${sendCurrency}`} />
              <Line label="Volume discount" value={`- ${volumeDiscount.toFixed(2)} ${sendCurrency}`} accent />
            </div>

            <div className="mt-6 font-poppins">
              <div className="bg-[#1976e7] text-white rounded-xl px-10 py-5 flex items-center justify-between gap-8">
                <div className="flex flex-col">
                  <div className="text-base sm:text-lg">Total included fees ({totalFeePct.toFixed(2)}%)</div>
                  <div className="text-2xl sm:text-3xl font-semibold">{totalFees.toFixed(2)}</div>
                </div>
                <div className="text-sm opacity-90 gap-2 flex">
                  <span>
                    <ReactCountryFlag
                      countryCode={currencyToFlag[sendCurrency] || "US"}
                      svg
                      style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }}
                    />
                  </span>
                  {sendCurrency}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiseCalculator;
