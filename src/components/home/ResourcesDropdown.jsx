import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, desc, href = "#" }) => (
  <Link
    to={href}
    className="block px-3 py-2 rounded-md hover:bg-[#faf7f2] focus:bg-[#faf7f2] transition"
  >
    <div className="text-[#222] font-medium">{title}</div>
    {desc && <div className="text-[#6d7b92] text-sm mt-0.5">{desc}</div>}
  </Link>
);

const ResourcesDropdown = ({ open }) => {
  if (!open) return null;
  return (
    <div
      role="menu"
      aria-label="Resources menu"
      className="absolute left-0 right-0 top-full mt-0 w-screen z-50"
    >
      <div className="border-t border-[#eee] bg-white  shadow-xl">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 ">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#232323] mb-5">
            Grow Your Company
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Tools */}
            <div>
              <div className="font-serif text-xl font-semibold text-[#232323] mb-3">
                Business Tools
              </div>
              <div className="space-y-1 font-sans">
                <Item title="Business name generator" desc="Generate unique business names for your venture"  href="/name-generator"/>
                <Item title="Company Name Checker" desc="Check business names availability instantly" />
                <Item title="SSIC Code Search" desc="Find the right business classification codes" />
              </div>
            </div>

            {/* Fee Calculators */}
            <div className="md:col-span-2">
              <div className="font-serif text-xl font-semibold text-[#232323] mb-3">
                Fee Calculators
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 font-sans">
                <Item title="eBay Fee Calculator" desc="Calculate eBay selling fees and costs" href="/calculator/ebay" />
                <Item title="Etsy Fee Calculator" desc="Calculate Etsy marketplace fees" />
                <Item title="Wise Fee Calculator" desc="Calculate international transfer fees" href="/calculator/wise" />
                <Item title="Profit Margin Calculator" desc="Calculate and optimize profit margins" />
                <Item title="Mercury Bank Fee Calculator" desc="Calculate banking fees and charges" />
                <Item title="PayPal Fee Calculator" desc="Calculate PayPal transaction fees" href="/calculator/paypal"/>
                <Item title="Amazon Fee Calculator" desc="Calculate Amazon selling fees & FBA costs " href="/calculator/amazon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
