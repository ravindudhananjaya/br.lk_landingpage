import React from 'react';

const NameGenerator = () => {
  return (
    <div className="flex flex-col items-center rounded-[24px] bg-[#FFFDFA] font-sans font-medium
                    p-6 sm:p-8 lg:p-[50px] gap-10 sm:gap-16 lg:gap-[80px] w-full max-w-6xl mx-auto">

      {/* Input Fields Container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-[70px] px-2 sm:px-4 lg:px-[10px]">

        {/* Business Industry */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm md:text-base text-[#232323]">Business Industry</label>
          <input
            type="text"
            placeholder="e.g. Technology, Restaurant"
            className="w-full h-12 md:h-[50px] px-4 md:px-6 rounded-[8px] border border-[#C0C9D3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0061FE]/40 focus:border-[#0061FE] text-sm md:text-base placeholder:text-[#9aa5b1]"
            aria-label="Business industry"
          />
        </div>

        {/* Keywords */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm md:text-base text-[#232323]">Keywords</label>
          <input
            type="text"
            placeholder="e.g. Smart, Digital, Premium"
            className="w-full h-12 md:h-[50px] px-4 md:px-6 rounded-[8px] border border-[#C0C9D3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0061FE]/40 focus:border-[#0061FE] text-sm md:text-base placeholder:text-[#9aa5b1]"
            aria-label="Brand keywords"
          />
        </div>

        {/* Style Preference */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm md:text-base text-[#232323]">Style Preference</label>
          <select
            className="w-full h-12 md:h-[50px] px-4 md:px-6 rounded-[8px] border border-[#C0C9D3] bg-white focus:outline-none focus:ring-2 focus:ring-[#0061FE]/40 focus:border-[#0061FE] text-sm md:text-base"
            aria-label="Style preference"
            defaultValue="modern"
          >
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="playful">Playful</option>
          </select>
        </div>
      </div>

      {/* Generate Button */}
      <div className="w-full flex justify-center px-2 sm:px-0">
        <button className="w-full sm:w-auto text-white px-8 py-3 rounded-[8px] bg-[#0061FE] hover:bg-[#004ecb] active:bg-[#0045b4] transition-colors text-sm md:text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0061FE]">
          Generate Business Name
        </button>
      </div>
    </div>
  );
};

export default NameGenerator;
