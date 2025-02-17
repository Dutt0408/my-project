import React from "react";

const LiveScoreWithVideo = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gray-100 p-0 m-0">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 border border-gray-300">
        <h2 className="text-gray-900 text-2xl font-bold text-center mb-2">
          Pramukh Cup 2025
        </h2>

        {/* Video Container */}
        <div className="relative overflow-hidden rounded-xl border-2 border-gray-300">
          {/* Invisible overlay to prevent hover effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>

          <iframe
  className="w-full h-64 sm:h-96"
src="https://www.youtube.com/embed/tw7xSUO3Q_Y?autoplay=1&mute=1"
  title="Live Stream"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>


        </div>

        {/* Live Score Section - Reduced extra margin */}
        <div className="mt-2 bg-gray-200 p-4 rounded-lg text-gray-900 text-center shadow-md">
          <h3 className="text-lg font-semibold">Live Score</h3>
          
        </div>
      </div>
    </div>
  );
};

export default LiveScoreWithVideo;
