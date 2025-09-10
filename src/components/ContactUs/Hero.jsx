import React, { useState } from 'react';
import businessHoursIcon from "../../assets/conatactUS/businesshours.png";
import phoneIcon from "../../assets/conatactUS/phone.png";
import dropdownIcon from "../../assets/conatactUS/dropdown (2).png";
import facebookIcon from "../../assets/conatactUS/fb.png";
import instagramIcon from "../../assets/conatactUS/instagram.png";
import linkedinIcon from "../../assets/conatactUS/linkedin.png";
import tiktokIcon from "../../assets/conatactUS/tiktok.png";
import twitterIcon from "../../assets/conatactUS/twitter.png";
import youtubeIcon from "../../assets/conatactUS/youtube.png";

const Hero = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactNumber: '',
    email: '',
    serviceNeeded: 'BookKeeping',
    annualRevenue: 'Less than 100,0000',
    message: '',
    file: null,
    agreeToProtectData: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="bg-[#f3ede6] min-h-screen py-8 sm:py-12 md:py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-[#232323] mb-6">
                Contact Information
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Have questions or ready to move forward? Contact us, book a meeting, or fill out the form to receive your quote within 48 hours.
              </p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#d4d0cf] rounded-tl-3xl rounded-br-3xl p-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <img 
                  src={businessHoursIcon} 
                  alt="Business Hours" 
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#232323] mb-1">Business Hours</h3>
                <p className="text-[#232323] font-medium">09:00 AM – 05:00 PM</p>
                <p className="text-gray-700">Monday – Sunday</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#d4d0cf] rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0">
                <img 
                  src={phoneIcon} 
                  alt="Phone" 
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#232323] mb-1">Phone</h3>
                <p className="text-[#232323] font-medium text-lg">+94 77 895 327</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <img src={tiktokIcon} alt="TikTok" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#f3ede6] rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Name */}
              <div>
                <label className="block text-[#232323] font-semibold text-lg mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              {/* Contact Number and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#232323] font-semibold text-lg mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#232323] font-semibold text-lg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Service Needed and Annual Revenue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-[#232323] font-semibold text-lg mb-2">
                    Service Needed
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-500 focus:border-blue-500 focus:outline-none appearance-none pr-8"
                  >
                    <option value="BookKeeping">BookKeeping</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Tax Services">Tax Services</option>
                    <option value="Business Registration">Business Registration</option>
                  </select>
                  <img 
                    src={dropdownIcon} 
                    alt="Dropdown" 
                    className="absolute right-0 top-12 w-4 h-4 pointer-events-none"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[#232323] font-semibold text-lg mb-2">
                    Annual Revenue
                  </label>
                  <select
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-500 focus:border-blue-500 focus:outline-none appearance-none pr-8"
                  >
                    <option value="Less than 100,0000">Less than 100,0000</option>
                    <option value="100,000 - 500,000">100,000 - 500,000</option>
                    <option value="500,000 - 1,000,000">500,000 - 1,000,000</option>
                    <option value="More than 1,000,000">More than 1,000,000</option>
                  </select>
                  <img 
                    src={dropdownIcon} 
                    alt="Dropdown" 
                    className="absolute right-0 top-12 w-4 h-4 pointer-events-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Let's talk about your idea"
                  rows={4}
                  className="w-full bg-gray-50 rounded-xl p-4 text-gray-700 placeholder-gray-400 border border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              {/* File Upload */}
              <div>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-gray-500">Upload Additional file</span>
                    </div>
                  </label>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Attach file. File size of your documents should not exceed 10MB
                </p>
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="agreeToProtectData"
                  checked={formData.agreeToProtectData}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label className="text-gray-700">
                  I want to protect my data
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;