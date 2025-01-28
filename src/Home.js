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
          src="https://34.54.58.73/images/HomeMobileView"
          alt="Homepage Mobile"
          loading='lazy'
        />
      </FadeInOnScroll>

      {/* Desktop view */}
      <FadeInOnScroll>
        <img
          className="w-full h-auto object-cover mb-6 hidden md:block"
          src="https://34.54.58.73/images/HomeDesktopView"
          alt="Homepage Desktop"
        />
      </FadeInOnScroll>

      {/* Header */}
      <FadeInOnScroll>
        <h1 className="text-red-600 text-xl md:text-2xl font-bold mb-4 text-center">
          Welcome to the annual <strong>BAPS Charities Pramukh Cup 2025 Cricket Tournament</strong>
        </h1>
      </FadeInOnScroll>

      {/* Tournament Details */}
      <FadeInOnScroll>
        <div className="text-center mb-6">
          <p className="text-gray-900 text-base md:text-lg">
            The tournament will be held on: <strong>February 14th to 17th.</strong>
          </p>
          <p className="text-gray-900 text-base md:text-lg">
            <strong>Venue:</strong> BAPS Swaminarayan Complex, 61 Claireville Dr., Toronto
          </p>
        </div>
      </FadeInOnScroll>

      {/* Section 1 */}
      <FadeInOnScroll>
        <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-4">
          This tournament strives to engage youth in a spirit of equity, diversity, and inclusion while promoting an active lifestyle. It also brings volunteers together for their selfless service to the community.
        </div>
      </FadeInOnScroll>

      {/* Section 2 */}
      <FadeInOnScroll>
        <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-4">
          BAPS Charities is a non-profit international charity organization committed to sincerely serving the world by caring for individuals, families, and communities. BAPS Charities engages volunteers in the service of local communities across five areas: health, education, humanitarian aid, community empowerment, and environmental initiatives.
        </div>
      </FadeInOnScroll>

      {/* Section 3 */}
      <FadeInOnScroll>
        <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-6">
          Throughout the year, BAPS Charities in Canada hosts health fairs, walkathons, health education seminars, disaster relief operations, blood donation drives, and much more. For additional information on BAPS Charities, please visit{' '}
          <a
            href="https://www.bapscharities.org/canada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            www.bapscharities.org/canada/
          </a>.
        </div>
      </FadeInOnScroll>

      {/* Sponsor Logo */}
      <FadeInOnScroll>
        <img
          className="max-w-xs md:max-w-sm h-auto mt-8 mb-8"
          src="https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7"
          alt="BAPS Charities"
        />
      </FadeInOnScroll>
    </div>
  );
}

export default Home;
