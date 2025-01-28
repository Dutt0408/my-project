import React from "react";
import "./index.css";
import "./Table.css";
import teams from "./Data/Table.json";

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

const mapSymbolToComponent = {
  GPoint,
  RPoint,
  DPoint,
};

const generatePoints = (score, isLast3 = false) => {
  if (!isLast3 && Array.isArray(score)) {
    return score.map((symbol, index) => {
      const PointComponent = mapSymbolToComponent[symbol];
      return PointComponent ? <PointComponent key={index} /> : null;
    });
  }

  if (isLast3) {
    const symbols = score.split(",");
    const last3Symbols = symbols.slice(-3);
    return (
      <div className="flex">
        {last3Symbols.map((symbol, index) => {
          const PointComponent = mapSymbolToComponent[symbol];
          return PointComponent ? (
            <PointComponent key={index} className="mr-1" />
          ) : null;
        })}
      </div>
    );
  }

  return null;
};

const calculateNRR = (teamRuns, teamOvers, oppositionRuns, oppositionOvers) => {
  return (teamRuns / teamOvers) - (oppositionRuns / oppositionOvers);
};

const TeamRow = ({
  teamName,
  match,
  won,
  lost,
  pts,
  last3,
  teamRuns,
  teamOvers,
  oppositionRuns,
  oppositionOvers,
}) => {
  const NRR = calculateNRR(teamRuns, teamOvers, oppositionRuns, oppositionOvers);

  return (
    <tr className="team-row">
      <td className="team-cell">
        <span className="font-medium teamrow overflow-hidden max-h-16 team-name">
          {teamName}
        </span>
      </td>
      <td className="team-cell py-5 text-center">{match}</td>
      <td className="team-cell py-3 text-center">{won}</td>
      <td className="team-cell py-3 text-center">{lost}</td>
      <td className="team-cell py-3 text-center">{pts}</td>
      <td className="team-cell py-3 text-center">{NRR.toFixed(2)}</td>
      <td className="team-cell py-3 text-center">{generatePoints(last3, true)}</td>
    </tr>
  );
};

const GroupTable = ({ groupName, teams }) => {
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    return 0;
  });

  return (
    <div className="mb-12">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#023867] underline text-center"
        style={{ textDecorationColor: "#e53e50" }}
      >
        {groupName}
      </h2>
      <div className="overflow-x-auto mt-8">
        <table className="team-table min-w-full">
          <thead>
            <tr className="font-bold">
              <th>Teams</th>
              <th>M</th>
              <th>W</th>
              <th>L</th>
              <th>PT</th>
              <th>N/R</th>
              <th>Last 3</th>
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
  );
};

export default function Schedule() {
  const groupA = teams.filter((team) => team.group === "A");
  const groupB = teams.filter((team) => team.group === "B");

  return (
    <div className="container mx-auto p-0">
      <div className="relative flex justify-center items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FTitleImage?alt=media&token=107e3160-04b3-4056-b69c-199c1fe31408"
          alt="Title"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#023867] underline"
            style={{ textDecorationColor: "#e53e50" }}
          >
            POINTS TABLE
          </h1>
        </div>
      </div>
      <GroupTable groupName="Group A" teams={groupA} />
      <GroupTable groupName="Group B" teams={groupB} />
    </div>
  );
}
