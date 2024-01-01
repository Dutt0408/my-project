import React, { useState } from 'react';
import "./Live.css";

function Live() {
  // Initialize state for scores
  const [scores, setScores] = useState({
    team1: { runs: 41, wickets: 2, overs: 4.4 },
    team2: { runs: 0, wickets: 0, overs: 0 },
  });

  // Function to manually update scores
  const manualUpdateScores = () => {
    // Update the scores state
    setScores({
      team1: { runs: 5, wickets: 1, overs: 2 },
      team2: { runs: 0, wickets: 0, overs: 0 },
    });
  };

  return (
    <div className='Livesection'>
      <div className="wontoss">SEMI FINAL</div>
      <div className="teamlo">
        <div className="team10">
          <div className="teamname">E.Kings</div>
          <div className="scorer">
            <div className="scorelive">{scores.team1.runs}/{scores.team1.wickets}</div>
            <div className="Over">({scores.team1.overs})</div>
          </div>
        </div>
        <div className="team10">
          <div className="teamname">E.Titans</div>
          <div className="scorer">
            <div className="score">{scores.team2.runs}/{scores.team2.wickets}</div>
            <div className="Over">({scores.team2.overs})</div>
          </div>
        </div>
        <div className="overnews">Live</div>
        <div className="overnewss"></div>
        <button onClick={manualUpdateScores}></button>
      </div>
    </div>
  );
}

export default Live;
