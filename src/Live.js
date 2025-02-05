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
  const [isLoading, setIsLoading] = useState(false);
  const [teamNames, setTeamNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchLiveMatchData();
      if (data) {
        setMatchData(data);
        const names = Object.keys(data);
        setTeamNames(names);
        setTeam(names[0] || "");
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (!matchData) {
    return <p>Loading match data...</p>;
  }

  const handleTeamChange = (teamName) => {
    setIsLoading(true);
    setTimeout(() => {
      setTeam(teamName);
      setIsLoading(false);
    }, 400);
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

  const bowlingData = teamData.players
    .filter((player) => player.bowling.overs > 0)
    .map((player) => ({
      name: player.name,
      ...player.bowling,
    }));

  const teamTotalRuns = calculateTotalRuns(battingData);
  const teamTotalBalls = calculateTotalBalls(battingData);
  const teamTotalFours = calculateTotalFours(battingData);
  const teamTotalSixes = calculateTotalSixes(battingData);

  const opponentTotalRuns = calculateTotalRuns(
    opponentData.players.map((player) => ({
      name: player.name,
      ...player.batting,
    }))
  );

  const teamWickets = teamData.Wrickets[0].Team1Wricket;
  const teamOvers = teamData.Wrickets[0].Team1Overs;
  const opponentWickets = opponentData.Wrickets[0].Team2Wricket;
  const opponentOvers = opponentData.Wrickets[0].Team2Overs;

  return (
    <div className="p-4 bg-gray-100">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
        </div>
      )}

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
            <td className="px-2 py-2">{teamTotalRuns}</td>
            <td className="px-2 py-2">{teamTotalBalls}</td>
            <td className="px-2 py-2">{teamTotalFours}</td>
            <td className="px-2 py-2">{teamTotalSixes}</td>
            <td className="px-2 py-2"></td>
          </tr>
        </tbody>
      </table>

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
    </div>
  );
};

export default Scorecard;