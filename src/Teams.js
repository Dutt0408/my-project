import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { IoIosArrowBack } from 'react-icons/io';
import teamsData from "./Data/Team.json";
import Titleimage from './images/Titleimage.png';

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="relative m-0 p-0">
      <div className="relative w-full">
        <img src={Titleimage} alt="Title" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#023867] underline" style={{ textDecorationColor: "#e53e50" }}>
            TEAMS
          </h2>
        </div>
      </div>

      {/* Teams Listing */}
      {!selectedTeam ? (
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {teamsData.map((team, index) => (
              <div
                key={index}
                className="w-36 h-48 bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform mx-auto
                          sm:w-40 sm:h-52 lg:w-48 lg:h-60
                          [@media(max-width:350px)]:w-28 [@media(max-width:350px)]:h-36"
                onClick={() => setSelectedTeam(team)}
              >
                <div className="h-2/3 bg-blue-200 rounded-t-lg flex items-center justify-center">
                  <img
                    src={team.teamImage}
                    alt={team.teamName}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="h-1/3 p-1 flex items-center justify-center">
                  <h2 className="text-xs font-semibold text-center">{team.teamName}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-4">
            <button
              className="text-black mr-2"
              onClick={() => setSelectedTeam(null)}
            >
              <IoIosArrowBack size={24} />
            </button>
            <h2 className="text-2xl font-bold">{selectedTeam.teamName} Players</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {selectedTeam.players.map(player => (
              <div
                key={player.id}
                className="w-36 h-48 bg-white rounded-lg shadow-lg mx-auto 
                           sm:w-40 sm:h-52 lg:w-48 lg:h-60 
                           [@media(max-width:350px)]:w-28 [@media(max-width:350px)]:h-36"
              >
                <div className="h-2/3 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <img
                    src={player.profilePhoto}
                    alt={`${player.firstName} ${player.lastName}`}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="h-1/3 p-1">
                  <h3 className="text-xs sm:text-sm lg:text-base [@media(max-width:350px)]:text-[10px] font-semibold text-center">
                    {`${player.firstName} ${player.lastName}`}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base [@media(max-width:350px)]:text-[9px] text-center">
                    Batting: {renderStars(player.battingSkill)}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base [@media(max-width:350px)]:text-[9px] text-center">
                    Bowling: {renderStars(player.bowlingSkill)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
