import React from "react";
import rightIcon from "../../assets/Services/righticon.png";
import phoneCallIcon from "../../assets/Services/phonecall.png";
import quickChatIcon from "../../assets/Services/quickchat.png";
import videoIcon from "../../assets/Services/video.png";
import expertConsultationIcon from "../../assets/Services/expertconclution.png";
import inPersonIcon from "../../assets/Services/inperson.png";
import sarahImage from "../../assets/Services/sarah.png";

const BookConsultation = () => {
  return (
    <section className="relative bg-[#1e3a8a] overflow-hidden py-16 px-4 lg:px-8">
      {/* Diagonal Shape */}
      <div className="absolute inset-0">
        
      </div>

      <div className="max-w-[1450px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Blue Content */}
          <div className="text-white space-y-8">
            {/* Expert Consultation Badge */}
            <div className="flex items-center space-x-3">
              <img src={expertConsultationIcon} alt="Expert Consultation" className="w-6 h-6" />
              <span className="text-blue-200 font-medium">Expert Consultation</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif font-bold text-4xl lg:text-5xl leading-tight">
              Ready to Transform Your<br />
              Business Strategy?
            </h2>

            {/* Description */}
            <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-lg">
              Connect with our expert consultants and unlock your business potential. Get personalized insights, strategic guidance, and actionable solutions tailored to your unique challenges.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img src={rightIcon} alt="Check" className="w-6 h-6" />
                <span className="text-lg">Free 30-minute strategy consultation</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={rightIcon} alt="Check" className="w-6 h-6" />
                <span className="text-lg">Personalized business analysis</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={rightIcon} alt="Check" className="w-6 h-6" />
                <span className="text-lg">Expert recommendations</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={rightIcon} alt="Check" className="w-6 h-6" />
                <span className="text-lg">No commitment required</span>
              </div>
            </div>
          </div>

          {/* Right Side - White Card with Angled Container but Straight Content */}
          <div className="relative w-[800px]">
            {/* Angled White Container */}
            <div 
              className="bg-white rounded-3xl shadow-xl transform rotate-3 w-[800px]  "
              style={{
                transformOrigin: "center center",
                padding: "0"
              }}
            >
              {/* Content Container - Counter-rotated to keep content straight */}
              <div 
                className="transform -rotate-3 p-8"
                style={{
                  transformOrigin: "center center"
                }}
              >
                {/* Card Header */}
                <div className="text-center mb-8">
                  <h3 className="font-serif font-bold text-2xl lg:text-3xl text-[#232323] mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-gray-600 text-base">
                    Choose your preferred meeting type and let's get started
                  </p>
                </div>

                {/* Consultant Profile */}
                <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl p-4 mb-8">
                  <img 
                    src={sarahImage} 
                    alt="Sarah Johnson" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-[#232323]">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">Senior Business Consultant</p>
                    <p className="text-gray-500 text-xs">• 10+ years experience</p>
                  </div>
                </div>

                {/* Meeting Options Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {/* Phone Call */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <img src={phoneCallIcon} alt="Phone Call" className="w-12 h-12 mx-auto mb-3" />
                    <h5 className="font-semibold text-[#232323] mb-1">Phone Call</h5>
                    <p className="text-gray-600 text-sm">30 min</p>
                  </div>

                  {/* Video Meeting */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <img src={videoIcon} alt="Video Meeting" className="w-12 h-12 mx-auto mb-3" />
                    <h5 className="font-semibold text-[#232323] mb-1">Video Meeting</h5>
                    <p className="text-gray-600 text-sm">30 min</p>
                  </div>

                  {/* In Person */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <img src={inPersonIcon} alt="In Person" className="w-12 h-12 mx-auto mb-3" />
                    <h5 className="font-semibold text-[#232323] mb-1">In Person</h5>
                    <p className="text-gray-600 text-sm">45 min</p>
                  </div>

                  {/* Quick Chat */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <img src={quickChatIcon} alt="Quick Chat" className="w-12 h-12 mx-auto mb-3" />
                    <h5 className="font-semibold text-[#232323] mb-1">Quick Chat</h5>
                    <p className="text-gray-600 text-sm">15 min</p>
                  </div>
                </div>

                {/* Schedule Button */}
                <button className="w-full bg-[#232323] hover:bg-[#333333] text-white font-semibold text-lg py-4 rounded-full transition-colors inline-flex items-center justify-center space-x-3 group">
                  <span>Schedule Your Free Consultation</span>
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1976e7]">500+</div>
                    <div className="text-gray-600 text-sm">Consultations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1976e7]">4.9★</div>
                    <div className="text-gray-600 text-sm">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1976e7]">24hrs</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;