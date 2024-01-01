import React from 'react';
import './Live.css';

function Live() {
  return (
    <div className='Livesection'>
      <div className="wontoss"> FINAL</div>
      
      <div className="teamlo">
        <div className="team10">
          <div className="teamname">E.Titans</div> 
          <div className="scorer">
            <div className="scorelive">Live On Video</div>
            <div className="Over">(8)</div>
          </div>
        </div>
  
        <div className="team10">
          <div className="teamname">E.Kings</div> 
          <div className="scorer">
            <div className="score">102/6</div>
            <div className="Over">(12)</div>
          </div>
        </div>
  
        <div className="overnews"> Live  </div>
        <div className="overnewss"> 103 to win !!! </div>
      </div>
      
      {/* Updated YouTube video embed with autoplay and border */}
      <div style={{ border: '5px solid #ccc', padding: '10px' }}>
        <iframe 
          
          title="YouTube Video"
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/6n6Kz1FcDuQ?autoplay=1" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Live;
