import React from "react";
import "./index.css";
import "./Table.css";
import Titleimage from './images/Titleimage.png';

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
    const last3Symbols = symbols.slice(-3); // Take only the last 3 symbols
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

const TeamRow = ({
  rank,
  logo,
  teamName,
  match,
  won,
  lost,
  NRR,
  pts,
  last3,
}) => (
  <tr className="team-row">
    <td className="team-cell">
      <img className="team-logo" src={logo} alt="" />
      <span className="font-medium teamrow overflow-hidden max-h-16 team-name">
        {teamName}
      </span>
    </td>
    <td className="team-cell py-5 text-center">{match}</td>
    <td className="team-cell py-3 text-center">{won}</td>
    <td className="team-cell py-3 text-center">{lost}</td>
    <td className="team-cell py-3 text-center">{pts}</td>
    <td className="team-cell py-3 text-center">{NRR}</td>
    <td className="team-cell py-3 text-center">{generatePoints(last3, true)}</td>
  </tr>
);

export default function Schedule() {
  const teams = [
    {
      teamName: "E.Kings",
      match: 5,
      won: 5,
      lost: 0,
      NRR: 28.03,
      pts: 10,
      last3: "GPoint,GPoint,GPoint",
    },
    {
      teamName: "E.Eagles",
      match: 5,
      won: 4,
      lost: 1,
      NRR: 12.3,
      pts: 8,
      last3: "GPoint,GPoint,GPoint",
    },
    {
      teamName: "E.Titans",
      match: 5,
      won: 5,
      lost: 0,
      NRR: 20.08,
      pts: 10,
      last3: "GPoint,GPoint,GPoint",
    },
    {
      teamName: "E.Capitals",
      match: 3,
      won: 0,
      lost: 3,
      NRR: -14.34,
      pts: 0,
      last3: "RPoint,RPoint,RPoint",
    },
    {
      teamName: "B.Panthers",
      match: 3,
      won: 1,
      lost: 2,
      NRR: 4.94,
      pts: 2,
      last3: "RPoint,GPoint,RPoint",
    },
    {
      teamName: "B.Lions",
      match: 4,
      won: 2,
      lost: 2,
      NRR: -4,
      pts: 4,
      last3: "GPoint,GPoint,RPoint",
    },
    {
      teamName: "B.Tigers",
      match: 4,
      won: 2,
      lost: 2,
      NRR: 6.52,
      pts: 4,
      last3: "GPoint,RPoint,RPoint",
    },
    {
      teamName: "RCB",
      match: 3,
      won: 1,
      lost: 2,
      NRR: -15.64,
      pts: 2,
      last3: "RPoint,GPoint,RPoint",
    },
    {
      teamName: "S.Warriors",
      match: 3,
      won: 0,
      lost: 3,
      NRR: -24.94,
      pts: 0,
      last3: "RPoint,RPoint,RPoint",
    },
    {
      teamName: "S.Falcons",
      match: 5,
      won: 3,
      lost: 2,
      NRR: 10.48,
      pts: 6,
      last3: "GPoint,GPoint,GPoint",
    },
    {
      teamName: "S.Spartans",
      match: 3,
      won: 0,
      lost: 3,
      NRR: -11.43,
      pts: 0,
      last3: "RPoint,RPoint,RPoint",
    },
    {
      teamName: "S.Strikers",
      match: 3,
      won: 1,
      lost: 2,
      NRR: -12.01,
      pts: 2,
      last3: "RPoint,RPoint,GPoint",
    },
    {
      teamName: "K.Titans",
      match: 4,
      won: 2,
      lost: 2,
      NRR: -5.05,
      pts: 4,
      last3: "GPoint,GPoint,RPoint",
    },
    {
      teamName: "CSK",
      match: 4,
      won: 2,
      lost: 2,
      NRR: 3.78,
      pts: 4,
      last3: "GPoint,GPoint,RPoint",
    },
    {
      teamName: "RCH",
      match: 3,
      won: 1,
      lost: 2,
      NRR: -2.28,
      pts: 2,
      last3: "GPoint,RPoint,RPoint",
    },
    {
      teamName: "L.Strikers",
      match: 3,
      won: 1,
      lost: 2,
      NRR: 1.21,
      pts: 2,
      last3: "RPoint,GPoint,RPoint",
    },
  ];

  const sortedTeams = [...teams].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.NRR !== a.NRR) return b.NRR - a.NRR;
    return 0;
  });

  return (
    <div className="container mx-auto p-0">
      <div className="relative flex justify-center items-center">
        <img
          src={Titleimage}
          alt="Title"
          className="w-full h-auto object-cover"
        />
        {/* Title with underline, centered on the image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#023867] underline" style={{ textDecorationColor: "#e53e50" }}>
            POINTS TABLE
          </h2>
        </div>
      </div>
  
      {/* Scrollable table */}
      <div className="overflow-x-auto mt-8">
        <table className="team-table min-w-full">
          <thead>
            <tr className="font-bold">
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Points</th>
              <th>NRR</th>
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
}  