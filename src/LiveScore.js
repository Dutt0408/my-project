import React from "react";

const LiveScoreWithVideo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 border border-gray-300">
        <h2 className="text-gray-900 text-2xl font-bold text-center mb-4">Pramukh Cup 2025</h2>
        
        {/* Video Container */}
        <div className="relative overflow-hidden rounded-xl border-2 border-gray-300">
          {/* Invisible overlay to prevent hover effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>

          <iframe
            className="w-full h-64 sm:h-96 pointer-events-none"
            src="https://www.youtube.com/embed/vTtCVo2YJOw?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1"
            title="Live Stream"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Score Section */}
        <div className="mt-6 bg-gray-200 p-4 rounded-lg text-gray-900 text-center shadow-md">
          <h3 className="text-lg font-semibold">Live Score</h3>
          <p className="text-gray-700 mt-2">Updating...</p>
        </div>
      </div>
    </div>
  );
};

export default LiveScoreWithVideo;
