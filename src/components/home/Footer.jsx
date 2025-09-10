import React from "react";
import brLogoWhite from "../../assets/br logo white 1.png";
import {
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";


const footerLinks = [
  {
    heading: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Resources", href: "/resources" },
      { name: "Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    heading: "Services",
    links: [
      { name: "Bookkeeping", href: "#" },
      { name: "Tax filing", href: "#" },
      { name: "Payroll Management", href: "#" },
      { name: "Financial Reporting", href: "#" },
      { name: "Expense Tracking", href: "#" },
      { name: "Business Consulting", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Business name generator", href: "#" },
      { name: "Company Name Checker", href: "#" },
      { name: "SSIC Code Search", href: "#" },
      { name: "eBay Fee Calculator", href: "#" },
      { name: "etsy  Fee Calculator", href: "#" },
      { name: "wise free  Calculator", href: "#" },
      { name: "Mecuri Bank Fee  Calculator", href: "#" },
      { name: "papal fee calculator", href: "#" },
      { name: "Amazon fee calculator", href: "#" },
      { name: "Profit Margin Calculator", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-[#242933] pt-16 pb-5 px-4 md:px-8 lg:px-10">
    <div className="max-w-[1550px] mx-auto flex flex-col items-center">
        <div className="hidden md:flex flex-col items-center flex-shrink-0 mx-12">
          <img
            src={brLogoWhite}
            alt="BR.lk Logo"
            className="h-14 w-auto"
            draggable={false}
          />
        </div>
      {/* Main Links Grid and Logo */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 mt-10">
        {/* Columns */}
        <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-medium mb-4">{section.heading}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-[#dbe3f4] text-sm hover:underline transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <div className="flex items-start text-[#dbe3f4] text-sm mb-2">
              <svg width={18} height={18} fill="none" stroke="#dbe3f4" strokeWidth={1.5} className="mr-2 mt-1" viewBox="0 0 20 20"><path d="M10 18s6-5.686 6-10A6 6 0 1 0 4 8c0 4.314 6 10 6 10Z"/><circle cx="10" cy="8" r="2.5"/></svg>
              <span>
                Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815
              </span>
            </div>
            <div className="flex items-center text-[#dbe3f4] text-sm">
              <svg width={18} height={18} fill="none" stroke="#dbe3f4" strokeWidth={1.5} className="mr-2" viewBox="0 0 20 20"><rect x="2" y="5" width="16" height="10" rx="2"/><path d="m3 6 7 6 7-6"/></svg>
              <span>support@figma.com</span>
            </div>
          </div>
        </div>
        
      </div>
      {/* Centered logo for mobile */}
      <div className="flex md:hidden justify-center mt-10 mb-2">
        <img
          src={brLogoWhite}
          alt="BR.lk Logo"
          className="h-14 w-auto"
          draggable={false}
        />
      </div>
      {/* Social and bottom bar */}
      <div className="w-full mt-14">
        <div className="bg-[#d4d5d7] rounded-xl py-5 px-3 md:px-6">
          <div className="text-center text-[#232323] font-medium mb-3 text-lg">Follow us</div>
          <div className="flex justify-center gap-10 text-2xl text-[#232323]">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      {/* Bottom text */}
  <div className="w-full flex justify-between items-center mt-6 px-3 md:px-8 text-xs text-[#dbe3f4]">
        <span>© 2025 All Rights Reserved</span>
        <a href="/privacy-policy" className="hover:underline text-[#dbe3f4]">Privacy Policy</a>
        <a href="/terms-and-conditions" className="hover:underline text-[#dbe3f4]">Terms and Conditions</a>
      </div>
    </div>
  </footer>
);

export default Footer;