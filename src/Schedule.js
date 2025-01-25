import React, { useState } from 'react';
import Titleimage from './images/Titleimage.png';

export default function Schedule() {
  // Updated data with correct results based on scores
  const data = [
    {
      id: 1,
      match: "Pradeep's 7 vs Yogesh's 7",
      date: "2025-01-20",
      result: "Pradeep's 7 won by 5 runs.",
      status: "Past",
      teamAScore: 168,
      teamBScore: 160,
      teamADetails: { batsmen: ["Player 1: 45", "Player 2: 50"], bowlers: ["Player A: 3/20"] },  // Example scorecard
      teamBDetails: { batsmen: ["Player X: 40", "Player Y: 60"], bowlers: ["Player B: 2/30"] },
    },
    {
      id: 2,
      match: "Harshil's 8 vs Jayesh's 7",
      date: "2025-01-22",
      result: "Harshil's 7 won by 4 wickets.",
      status: "Past",
      teamAScore: 129,
      teamBScore: 128,
      teamADetails: { batsmen: ["Player 1: 30", "Player 2: 40"], bowlers: ["Player A: 2/25"] },
      teamBDetails: { batsmen: ["Player X: 35", "Player Y: 45"], bowlers: ["Player B: 3/40"] },
    },
    {
      id: 3,
      match: "Parth's 7 vs Pavan's 7",
      date: "2025-01-24",
      status: "Upcoming",
      teamAScore: 76,
      teamBScore: 79,
    },
    {
      id: 4,
      match: "Nehanshu's 7 vs Rohan's 7",
      date: "2025-01-25",
      status: "Live",
      teamAScore: 4,
      teamBScore: 0,
      overs: "1.2",
      toss: "Nehanshu's 7",
      elected: "bat",
    },
    {
      id: 5,
      match: "Yogesh's 7 vs Purvesh's 7",
      date: "2025-01-26",
      status: "Upcoming",
      teamAScore: null,
      teamBScore: null,
    },
  ];

  // Tabs state
  const [activeTab, setActiveTab] = useState("Live");
  const [expandedMatchId, setExpandedMatchId] = useState(null);

  // Filter data based on active tab
  const filteredData = data.filter((match) => match.status === activeTab);
  const liveMatch = data.find((match) => match.status === "Live");

  const toggleMatchDetails = (id) => {
    setExpandedMatchId(expandedMatchId === id ? null : id); // Toggle match details
  };

  return (
    <div>
      <div className="relative flex justify-center items-center m-0 p-0">
        <img src={Titleimage} alt="Title" className="w-full h-auto object-cover" />
        <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#023867] underline"
            style={{ textDecorationColor: "#e53e50" }}
          >
            SCHEDULE
          </h2>
        </div>
      </div>

      <div className="p-4 max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-4">
          {[{ label: "Past", value: "Past" }, { label: "Live", value: "Live" }, { label: "Upcoming", value: "Upcoming" }].map((tab) => (
            <button
              key={tab.value}
              className={`px-6 py-2 font-semibold text-sm rounded-full border-2 transition-all shadow-md ${
                activeTab === tab.value
                  ? "bg-blue-900 text-white border-blue-600"
                  : "bg-white text-blue-800 border-blue-600 hover:bg-blue-100"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {activeTab === "Live" && liveMatch ? (
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="text-center font-semibold text-gray-500 mb-2">Pramukh Cup 2025</h3>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700 text-sm">{liveMatch.date}, 10 Overs</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs rounded-full animate-pulse">LIVE</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-green-700">{liveMatch.match.split(" vs ")[0]}</p>
                  <p className="text-sm text-gray-500">{liveMatch.toss} won the toss and elected to {liveMatch.elected}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-900">{liveMatch.teamAScore}/{liveMatch.teamBScore}</p>
                  <p className="text-sm text-gray-500">({liveMatch.overs})</p>
                </div>
              </div>
            </div>
          ) : activeTab === "Live" ? (
            <p className="text-gray-500 text-center">No live matches currently.</p>
          ) : filteredData.length > 0 ? (
            filteredData.map((match) => (
              <div
                key={match.id}
                className={`p-4 border rounded-md shadow-sm hover:shadow-md transition upcoming-match`}
              >
                <h3 className="font-bold text-lg">{match.match}</h3>
                <p className="text-gray-600">Date: {match.date}</p>
                {match.result && <p className="text-gray-700 font-semibold mt-2">{match.result}</p>}

                {/* Expandable section for past matches */}
                {activeTab === "Past" && (
                  <button
                    className="mt-2 text-blue-600"
                    onClick={() => toggleMatchDetails(match.id)}
                  >
                    {expandedMatchId === match.id ? "Hide Scorecard" : "View Scorecard"}
                  </button>
                )}

                {/* Show scorecard if the match is expanded */}
                {expandedMatchId === match.id && (
                  <div className="mt-4 p-4 border rounded-md shadow-sm bg-gray-50">
                    <h4 className="text-lg font-semibold">Scorecard</h4>
                    <div className="mt-2">
                      <h5 className="font-bold">Team A</h5>
                      <p>Batsmen: {match.teamADetails.batsmen.join(", ")}</p>
                      <p>Bowlers: {match.teamADetails.bowlers.join(", ")}</p>
                    </div>
                    <div className="mt-2">
                      <h5 className="font-bold">Team B</h5>
                      <p>Batsmen: {match.teamBDetails.batsmen.join(", ")}</p>
                      <p>Bowlers: {match.teamBDetails.bowlers.join(", ")}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No matches found.</p>
          )}
        </div>
      </div>
      <style>
        {`
        @keyframes slideIn {
          from {
            transform: translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .upcoming-match {
          animation: slideIn 0.5s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
}
