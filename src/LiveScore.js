import React from "react";

const LiveScoreWithVideo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-lg p-4">
        <h2 className="text-white text-2xl font-bold text-center mb-4">Pramukh Cup 2025</h2>
        
        {/* Video Container */}
        <div className="relative overflow-hidden rounded-xl border-4 border-gray-700">
          <iframe
            className="w-full h-64 sm:h-96 pointer-events-none"
            src="https://www.youtube.com/embed/vTtCVo2YJOw?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1"
            title="YouTube Live Stream"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Score Section */}
        <div className="mt-6 bg-gray-700 p-4 rounded-lg text-white text-center">
          <h3 className="text-lg font-semibold">Live Score</h3>
         
        </div>
      </div>
    </div>
  );
};

export default LiveScoreWithVideo;
