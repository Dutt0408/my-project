import React, { useState, useEffect } from 'react';
import "./Live.css";

function Live() {
  const [scores, setScores] = useState({
    team1: { runs: 70, wickets: 5, overs: 8 },
    team2: { runs: 0, wickets: 0, overs: 0 },
  });

  useEffect(() => {
    // Connect to the WebSocket server (replace 'ws://localhost:8080' with your server's WebSocket URL)
    const socket = new WebSocket('ws://http://localhost:3000/Live');

    // Listen for messages from the WebSocket server
    socket.addEventListener('message', (event) => {
      const newScores = JSON.parse(event.data);
      setScores(newScores);
    });

    // Clean up the WebSocket connection on component unmount
    return () => socket.close();
  }, []);

  const manualUpdateScores = () => {
    // Simulate sending an update to the server
    const updatedScores = {
      team1: { runs: 69, wickets: 2, overs: 4.4 },
      team2: { runs: 0, wickets: 0, overs: 0 },
    };

    // Update the local state immediately for a responsive UI
    setScores(updatedScores);

    // Simulate sending the update to the server
    // In a real application, you would send this data to the server using WebSocket.send()
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
        <button onClick={manualUpdateScores}>Manual Update</button>
      </div>
    </div>
  );
}

export default Live;
