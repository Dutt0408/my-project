import React, { useEffect, useState } from "react";
import { fetchPointTableData } from "./firebase";
import "./index.css";
import "./Table.css";

const GPoint = () => (
  <svg
    className="w-4 fill-current text-green-600 ml-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const RPoint = () => (
  <svg
    className="w-4 fill-current text-red-500 ml-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
);

const DPoint = () => (
  <svg
    className="w-4 fill-current text-gray-400 ml-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
      clipRule="evenodd"
    />
  </svg>
);

const mapSymbolToComponent = { GPoint, RPoint, DPoint };

const generatePoints = (score, isLast3 = false) => {
  if (isLast3) {
    return (
      <div className="flex">
        {score.split(",").slice(-3).map((symbol, index) => {
          const PointComponent = mapSymbolToComponent[symbol];
          return PointComponent ? <PointComponent key={index} className="mr-1" /> : null;
        })}
      </div>
    );
  }
  return null;
};

const TeamRow = ({ teamName, match, won, lost, pts, last3, nrr }) => {
  return (
    <tr className="team-row bg-blue-50 border-b border-blue-200 hover:bg-blue-100">
      <td className="team-cell px-4 py-2 text-left font-medium text-blue-900 whitespace-nowrap text-sm">
        {teamName}
      </td>
      <td className="team-cell px-4 py-2 text-center text-sm">{match}</td>
      <td className="team-cell px-4 py-2 text-center text-sm">{won}</td>
      <td className="team-cell px-4 py-2 text-center text-sm">{lost}</td>
      <td className="team-cell px-4 py-2 text-center text-sm">{pts}</td>
      <td className="team-cell px-4 py-2 text-center text-sm">{nrr}</td>
      <td className="team-cell px-4 py-2 text-center text-sm">
        {generatePoints(last3, true)}
      </td>
    </tr>
  );
};

const GroupTable = ({ groupName, teams }) => {
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.nrr !== a.nrr) {
      return b.nrr - a.nrr; // Sort by higher NRR first
    }
    return b.pts - a.pts; // If NRR is equal, sort by points
  });

  return (
    <>
    
    <div className="mb-12">
      
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#023867] underline text-center"
        style={{ textDecorationColor: "#e53e50" }}
      >
        {groupName}
      </h2>
      <div className="overflow-x-auto mt-8">
        <table className="team-table min-w-full border border-blue-300">
          <thead>
            <tr className="font-bold">
              <th className="px-4 py-2">Teams</th>
              <th className="px-4 py-2">M</th>
              <th className="px-4 py-2">W</th>
              <th className="px-4 py-2">L</th>
              <th className="px-4 py-2">PT</th>
              <th className="px-4 py-2">N/R</th>
              <th className="px-4 py-2">Last 3</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team, index) => (
              <TeamRow key={index} {...team} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default function PointTable() {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPointTableData();
      console.log(data);

      if (data && typeof data === "object" && !Array.isArray(data)) {
        const teamsArray = Object.values(data);
        setGroupA(teamsArray.filter((team) => team.group === "A"));
        setGroupB(teamsArray.filter((team) => team.group === "B"));
      } else {
        console.error("Expected an object but got:", data);
        setGroupA([]);
        setGroupB([]);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="relative flex justify-center items-center m-0 p-0">
        <img
          src="https://swamishreeji.com/images/TitleImage"
          alt="Title"
          className="w-full h-auto object-cover"
        />
        <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
          <h2 className="text-5xl font-bold text-[#023867] underline" style={{ textDecorationColor: "#e53e50" }}>
            STANDINGS
          </h2>
        </div>
      </div>
    
        <div className="container mx-auto p-0">
      <GroupTable groupName="Group A" teams={groupA} />
      <GroupTable groupName="Group B" teams={groupB} />
    </div>
    </>
  );
}
