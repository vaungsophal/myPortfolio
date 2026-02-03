import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-xl bg-[#161616] border border-white/5 hover:border-accent/20 transition-all duration-500 flex flex-col items-center justify-center gap-4 hover:scale-105 cursor-pointer">
      <div className="relative">
        <div className="absolute -inset-2 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <img
          src={TechStackIcon}
          alt={`${Language} icon`}
          className="relative h-12 w-12 md:h-14 md:w-14 transition-all duration-500"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <span className="text-grayText font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 