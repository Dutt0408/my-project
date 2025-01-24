import React from 'react';
import HomepageMobile from './images/HomepageMobile.png';
import HomepageDesktop from './images/HomepageDesktop.png';
import BAPScharities from './images/Sponsors/BAPSCharities.png';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Mobile view */}
      <img
        className="w-full h-auto object-cover mb-6 md:hidden"
        src={HomepageMobile}
        alt="Homepage Mobile"
      />

      {/* Desktop view */}
      <img
        className="w-full h-auto object-cover mb-6 hidden md:block"
        src={HomepageDesktop}
        alt="Homepage Desktop"
      />

      <h1 className="text-red-600 text-xl md:text-2xl font-bold mb-4 text-center">
        Welcome to the annual <strong>BAPS Charities Pramukh Cup 2025 Cricket Tournament</strong>
      </h1>

      <div className="text-center mb-6">
        <p className="text-gray-900 text-base md:text-lg">
          The tournament will be held on: <strong>February 14th to 17th.</strong>
        </p>
        <p className="text-gray-900 text-base md:text-lg">
          <strong>Venue:</strong> BAPS Swaminarayan Complex, 61 Claireville Dr., Toronto
        </p>
      </div>

      <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-4">
        This tournament strives to engage youth in a spirit of equity, diversity, and inclusion while promoting an active lifestyle. It also brings volunteers together for their selfless service to the community.
      </div>

      <div className="max-w-2xl text-center text-gray-800 text-sm md:text-base leading-relaxed mb-4">
        BAPS Charities is a non-profit international charity organization committed to sincerely serving the world by caring for individuals, families, and communities. BAPS Charities engages volunteers in the service of local communities across five areas: health, education, humanitarian aid, community empowerment, and environmental initiatives.
      </div>

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

      <img
        className="max-w-xs md:max-w-sm h-auto mt-8 mb-8"
        src={BAPScharities}
        alt="BAPS Charities"
      />
    </div>
  );
}

export default Home;
