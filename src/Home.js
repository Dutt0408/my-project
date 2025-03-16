import React, { useEffect, useState, useRef } from 'react';

function FadeInOnScroll({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

function Home() {
  useEffect(() => {
    // Scroll to the top of the page on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Mobile view */}
      <FadeInOnScroll>
        <img
          className="w-full h-auto object-cover mb-6 md:hidden"
          src="https://swamishreeji.com/YogiCupImages/HomepageMobile.png"
          alt="Homepage Mobile"
          loading='lazy'
        />
      </FadeInOnScroll>

      {/* Desktop view */}
      <FadeInOnScroll>
        <img
          className="w-full h-auto object-cover mb-6 hidden md:block"
          src="https://swamishreeji.com/YogiCupImages/HomepageDesktop.png"
          alt="Homepage Desktop"
        />
      </FadeInOnScroll>

      {/* Header */}
      <FadeInOnScroll>
        <h1 className="text-red-600 text-xl md:text-2xl font-bold mb-4 text-center">
          Jai Swaminarayan! Welcome to the <strong> Canada Yogi Cup 2025 Web App. </strong>
        </h1>
      </FadeInOnScroll>

      {/* Tournament Details */}
      <FadeInOnScroll>
        <div className="text-center mb-6">
          <p className="text-gray-900 text-base md:text-lg">
          We will be using this app to share important information and details of the event and keep track of our tournament. <br></br>
          This Yogi Cup spans a couple of days, and it will help us build long-lasting memories and new friendships! 
          </p> 
        </div>
      </FadeInOnScroll>

      {/* Section 1 */}
      <FadeInOnScroll>
        <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-4">
        Yogi Cup will teach us the key values of Samp, Suradhbhav and Ekta as per the wish of Param Pujya Mahant Swami Maharaj!  
        </div>
      </FadeInOnScroll>

      {/* Section 2 */}
      <FadeInOnScroll>
        <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-4">
        About 160 kishores, yuvaks, and karyakars will be coming to our Yogi Cup this year to build this Samp, Suhradbhav, and Ekta!  
        </div>
      </FadeInOnScroll>

      {/* Section 3 */}
      <FadeInOnScroll>
        <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-4">
        Please take a look at the app to learn more about our tournament and be sure to share this app with your friends who are also coming to Yogi Cup so that they too can stay updated with the latest information!
        </div>
      </FadeInOnScroll>

      
    </div>
  );
}

export default Home;
