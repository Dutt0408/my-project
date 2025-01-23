import React, { useState } from 'react';
import Titleimage from './images/Titleimage.png';

export default function Schedule() {
  // Updated data with correct results based on scores
  const data = [
    {
      id: 1,
      match: "Anjuman-I-Islam Allana English School vs Modern English School",
      date: "2025-01-20",
      status: "Past",
      teamAScore: 28,
      teamBScore: 160,
    },
    {
      id: 2,
      match: "Modern English School vs Matunga Premier School",
      date: "2025-01-22",
      status: "Past",
      teamAScore: 226,
      teamBScore: 129,
    },
    {
      id: 3,
      match: "IES VN Sule English School vs Anjuman-I-Islam Allana English School",
      date: "2025-01-24",
      status: "Past",
      teamAScore: 76,
      teamBScore: 79,
    },
    {
      id: 4,
      match: "Anjuman-I-Islam Allana English School vs National English School",
      date: "2025-01-25",
      status: "Live",
      teamAScore: 0,
      teamBScore: 0,
    },
    {
      id: 5,
      match: "Matunga Premier School vs Modern English School",
      date: "2025-01-26",
      status: "Upcoming",
      teamAScore: null,
      teamBScore: null,
    },
  ];

  // Determine match result based on scores
  const enhancedData = data.map((match) => {
    if (match.teamAScore !== null && match.teamBScore !== null) {
      if (match.teamAScore > match.teamBScore) {
        match.result = `${match.match.split(' vs ')[0]} won by ${match.teamAScore - match.teamBScore} runs`;
      } else if (match.teamBScore > match.teamAScore) {
        match.result = `${match.match.split(' vs ')[1]} won by ${match.teamBScore - match.teamAScore} runs`;
      } else {
        match.result = "Match Drawn";
      }
    }
    return match;
  });

  // Tabs state
  const [activeTab, setActiveTab] = useState("Live");

  // Filter data based on active tab
  const filteredData = enhancedData.filter((match) => match.status === activeTab);

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
          {[
            { label: "Past", value: "Past" },
            { label: "Live", value: "Live" },
            { label: "Upcoming", value: "Upcoming" },
          ].map((tab) => (
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
          {filteredData.length > 0 ? (
            filteredData.map((match) => (
              <div
                key={match.id}
                className="p-4 border rounded-md shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg">{match.match}</h3>
                <p className="text-gray-600">Date: {match.date}</p>
                {activeTab === "Past" && (
                  <div className="flex justify-between items-center mt-2">
                    <p
                      className={`font-semibold ${
                        match.teamAScore > match.teamBScore ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      Team A: {match.teamAScore}
                    </p>
                    <p
                      className={`font-semibold ${
                        match.teamBScore > match.teamAScore ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      Team B: {match.teamBScore}
                    </p>
                  </div>
                )}
                {match.result && <p className="text-green-600 mt-2">Result: {match.result}</p>}
                {activeTab === "Live" && <p className="text-red-500 font-semibold mt-2">Live Now</p>}
                {activeTab === "Upcoming" && <p className="text-blue-500 font-semibold mt-2">Upcoming</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No matches found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
