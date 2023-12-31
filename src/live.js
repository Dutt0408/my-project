import React, { useState, useEffect } from 'react';
import "./Live.css";

const Live = () => {
  const [data, setData] = useState({
    team1: { name: 'E.Eagles', score: '26/1', overs: '(2.2)' },
    team2: { name: 'E.Titans', score: '0/0', overs: '(0)' },
    breakMessage: 'Live',
    newsMessage: 'E.Kings Get Tickets For Finals'
  });

  useEffect(() => {
    const updateData = () => {
      // Simulate updating data manually
      setData(prevData => ({
        ...prevData,
        team1: { ...prevData.team1, score: '106/1' },
        team2: { ...prevData.team2, score: '103/3' }
      }));
    };

    const updateInterval = setInterval(() => {
      updateData(); // Simulate data update at regular intervals
    }, 5000); // Update every 5 seconds (adjust as needed)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(updateInterval);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className='Livesection'>
      <div className="wontoss">SEMI FINAL</div>

      <div className="teamlo">
        <div className="team10">
          <div className="teamname">{data.team1.name}</div>
          <div className="scorer">
            <div className="scorelive">{data.team1.score}</div>
            <div className="Over">{data.team1.overs}</div>
          </div>
        </div>

        <div className="team10">
          <div className="teamname">{data.team2.name}</div>
          <div className="scorer">
            <div className="score">{data.team2.score}</div>
            <div className="Over">{data.team2.overs}</div>
          </div>
        </div>

        <div className="overnews">{data.breakMessage}</div>
        <div className="overnewss">{data.newsMessage}</div>
      </div>
    </div>
  );
};

export default Live;
