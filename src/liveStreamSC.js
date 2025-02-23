import React from "react";

const liveStreamSC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-2 text-sm">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4">
        {/* Left Section - Team Score */}
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <img src="/rcb-logo.png" alt="RCB" className="w-6 h-6 mr-2" />
            <span className="font-bold text-lg">RCB</span>
            <span className="bg-[#e53e50] px-2 py-1 rounded font-bold text-lg ml-2">3-0 (0.5)</span>
          </div>
          <span className="text-gray-400 mt-1">vs MI</span>
        </div>

        {/* Middle Section - Batsmen Scores */}
        <div className="flex flex-col items-center">
          <span className="font-bold text-[#e53e50]">*KOHLI 2(3)</span>
          <span className="font-bold text-[#e53e50] mt-1">du PLESSIS 1(2)</span>
        </div>

        {/* Right Section - Toss & Bowler Stats */}
        <div className="flex flex-col items-end">
          <div className="flex flex-col items-end">
            <span className="bg-[#023867] px-2 py-1 rounded text-white">TOSS</span>
            <span className="text-white mt-1">MI</span>
          </div>
          <span className="text-[#023867] font-bold mt-2">NABI 0-3(0.5)</span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between px-4 mt-2">
        {/* Left Section - Matchup */}
        <div className="flex-1"></div> {/* Spacer */}

        {/* Middle Section - Match Details */}
        <div className="flex-1 text-center">
          <span className="text-white">TATA IPL 2024 - MATCH 25</span>
        </div>

        {/* Right Section - Team Logo */}
        <div className="flex-1 flex justify-end">
          <img src="/mi-logo.png" alt="MI" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default liveStreamSC;