import React from 'react';
import './Home.css';
import logoHome from './images/Homepage.png';
import BAPScharities from './images/Sponsors/BAPSCharities.png';

function Home() {
  console.log('Home component loaded');

  return (
    <div className="homepage">
      <img className="PClogo" src={logoHome} alt="BAPS Charities Logo" />

      <h1 className="Oiscthead htexts">
        Welcome to the annual <strong>BAPS Charities Pramukh Cup 2025 Cricket Tournament</strong>
      </h1>

      <div>
        <p className="htexts">
          The tournament will be held on: <strong>February 14th to 17th.</strong>
        </p>
        <p className="htexts">
          <strong>Venue:</strong> BAPS Swaminarayan Complex, 61 Claireville Dr., Toronto
        </p>
      </div>

      <div className="paragraph">
        This tournament strives to engage youth in a spirit of equity, diversity, and inclusion while promoting an active lifestyle. It also brings volunteers together for their selfless service to the community.
      </div>

      <div className="paragraph">
        BAPS Charities is a non-profit international charity organization committed to sincerely serving the world by caring for individuals, families, and communities. BAPS Charities engages volunteers in the service of local communities across five areas: health, education, humanitarian aid, community empowerment, and environmental initiatives.
      </div>

      <div className="paragraph">
        Throughout the year, BAPS Charities in Canada hosts health fairs, walkathons, health education seminars, disaster relief operations, blood donation drives, and much more. For additional information on BAPS Charities, please visit{' '}
        <a href="https://www.bapscharities.org/canada/" target="_blank" rel="noopener noreferrer">
          www.bapscharities.org/canada/
        </a>.
      </div>

      <img className="bapsCh" src={BAPScharities} alt="BAPS Charities" />
    </div>
  );
}

export default Home;
