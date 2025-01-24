import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { IoIosArrowBack } from "react-icons/io";
import teamsData from "./Data/Team.json";
import Titleimage from "./images/Titleimage.png";

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div className="relative m-0 p-0">
      {/* Header Section */}
      {!selectedTeam && (
        <div className="relative w-full">
          <img src={Titleimage} alt="Title" className="w-full h-auto object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#023867] underline"
              style={{ textDecorationColor: "#e53e50" }}
            >
              TEAMS
            </h2>
          </div>
        </div>
      )}

      {/* Teams Listing or Expanded View */}
      {!selectedTeam ? (
        <div className="mt-12">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 justify-center max-w-screen-lg mx-0 px-10">
          {teamsData.map((team, index) => (
            <div
              key={index}
              className="w-34 h-48 bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform mx-auto sm:w-40 sm:h-56 lg:w-44 lg:h-60 flex flex-col pb-4"
              onClick={() => setSelectedTeam(team)}
            >
              <div className="flex-grow bg-blue-200 rounded-lg overflow-hidden">
                <img
                  src={team.teamImage}
                  alt={team.teamName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 flex items-center justify-center bg-white">
                <h2 className="text-xs font-semibold text-center sm:text-sm">{team.teamName}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
      ) : (
        <div>
          {/* Back Button */}
          <div className="flex items-center mb-4">
            <button className="text-black mr-2" onClick={() => setSelectedTeam(null)}>
              <IoIosArrowBack size={24} />
            </button>
            <h2 className="text-2xl font-bold">{selectedTeam.teamName} Players</h2>
          </div>

          {/* Team Header */}
          <div
            className="text-white p-6 rounded-lg mb-6"
            style={{ backgroundColor: "rgb(10 64 109 / 82%)",
              color: "white"
             }}
          >
            <h2 className="text-xl font-bold">{selectedTeam.teamName}</h2>
            <p className="text-lg font-medium mt-2">Captain: {selectedTeam.captainName}</p>
          </div>


          {/* Player Cards */}
          <div className="space-y-6">
            {selectedTeam.players.map((player, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-lg rounded-lg p-3 space-x-3 sm:flex-col sm:items-center sm:space-x-0"
              >
                {/* Fixed size for the image container */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={player.profilePhoto}
                    alt={`${player.firstName} ${player.lastName}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 mt-3 sm:mt-2 text-center">
                  <h3 className="font-bold">
                    {player.firstName} {player.lastName}
                  </h3>
                  <p>Batting: {player.battingSkill}</p>
                  <p>Bowling: {player.bowlingSkill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
