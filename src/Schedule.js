import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import scheduleData from "./Data/Schedule.json"; // Import schedule data
import teamProfiles from "./Data/Teamprofile.json"; // Import team profiles

const DEFAULT_PROFILE_IMAGE = "https://icon-library.com/images/avatar-png-icon/avatar-png-icon-3.jpg";
const DATE_FILTER_OPTIONS = ["14th Feb", "15th Feb", "16th Feb", "17th Feb"];

export default function Schedule() {
  const [data] = useState(scheduleData);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null); // Track selected match for modal
  const [selectedDateFilter, setSelectedDateFilter] = useState("");
  const [isSearchTriggered, setIsSearchTriggered] = useState(false); // Track if search is triggered
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

  // Filter matches by status, search query, and date filter (except for Live tab)
  const filterMatches = () => {
    return data.filter(
      (match) =>
        match.matchstatus === activeTab &&
        (isSearchTriggered
          ? match.team1.toLowerCase().includes(searchQuery.toLowerCase()) ||
            match.team2.toLowerCase().includes(searchQuery.toLowerCase())
          : true) &&
        (activeTab === "Live" || !selectedDateFilter || match.matchDate === selectedDateFilter)
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

  // Handle search icon click
  const handleSearchIconClick = () => {
    setIsSearchTriggered(true); // Trigger search
    setIsSearchOpen(false); // Close search overlay
  };

  // Clear search query and reset search
  const handleSearchClear = () => {
    setSearchQuery("");
    setIsSearchTriggered(false); // Reset search trigger
  };

  return (
    <div className="p-4 max-w-4xl mx-auto relative">
      {/* Tab Selection */}
      <div className="flex justify-center space-x-4 mb-4">
        {[
          "Past", "Live", "Upcoming"
        ].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 font-semibold text-sm rounded-full border-2 transition-all shadow-md ${
              activeTab === tab
                ? "bg-blue-900 text-white border-blue-600"
                : "bg-white text-blue-800 border-blue-600 hover:bg-blue-100"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedDateFilter("");
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Date Filter and Search Query Display */}
      <div className="mb-4 flex items-center space-x-2">
        {/* Date Filter (except for Live tab) */}
        {activeTab !== "Live" && (
          <select
            value={selectedDateFilter}
            onChange={(e) => setSelectedDateFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
          >
            <option value=""> All </option>
            {DATE_FILTER_OPTIONS.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        )}

        {/* Display Search Query with Clear Button */}
        {isSearchTriggered && searchQuery && (
          <div className="flex items-center bg-blue-100 px-2 py-1 rounded-full">
            <span className="text-blue-800">{searchQuery}</span>
            <button
              className="text-blue-800 hover:text-blue-600 ml-1"
              onClick={handleSearchClear}
            >
              &#x2715;
            </button>
          </div>
        )}
      </div>

      {/* Display Matches Based on Active Tab and Search */}
      <div className="space-y-4">
        {filterMatches().length === 0 ? (
          <p className="text-gray-500 text-center">No  {activeTab.toLowerCase()} matches</p>
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
                  src={teamProfiles[match.team1]?.profileImage || DEFAULT_PROFILE_IMAGE}
                  alt={match.team1}
                  className="w-8 h-8 rounded-full mr-2"
                />
                {match.team1} vs {match.team2}
                {/* Team 2 Profile Image */}
                <img
                  src={teamProfiles[match.team2]?.profileImage || DEFAULT_PROFILE_IMAGE}
                  alt={match.team2}
                  className="w-8 h-8 rounded-full ml-2"
                />
              </h2>
              <div className="mt-3 text-center">
                <p className="text-gray-500">
                  <br />
                  Match on <strong> {match.matchDate} ({match.matchTime})  </strong>
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sticky Search Button */}
      <button
  className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors focus:outline-none"
  onClick={() => setIsSearchOpen(true)}
>
  <AiOutlineSearch size={24} />
</button>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10">
          <div
            className="bg-gray-100 w-full fixed top-0 left-0 right-0 z-50 p-4"
            ref={searchInputRef}
          >
            <div className="flex items-center border-b pb-2">
              <input
                type="text"
                placeholder="Search matches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 focus:outline-none bg-white text-black"
              />
              <button
                className="text-gray-600 hover:text-blue-600 text-xl ml-2"
                onClick={handleSearchIconClick}
              >
                <AiOutlineSearch size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Player Details Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-3xl shadow-lg h-full md:h-auto overflow-y-auto">
            {/* Close Button (Top Left) */}
            <button
              className="fixed top-4 left-4 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors z-50"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Players in {selectedMatch.team1} vs {selectedMatch.team2}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team 1 Players */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4 text-blue-900">{selectedMatch.team1}</h3>
                  <div className="space-y-3">
                    {(teamProfiles[selectedMatch.team1]?.players || []).map((player, index) => (
                      <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <img
                          src={player.image || DEFAULT_PROFILE_IMAGE}
                          alt={player.name}
                          className="w-10 h-10 rounded-full mr-3 border-2 border-blue-900"
                        />
                        <span className="text-gray-800">{player.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team 2 Players */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4 text-red-900">{selectedMatch.team2}</h3>
                  <div className="space-y-3">
                    {(teamProfiles[selectedMatch.team2]?.players || []).map((player, index) => (
                      <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <img
                          src={player.image || DEFAULT_PROFILE_IMAGE}
                          alt={player.name}
                          className="w-10 h-10 rounded-full mr-3 border-2 border-red-900"
                        />
                        <span className="text-gray-800">{player.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}