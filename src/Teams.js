import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";  // Import star icons
import teamsData from "./Data/Team.json";
import Titleimage from "./images/Titleimage.png";
import "./Team.css";

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to extract the group and number from teamName
  const extractGroupAndNumber = (teamName) => {
    const match = teamName.match(/([A-B])(\d+)/);
    if (match) {
      return {
        group: match[1],  // A or B
        number: parseInt(match[2], 10),  // The number (1, 2, etc.)
      };
    }
    return { group: "", number: 0 };
  };

  // Helper function to render stars based on the skill level
  const renderStars = (skillLevel) => {
    const starColor = "#023867"; // Dark Blue Color
    const starSize = 12; // Smaller size
    const emptyStarOpacity = 0.6; // Low opacity for empty stars
  
    return (
      <>
        {Array(skillLevel)
          .fill()
          .map((_, i) => (
            <FaStar key={i} style={{ color: starColor, fontSize: starSize }} />
          ))}
        {Array(5 - skillLevel)
          .fill()
          .map((_, i) => (
            <FaRegStar
              key={i}
              style={{
                color: starColor,
                fontSize: starSize,
                opacity: emptyStarOpacity,
              }}
            />
          ))}
      </>
    );
  };
  
  
  
  useEffect(() => {
    const storedTeams = localStorage.getItem("teamsData");
    if (storedTeams) {
      setTeams(JSON.parse(storedTeams));
    } else {
      localStorage.setItem("teamsData", JSON.stringify(teamsData));
      setTeams(teamsData);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (selectedTeam) {
      window.scrollTo(0, 0);
    }
  }, [selectedTeam]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll(".team-card").forEach((card) => {
        observer.observe(card);
      });
      document.querySelectorAll(".player-card").forEach((card) => {
        observer.observe(card);
      });
    });

    return () => {
      document.querySelectorAll(".player-card, .team-card").forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [selectedTeam]);

  // Handle loading state
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Sort the teams by group and number
  const sortedTeams = teams.sort((a, b) => {
    const aData = extractGroupAndNumber(a.teamName);
    const bData = extractGroupAndNumber(b.teamName);

    // First sort by group (A comes before B)
    if (aData.group !== bData.group) {
      return aData.group.localeCompare(bData.group);
    }

    // Then sort by the number (ascending)
    return aData.number - bData.number;
  });

  // Split sorted teams into Group A and Group B
  const groupA = sortedTeams.filter((team) => team.teamName.startsWith("(A"));
  const groupB = sortedTeams.filter((team) => team.teamName.startsWith("(B"));

  return (
    <div className="relative m-0 p-0">
      {!selectedTeam ? (
        <div className="relative w-full">
          <img
            src={Titleimage}
            alt="Title"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#023867] underline"
              style={{ textDecorationColor: "#e53e50" }}
            >
              TEAMS
            </h2>
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

          <div
            className="text-white p-6 rounded-lg mb-6"
            style={{ backgroundColor: "rgb(10 64 109 / 82%)", color: "white" }}
          >
            <h2 className="text-xl font-bold">{selectedTeam.teamName}</h2>
            <p className="text-lg font-medium mt-2">Captain: {selectedTeam.captainName}</p>
          </div>

          <div className="space-y-6">
            {selectedTeam.players.map((player, index) => (
              <div
                key={index}
                className="player-card flex items-center bg-white shadow-lg rounded-lg p-3 space-x-3 sm:flex-col sm:items-center sm:space-x-0"
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={player.profilePhoto}
                    alt={`${player.firstName} ${player.lastName}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center mt-3 sm:mt-2 text-center">
  <h3 className="font-bold">
    {player.firstName} {player.lastName}
  </h3>

  {/* Batting Skill */}
  <div className="flex items-center space-x-2 mt-3">
    <p className="font-medium text-sm">Batting:</p>
    <div className="flex space-x-1">{renderStars(parseInt(player.battingSkill))}</div>
  </div>

  {/* Bowling Skill */}
  <div className="flex items-center space-x-2 mt-3">
    <p className="font-medium text-sm">Bowling:</p>
    <div className="flex space-x-1">{renderStars(parseInt(player.bowlingSkill))}</div>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      )}

      {!selectedTeam && (
        <div className="mt-4">
          <div>
            <h2 className="text-3xl pb-8 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#023867] underline text-center" style={{ textDecorationColor: "rgb(229, 62, 80)" }}>
              Group A
            </h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 justify-center max-w-screen-lg mx-0 px-10">
              {groupA.map((team, index) => (
                <div
                  key={index}
                  className="team-card w-34 h-48 bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform mx-auto sm:w-40 sm:h-56 lg:w-44 lg:h-60 flex flex-col pb-4"
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

          <div className="mt-12">
            <h2 className="text-3xl pb-10 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#023867] underline text-center" style={{ textDecorationColor: "rgb(229, 62, 80)" }}>
              Group B
            </h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 justify-center max-w-screen-lg mx-0 px-10">
              {groupB.map((team, index) => (
                <div
                  key={index}
                  className="team-card w-34 h-48 bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform mx-auto sm:w-40 sm:h-56 lg:w-44 lg:h-60 flex flex-col pb-4"
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
        </div>
      )}
    </div>
  );
}
