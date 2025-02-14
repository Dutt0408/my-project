import React, { useState, useEffect } from "react";
import { fetchLiveMatchData } from "./firebase"; // Adjust the import path

const calculateStrikeRate = (runs, balls) => {
  return balls > 0 ? ((runs / balls) * 100).toFixed(2) : 0;
};

const calculateTotalRuns = (battingData) => {
  return battingData.reduce((total, player) => total + (player.runs || 0), 0);
};

const calculateTotalBalls = (battingData) => {
  return battingData.reduce((total, player) => total + (player.balls || 0), 0);
};

const calculateTotalFours = (battingData) => {
  return battingData.reduce((total, player) => total + (player.fours || 0), 0);
};

const calculateTotalSixes = (battingData) => {
  return battingData.reduce((total, player) => total + (player.sixes || 0), 0);
};

const Scorecard = () => {
  const [matchData, setMatchData] = useState(null);
  const [team, setTeam] = useState("");
  const [teamNames, setTeamNames] = useState([]);
  const [teamTotalRuns, setTeamTotalRuns] = useState(0);
  const [teamWickets, setTeamWickets] = useState(0);
  const [teamOvers, setTeamOvers] = useState(0);
  const [opponentTotalRuns, setOpponentTotalRuns] = useState(0);
  const [opponentWickets, setOpponentWickets] = useState(0);
  const [opponentOvers, setOpponentOvers] = useState(0);
  const [teamExtraRuns, setTeamExtraRuns] = useState([]);
const [opponentExtraRuns, setOpponentExtraRuns] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await fetchLiveMatchData();
    if (data) {
      setMatchData(data);
      const names = Object.keys(data);
      setTeamNames(names);
      setTeam((prevTeam) => (names.includes(prevTeam) ? prevTeam : names[0] || ""));

      // Fetch total runs, wickets, and overs for the selected team
      const selectedTeamData = data[team || names[0]];
      if (selectedTeamData && selectedTeamData.Wickets && selectedTeamData.Wickets[0]) {
        setTeamTotalRuns(selectedTeamData.Wickets[0].Total || 0);
        setTeamWickets(selectedTeamData.Wickets[0].Wicket || 0);
        setTeamOvers(selectedTeamData.Wickets[0].Overs || 0);
        setTeamExtraRuns(selectedTeamData.Wickets[0].ExtraRuns || []);
      }

      // Fetch total runs, wickets, and overs for the opponent team
      const opponentTeam = names.find((t) => t !== (team || names[0]));
      const opponentTeamData = data[opponentTeam];
      if (opponentTeamData && opponentTeamData.Wickets && opponentTeamData.Wickets[0]) {
        setOpponentTotalRuns(opponentTeamData.Wickets[0].Total || 0);
        setOpponentWickets(opponentTeamData.Wickets[0].Wicket || 0);
        setOpponentOvers(opponentTeamData.Wickets[0].Overs || 0);
        setOpponentExtraRuns(opponentTeamData.Wickets[0].ExtraRuns || []);
      }
    }
  };

  fetchData();
  const interval = setInterval(fetchData, 400); // Fetch data every 400ms
  return () => clearInterval(interval); // Cleanup on unmount
}, [team]);
  if (!matchData) {
    return <p>Loading match data...</p>;
  }

  const handleTeamChange = (teamName) => {
    setTeam(teamName);
  };

  const teamData = matchData[team];
  const opponentTeam = teamNames.find((t) => t !== team);
  const opponentData = matchData[opponentTeam];

  if (!teamData || !opponentData) {
    return <p>Error: Team data not found</p>;
  }

  const battingData = teamData.players.map((player) => ({
    name: player.name,
    ...player.batting,
    isPlaying: player.batting.isPlaying || false,
    dismissal: player.batting.dismissal || "",
  }));

  // Fetch opponent's bowling data and filter bowlers with overs > 0.1
  const bowlingData = opponentData.players
    .filter((player) => player.bowling.overs > 0.1)
    .map((player) => ({
      name: player.name,
      ...player.bowling,
    }));

    const renderExtraRuns = (extraRuns) => {
      return extraRuns.map((extra, index) => (
        <div key={index} className="text-sm text-gray-700">
          {extra.runs > 0 ? `+${extra.runs}` : extra.runs} Runs  &rarr; {extra.reason}
        </div>
      ));
    };
    
    return (
      <div className="p-4 bg-gray-100">
        {/* Team Score Display */}
        <div className="flex items-center justify-center space-x-8 mb-6">
          <div className="flex flex-col items-center">
            <img
              src={teamData.profileImage}
              alt={team}
              className="w-16 h-16 rounded-full"
            />
            <span className="text-lg font-semibold mt-2">{team}</span>
            <span className="text-lg font-semibold">
              {teamTotalRuns}/{teamWickets} ({teamOvers})
            </span>
          </div>
    
          <span className="text-xl font-bold">VS</span>
    
          <div className="flex flex-col items-center">
            <img
              src={opponentData.profileImage}
              alt={opponentTeam}
              className="w-16 h-16 rounded-full"
            />
            <span className="text-lg font-semibold mt-2">{opponentTeam}</span>
            <span className="text-lg font-semibold">
              {opponentTotalRuns}/{opponentWickets} ({opponentOvers})
            </span>
          </div>
        </div>
    
        {/* Team Selection Tabs */}
        <div className="flex justify-center mb-6">
          <div className="w-64 relative">
            <div className="flex justify-between">
              {teamNames.map((teamName) => (
                <div
                  key={teamName}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleTeamChange(teamName)}
                >
                  <span
                    className={`text-sm font-semibold ${
                      team === teamName ? "text-blue-900" : "text-gray-700"
                    }`}
                  >
                    {teamName}
                  </span>
                  {team === teamName && (
                    <div className="w-full h-1 bg-blue-900 mt-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    
        {/* Batting Table */}
        <table className="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-2 py-2 text-left">Batsman</th>
              <th className="px-2 py-2 text-left">R</th>
              <th className="px-2 py-2 text-left">B</th>
              <th className="px-2 py-2 text-left">4s</th>
              <th className="px-2 py-2 text-left">6s</th>
              <th className="px-2 py-2 text-left">SR</th>
            </tr>
          </thead>
          <tbody>
            {battingData.map((player, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors border-b border-gray-200"
              >
                <td className="px-2 py-2">
                  <div>
                    {player.name}
                    {player.isPlaying && (
                      <span className="text-blue-900 font-bold ml-1">*</span>
                    )}
                  </div>
                  {!player.isPlaying && player.dismissal && (
                    <div className="text-xs text-gray-600 mt-1">
                      {player.dismissal}
                    </div>
                  )}
                </td>
                <td className="px-2 py-2">{player.runs}</td>
                <td className="px-2 py-2">{player.balls}</td>
                <td className="px-2 py-2">{player.fours}</td>
                <td className="px-2 py-2">{player.sixes}</td>
                <td className="px-2 py-2">
                  {calculateStrikeRate(player.runs, player.balls)}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-200 font-semibold">
              <td className="px-2 py-2">Total</td>
              <td className="px-2 py-2">{calculateTotalRuns(battingData)}</td>
              <td className="px-2 py-2">{calculateTotalBalls(battingData)}</td>
              <td className="px-2 py-2">{calculateTotalFours(battingData)}</td>
              <td className="px-2 py-2">{calculateTotalSixes(battingData)}</td>
              <td className="px-2 py-2"></td>
            </tr>
          </tbody>
        </table>
    
        {/* Bowling Table */}
        <table className="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-2 py-2 text-left">Bowler</th>
              <th className="px-2 py-2 text-left">Overs</th>
              <th className="px-2 py-2 text-left">Runs</th>
              <th className="px-2 py-2 text-left">Wickets</th>
            </tr>
          </thead>
          <tbody>
            {bowlingData.map((bowler, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors border-b border-gray-200"
              >
                <td className="px-2 py-2">{bowler.name}</td>
                <td className="px-2 py-2">{bowler.overs}</td>
                <td className="px-2 py-2">{bowler.runs}</td>
                <td className="px-2 py-2">{bowler.wickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
    
        {/* Extra Runs Information */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Extra Run Details</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">{team} Team</h4>
            {renderExtraRuns(teamExtraRuns)}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h4 className="font-semibold mb-2">{opponentTeam} Team</h4>
            {renderExtraRuns(opponentExtraRuns)}
          </div>
        </div>
      </div>
    );
};

export default Scorecard;