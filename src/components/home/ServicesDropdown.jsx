import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, desc, href = "#", onSelect }) => (
  <Link
    to={href}
    onClick={onSelect}
    className="block px-3 py-2 rounded-md hover:bg-[#faf7f2] focus:bg-[#faf7f2] transition"
  >
    <div className="text-[#222] font-medium">{title}</div>
    {desc && <div className="text-[#6d7b92] text-sm mt-0.5">{desc}</div>}
  </Link>
);

const ServicesDropdown = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      role="menu"
      aria-label="Services menu"
      className="absolute left-0 right-0 top-full mt-0 w-screen z-50"
    >
      <div className="border-t border-[#eee] bg-white shadow-xl">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 ">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#232323] mb-5">
            Your Business Partner
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Financial Services */}
            <div>
              <div className="font-serif text-xl font-semibold text-[#232323] mb-3">
                Financial Services
              </div>
              <div className="space-y-1 font-sans">
                <Item onSelect={onClose} title="Bookkeeping" desc="Complete bookkeeping solutions with expert support and modern software" href="/services" />
                <Item onSelect={onClose} title="Tax Filing" desc="Professional tax preparation and filing services for businesses" href="/services" />
                <Item onSelect={onClose} title="Financial Reporting" desc="Real-time financial insights and comprehensive business reports" href="/services" />
              </div>
            </div>

            {/* Business Management */}
            <div>
              <div className="font-serif text-xl font-semibold text-[#232323] mb-3">
                Business Management
              </div>
              <div className="space-y-1 font-sans">
                <Item onSelect={onClose} title="Payroll Management" desc="Streamlined payroll processing and employee management" href="/services" />
                <Item onSelect={onClose} title="Expense Tracking" desc="Automated expense management and receipt tracking" href="/services" />
                <Item onSelect={onClose} title="Business Consulting" desc="Strategic guidance to grow and optimize your business" href="/services" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
