import React from 'react';

const NameGenerator = () => {
  return (
    <div className="flex p-[50px] flex-col items-center gap-[80px] self-stretch rounded-[24px] bg-[#FFFDFA] font-sans font-medium">
      
      {/* Input Fields Container */}
      <div className="flex flex-col md:flex-row justify-center w-full px-[20px] md:px-[50px] gap-[30px] md:gap-[70px]">
        
        {/* Business Industry */}
        <div className="w-full md:w-auto">
          <label className="block mb-2 text-sm md:text-base">Business Industry</label>
          <input 
            type="text" 
            placeholder="e.g. tech, fashion, food" 
            className="flex w-full h-[50px] px-20 py-[10px] justify-center items-center gap-[100px] rounded-[8px] border border-[#C0C9D3]"
          />
        </div>

        {/* Keywords */}
        <div className="w-full md:w-auto">
          <label className="block mb-2 text-sm md:text-base">Keywords</label>
          <input 
            type="text" 
            placeholder="e.g. tech, fashion, food" 
            className="flex w-full h-[50px] px-20 py-[10px] justify-center items-center gap-[100px] rounded-[8px] border border-[#C0C9D3]"
          />
        </div>

        {/* Style Preference */}
        <div className="w-full md:w-auto">
          <label className="block mb-2 text-sm md:text-base">Style Preference</label>
          <select className="flex w-full h-[50px] px-6 md:px-20 py-[10px] justify-between items-center rounded-[8px] border border-[#C0C9D3]">
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="playful">Playful</option>
          </select>
        </div>
      </div>

      {/* Generate Button */}
      <div className="w-full flex justify-center">
        <button className="text-white flex px-[60px] py-[10px] justify-center items-center gap-[10px] rounded-[8px] bg-[#0061FE]">
          Generate Business Name
        </button>
      </div>
    </div>
  );
};

export default NameGenerator;
