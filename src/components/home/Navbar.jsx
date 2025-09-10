import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/br-black.png";
import ResourcesDropdown from "./ResourcesDropdown";
import ServicesDropdown from "./ServicesDropdown";
import homeIcon from "../../assets/navbar/home.png";
import servicesIcon from "../../assets/navbar/services.png";
import resourcesIcon from "../../assets/navbar/resources.png";
import aboutIcon from "../../assets/navbar/about.png";
import blogIcon from "../../assets/navbar/blog.png";
import pricingIcon from "../../assets/navbar/pricing.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // Mobile-only accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const isDropdownOpen = resourcesOpen || servicesOpen;

  return (
    <div>
      <nav
        className={`${isDropdownOpen ? 'bg-white' : 'bg-[#f3ede6]'} py-3 md:py-4 xl:py-5 relative transition-colors duration-200`}
      >
        <div className="flex items-center md:justify-evenly lg:justify-evenly xl:justify-evenly justify-between max-w-[1650px] mx-auto ">
          {/* Logo - Increased Size */}
          <div className="flex items-center gap-3">
            <Link to="/" aria-label="Go to home">
              <img 
                src={logo} 
                alt="BR.LK Logo" 
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
                onError={(e) => { console.error("Logo failed to load"); }}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links - Increased Size */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-3xl font-serif relative">
            <Link to="/" className="flex items-center gap-3 text-[#222] font-semibold text-base lg:text-lg hover:text-[#222c36] transition">
              <img src={homeIcon} alt="" aria-hidden="true" role="presentation" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              Home
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-3 text-[#222] font-semibold text-base lg:text-lg cursor-pointer hover:text-[#222c36] transition"
              onMouseEnter={() => { setServicesOpen(true); setResourcesOpen(false); }}
              onClick={() => { setServicesOpen(false); setResourcesOpen(false); }}
            >
              <img src={servicesIcon} alt="" aria-hidden="true" role="presentation" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              Services
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-5 lg:h-5 ml-1">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <Link
              to="/resources"
              className="flex items-center gap-3 text-[#222] font-semibold text-base lg:text-lg cursor-pointer hover:text-[#222c36] transition"
              onMouseEnter={() => { setResourcesOpen(true); setServicesOpen(false); }}
              onClick={() => { setResourcesOpen(false); setServicesOpen(false); }}
            >
              <img src={resourcesIcon} alt="" aria-hidden="true" role="presentation" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              Resources
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-5 lg:h-5 ml-1">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <Link to="/about" className="flex items-center gap-3 text-[#222] font-semibold text-base lg:text-lg hover:text-[#222c36] transition">
              <img src={aboutIcon} alt="" aria-hidden="true" role="presentation" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              About
            </Link>
            <Link to="/blog" className="flex items-center gap-3 text-[#222] font-semibold text-base lg:text-lg hover:text-[#222c36] transition">
              <img src={blogIcon} alt="" aria-hidden="true" role="presentation" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              Blog
            </Link>
            <Link to="/pricing" className="flex items-center gap-3 text-[#222] font-semibold text-base lg:text-lg hover:text-[#222c36] transition">
              <img src={pricingIcon} alt="" aria-hidden="true" role="presentation" className="w-5 h-5 lg:w-6 lg:h-6 object-contain" />
              Pricing
            </Link>
            <button
              type="button"
              aria-label="Log In"
              className="bg-[#222c36] text-white rounded-full font-semibold whitespace-nowrap transition-colors hover:bg-[#1a202c] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#222c36]
                         ml-4 lg:ml-6
                         px-6 py-2.5 text-base lg:px-7 lg:py-3 lg:text-lg xl:px-8"
            >
              Log In
            </button>
          </div>

          {/* Mobile Hamburger Button - Increased Size */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-3 rounded-md text-[#222] hover:bg-[#ebe6df] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222c36]"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
        {/* Full-width Dropdowns */}
        <div
          onMouseEnter={() => { setServicesOpen(true); setResourcesOpen(false); }}
          onMouseLeave={() => { setServicesOpen(false); }}
        >
          <ServicesDropdown open={servicesOpen} onClose={() => setServicesOpen(false)} />
        </div>
        <div
          onMouseEnter={() => { setResourcesOpen(true); setServicesOpen(false); }}
          onMouseLeave={() => { setResourcesOpen(false); }}
        >
          <ResourcesDropdown open={resourcesOpen} onClose={() => setResourcesOpen(false)} />
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div>
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Drawer - Increased Size */}
        <aside
          id="mobile-menu"
          className={`fixed z-50 inset-y-0 left-0 w-80 max-w-[85vw] bg-white border-r border-[#e5e5e5] shadow-xl transform transition-transform duration-300 ease-out md:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-[#f0f0f0]">
            <div className="flex items-center gap-3">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <img src={logo} alt="BR.LK Logo" className="h-12 w-12 object-contain" />
                <span className="font-semibold text-lg text-[#222]">BR.LK</span>
              </Link>
            </div>
            <button
              className="p-3 rounded-md text-[#222] hover:bg-[#f3f3f3]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-5 py-5 space-y-2 font-serif">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#222] text-lg hover:bg-[#f7f2eb]">
              <img src={homeIcon} alt="" aria-hidden="true" role="presentation" className="w-6 h-6 object-contain" />
              Home
            </Link>
            {/* Mobile Services accordion */}
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-4 py-3 rounded-lg text-left text-[#222] text-lg hover:bg-[#f7f2eb]"
              aria-expanded={mobileServicesOpen}
              onClick={() => { setMobileServicesOpen(v => !v); if (mobileResourcesOpen) setMobileResourcesOpen(false); }}
            >
              <span className="flex items-center gap-4">
                <img src={servicesIcon} alt="" aria-hidden="true" role="presentation" className="w-6 h-6 object-contain" />
                Services
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="ml-12 mr-4 mb-2 space-y-1 font-sans">
                <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Bookkeeping</Link>
                <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Tax Filing</Link>
                <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Financial Reporting</Link>
                <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Payroll Management</Link>
                <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Expense Tracking</Link>
                <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Business Consulting</Link>
              </div>
            )}

            {/* Mobile Resources accordion */}
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-4 py-3 rounded-lg text-left text-[#222] text-lg hover:bg-[#f7f2eb]"
              aria-expanded={mobileResourcesOpen}
              onClick={() => { setMobileResourcesOpen(v => !v); if (mobileServicesOpen) setMobileServicesOpen(false); }}
            >
              <span className="flex items-center gap-4">
                <img src={resourcesIcon} alt="" aria-hidden="true" role="presentation" className="w-6 h-6 object-contain" />
                Resources
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileResourcesOpen && (
              <div className="ml-12 mr-4 mb-2 space-y-1 font-sans">
                {/* Business Tools */}
                <div className="text-sm text-[#6d7b92] px-3 pt-2">Business Tools</div>
                <Link to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Business name generator</Link>
                <Link to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Company Name Checker</Link>
                <Link to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">SSIC Code Search</Link>
                {/* Fee Calculators */}
                <div className="text-sm text-[#6d7b92] px-3 pt-3">Fee Calculators</div>
                <Link to="/calculator/ebay" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">eBay Fee Calculator</Link>
                <Link to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Etsy Fee Calculator</Link>
                <Link to="/calculator/wise" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Wise Fee Calculator</Link>
                <Link to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Profit Margin Calculator</Link>
                <Link to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Mercury Bank Fee Calculator</Link>
                <Link to="/calculator/paypal" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">PayPal Fee Calculator</Link>
                <Link to="/resources" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-[#222] hover:bg-[#faf7f2]">Amazon Fee Calculator</Link>
              </div>
            )}
            <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#222] text-lg hover:bg-[#f7f2eb]">
              <img src={aboutIcon} alt="" aria-hidden="true" role="presentation" className="w-6 h-6 object-contain" />
              About
            </Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#222] text-lg hover:bg-[#f7f2eb]">
              <img src={blogIcon} alt="" aria-hidden="true" role="presentation" className="w-6 h-6 object-contain" />
              Blog
            </Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#222] text-lg hover:bg-[#f7f2eb]">
              <img src={pricingIcon} alt="" aria-hidden="true" role="presentation" className="w-6 h-6 object-contain" />
              Pricing
            </Link>
          </nav>

          <div className="px-5 py-4 border-t border-[#f0f0f0]">
            <button className="w-full bg-[#222c36] text-white rounded-full px-8 py-3 font-semibold text-lg hover:bg-[#1a202c] transition">
              Log In
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;