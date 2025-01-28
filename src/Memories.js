import React, { useEffect, useRef } from "react";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FHomeMobileView?alt=media&token=fbf1e8c0-c29d-4c7c-b0a9-65d05b385c53",
    link: "https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7",
    link: "https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg",
    link: "https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/",
  },
];

const Memories = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      if (!scrollContainer.current) return;

      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Move container left/right instead of up/down
      scrollContainer.current.scrollLeft += deltaY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#efecdb] overflow-hidden">
      {/* Fake vertical scroll to trigger horizontal movement */}
      <div className="absolute top-0 left-0 w-1 h-[300vh]"></div>

      {/* Horizontal scrolling container */}
      <div
        ref={scrollContainer}
        className="flex gap-6 w-full h-full overflow-x-auto overflow-y-hidden whitespace-nowrap p-10 snap-x snap-mandatory scroll-smooth"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="shrink-0 w-[80vw] max-w-md relative transform transition-transform duration-500 hover:scale-105 snap-center"
          >
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={`Memory ${index}`}
                className="w-full h-auto rounded-lg shadow-lg saturate-[40%] sepia-[30%] hue-rotate-[5deg] scroll-reveal"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Title */}
      <h1 className="absolute bottom-4 left-4 text-lg text-[#5D4037] font-medium">
        Memories of Pramukh Cup 2025
      </h1>
    </div>
  );
};

export default Memories;
