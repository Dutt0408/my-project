import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import scheduleData from "./Data/Schedule.json"; // Import schedule data
import teamProfiles from "./Data/Teamprofile.json"; // Import team profiles

export default function Schedule() {
  const [data] = useState(scheduleData);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null); // Track selected match for modal
  const searchInputRef = useRef(null);

  // Close search when clicking outside the search overlay
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter matches by status and search query
  const filterMatches = () => {
    return data.filter(
      (match) =>
        match.matchstatus === activeTab &&
        (match.team1.toLowerCase().includes(searchQuery.toLowerCase()) ||
          match.team2.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  // Handle card click to show player details
  const handleCardClick = (match) => {
    setSelectedMatch(match);
  };

  // Close player details modal
  const closeModal = () => {
    setSelectedMatch(null);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto relative">
      {/* Tab Selection */}
      <div className="flex justify-center space-x-4 mb-4">
        {["Past", "Live", "Upcoming"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 font-semibold text-sm rounded-full border-2 transition-all shadow-md ${
              activeTab === tab
                ? "bg-blue-900 text-white border-blue-600"
                : "bg-white text-blue-800 border-blue-600 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Display Matches Based on Active Tab and Search */}
      <div className="space-y-4">
        {filterMatches().length === 0 ? (
          <p className="text-gray-500 text-center">No matches found for {activeTab.toLowerCase()} matches.</p>
        ) : (
          filterMatches().map((match) => (
            <div
              key={match.id}
              className="bg-white p-4 rounded-lg shadow-md border relative cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCardClick(match)}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-gray-600">
                  {match.series}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full uppercase ${
                    match.matchstatus === "Upcoming"
                      ? "bg-orange-500 text-white"
                      : match.matchstatus === "Live"
                      ? "bg-red-500 text-white animate-pulse"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {match.matchstatus}
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                {match.location}
              </p>
              <h2 className="text-[1.1rem] font-bold text-center text-blue-900 mt-2 flex items-center justify-center">
                {/* Team 1 Profile Image */}
                <img
                  src={teamProfiles[match.team1]?.profileImage}
                  alt={match.team1}
                  className="w-8 h-8 rounded-full mr-2"
                />
                {match.team1} vs {match.team2}
                {/* Team 2 Profile Image */}
                <img
                  src={teamProfiles[match.team2]?.profileImage}
                  alt={match.team2}
                  className="w-8 h-8 rounded-full ml-2"
                />
              </h2>
              <div className="mt-3 text-center">
                <p className="text-gray-500">
                  <br/>
                  {/* Match scheduled at <strong>{match.matchTime} ({match.matchDate}) </strong> */}
                  Match on <strong> {match.matchDate} ({match.matchTime})  </strong>
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sticky Search Button */}
      <button
        className="fixed bottom-0 right-0 bg-white text-gray-600 p-4 shadow-lg focus:outline-none"
        onClick={() => setIsSearchOpen(true)}
      >
        <AiOutlineSearch size={24} />
      </button>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10">
          <div
            className="bg-white w-full fixed top-0 left-0 right-0 z-50"
            ref={searchInputRef}
          >
            <div className="flex items-center p-4 border-b">
              <input
                type="text"
                placeholder="Search matches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 focus:outline-none"
              />
              <button
                className="text-gray-600 hover:text-red-600 text-xl"
                onClick={() => setIsSearchOpen(false)}
              >
                &#x2715;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Player Details Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">
              Players in {selectedMatch.team1} vs {selectedMatch.team2}
            </h2>
            <div className="space-y-4">
              {/* Team 1 Players */}
              <div>
                <h3 className="font-semibold text-lg">{selectedMatch.team1}</h3>
                <div className="space-y-2">
                  {teamProfiles[selectedMatch.team1]?.players.map((player, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>{player.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Team 2 Players */}
              <div>
                <h3 className="font-semibold text-lg">{selectedMatch.team2}</h3>
                <div className="space-y-2">
                  {teamProfiles[selectedMatch.team2]?.players.map((player, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>{player.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}