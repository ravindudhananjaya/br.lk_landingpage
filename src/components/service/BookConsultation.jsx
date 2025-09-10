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
    <section className="relative bg-[#0061FE] overflow-hidden px-4 lg:px-8">
      {/* Diagonal Shape */}
      <div className="absolute inset-0"></div>

      <div className="max-w-[1450px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8 lg:py-16">
          {/* Left Side - Blue Content */}
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Expert Consultation Badge */}
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <img src={expertConsultationIcon} alt="Expert Consultation" className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="text-blue-200 font-medium text-sm lg:text-base">Expert Consultation</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif font-normal text-[30px]  lg:text-[40px] leading-tight">
              Ready to Transform Your<br />
              Business Strategy?
            </h2>

            {/* Description */}
            <p className="text-blue-100 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Connect with our expert consultants and unlock your business potential. Get personalized insights, strategic guidance, and actionable solutions tailored to your unique challenges.
            </p>

            {/* Features List */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3 lg:space-x-4 justify-center lg:justify-start">
                <img src={rightIcon} alt="Check" className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="text-base lg:text-lg">Free 30-minute strategy consultation</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4 justify-center lg:justify-start">
                <img src={rightIcon} alt="Check" className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="text-base lg:text-lg">Personalized business analysis</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4 justify-center lg:justify-start">
                <img src={rightIcon} alt="Check" className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="text-base lg:text-lg">Expert recommendations</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4 justify-center lg:justify-start">
                <img src={rightIcon} alt="Check" className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="text-base lg:text-lg">No commitment required</span>
              </div>
            </div>
          </div>

          {/* Right Side - Responsive Card Container */}
          <div className="relative w-full flex justify-center items-center min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
            {/* Mobile/Tablet: Straight Card */}
            <div className="lg:hidden bg-white rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto">
              {/* Card Header */}
              <div className="text-center mb-6">
                <h3 className="font-serif font-normal text-xl sm:text-2xl text-[#232323] mb-2">
                  Book Your Free Consultation
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Choose your preferred meeting type and let's get started
                </p>
              </div>

              {/* Consultant Profile */}
              <div className="flex items-center space-x-3 bg-[#f3ede6] rounded-2xl p-4 mb-6">
                <img
                  src={sarahImage}
                  alt="Sarah Johnson"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="font-normal text-base sm:text-lg text-[#232323]">Sarah Johnson</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Senior Business Consultant</p>
                  <p className="text-gray-500 text-xs">• 10+ years experience</p>
                </div>
              </div>

              {/* Meeting Options Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                {/* Phone Call */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <img src={phoneCallIcon} alt="Phone Call" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <h5 className="font-semibold text-[#232323] mb-1 text-sm sm:text-base">Phone Call</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">30 min</p>
                </div>

                {/* Video Meeting */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <img src={videoIcon} alt="Video Meeting" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <h5 className="font-semibold text-[#232323] mb-1 text-sm sm:text-base">Video Meeting</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">30 min</p>
                </div>

                {/* In Person */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <img src={inPersonIcon} alt="In Person" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <h5 className="font-semibold text-[#232323] mb-1 text-sm sm:text-base">In Person</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">45 min</p>
                </div>

                {/* Quick Chat */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <img src={quickChatIcon} alt="Quick Chat" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <h5 className="font-semibold text-[#232323] mb-1 text-sm sm:text-base">Quick Chat</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">15 min</p>
                </div>
              </div>

              {/* Schedule Button */}
              <button className="w-full px-6 bg-[#232323] hover:bg-[#333333] text-white font-semibold text-sm sm:text-base py-3 sm:py-4 rounded-full transition-colors inline-flex items-center justify-center space-x-2 group mb-6">
                <span>Schedule Your Free Consultation</span>
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-[#0048BD] text-center font-serif text-xl sm:text-2xl font-medium leading-none mb-2">500+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-[#0048BD] text-center font-serif text-xl sm:text-2xl font-medium leading-none mb-2">4.9★</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-[#0048BD] text-center font-serif text-xl sm:text-2xl font-medium leading-none mb-2">24hrs</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Response Time</div>
                </div>
              </div>
            </div>

            {/* Desktop: Original Rotated Card Design */}
            <div className="hidden lg:block w-[1000px] h-[1000px]">
              {/* Angled White Container */}
              <div 
                className="bg-white rounded-3xl shadow-xl w-[1200px] h-[1100px] rotate-[15.411deg]"
                style={{
                  transformOrigin: "center center",
                  padding: "0"
                }}
              >
                {/* Content Container - Counter-rotated to keep content straight */}
                <div 
                  className="absolute transform -rotate-[15.411deg] w-[800px] h-full flex flex-col items-center justify-center p-8 px-10 pr-10"
                  style={{
                    transformOrigin: "center center"
                  }}
                >
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-serif font-normal text-[24px] lg:text-3xl text-[#232323] mb-2">
                      Book Your Free Consultation
                    </h3>
                    <p className="text-gray-600 text-base">
                      Choose your preferred meeting type and let's get started
                    </p>
                  </div>

                  {/* Consultant Profile */}
                  <div className="flex items-center space-x-4 bg-[#f3ede6] rounded-2xl p-4 mb-8 w-[470px]">
                    <img
                      src={sarahImage}
                      alt="Sarah Johnson"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-normal text-lg text-[#232323]">Sarah Johnson</h4>
                      <p className="text-gray-600 text-sm">Senior Business Consultant</p>
                      <p className="text-gray-500 text-xs">• 10+ years experience</p>
                    </div>
                  </div>

                  {/* Meeting Options Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8 w-[470px] space-x-[10px]">
                    {/* Phone Call */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-10 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <img src={phoneCallIcon} alt="Phone Call" className="w-12 h-12 mx-auto mb-3" />
                      <h5 className="font-semibold text-[#232323] mb-1">Phone Call</h5>
                      <p className="text-gray-600 text-sm">30 min</p>
                    </div>

                    {/* Video Meeting */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-10 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <img src={videoIcon} alt="Video Meeting" className="w-12 h-12 mx-auto mb-3" />
                      <h5 className="font-semibold text-[#232323] mb-1">Video Meeting</h5>
                      <p className="text-gray-600 text-sm">30 min</p>
                    </div>

                    {/* In Person */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-10 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <img src={inPersonIcon} alt="In Person" className="w-12 h-12 mx-auto mb-3" />
                      <h5 className="font-semibold text-[#232323] mb-1">In Person</h5>
                      <p className="text-gray-600 text-sm">45 min</p>
                    </div>

                    {/* Quick Chat */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-10 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <img src={quickChatIcon} alt="Quick Chat" className="w-12 h-12 mx-auto mb-3" />
                      <h5 className="font-semibold text-[#232323] mb-1">Quick Chat</h5>
                      <p className="text-gray-600 text-sm">15 min</p>
                    </div>
                  </div>

                  {/* Schedule Button */}
                  <button className="px-[30px] bg-[#232323] hover:bg-[#333333] text-white font-semibold text-lg py-4 rounded-full transition-colors inline-flex items-center justify-center space-x-3 group">
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
                  <div className="grid grid-cols-3 gap-20 mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="self-stretch text-[#0048BD] text-center font-serif text-[32px] font-medium leading-none mb-3">500+</div>
                      <div className="text-gray-600 text-sm">Consultations</div>
                    </div>
                    <div className="text-center">
                      <div className="self-stretch text-[#0048BD] text-center font-serif text-[32px] font-medium leading-none mb-3">4.9★</div>
                      <div className="text-gray-600 text-sm">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="self-stretch text-[#0048BD] text-center font-serif text-[32px] font-medium leading-none mb-3">24hrs</div>
                      <div className="text-gray-600 text-sm">Response Time</div>
                    </div>
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