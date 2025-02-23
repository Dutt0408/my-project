import React, { useState, useEffect } from "react";

const LiveScoreWithVideo = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 p-0 m-0">
      {/* Show overlay if in portrait mode */}
      {isPortrait && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center text-white z-50">
          <p className="text-2xl font-bold">Please rotate your device to landscape mode</p>
        </div>
      )}

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 border border-gray-300">
        {!isSmallScreen && (
          <h2 className="text-gray-900 text-2xl font-bold text-center mb-2">
            Pramukh Cup 2025
          </h2>
        )}

        {/* Video Container */}
        <div className="relative overflow-hidden rounded-xl border-2 border-gray-300">
          <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>

          {/* First Full-Sized iFrame */}
          <iframe
            className="w-full h-64 sm:h-96"
            src="https://www.youtube.com/embed/EfKocxNVTNA?autoplay=1&mute=1"
            title="Live Stream"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          {/* Wrapper to Crop the Second iFrame */}
          <div className="relative w-full h-16 sm:h-20 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-96"
              src="https://www.youtube.com/embed/o0UecTMiUWs?autoplay=1&mute=1"
              title="Live Stream"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScoreWithVideo;
