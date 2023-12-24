import React from "react";
import "./index.css";
import "./Table.css"
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
  tied,
  pts,
  last3,
}) => (
  <tr className="team-row">
    <td className="team-cell">
      <img className="team-logo" src={logo} alt="" />
      <span className="font-medium teamrow overflow-hidden max-h-16">{teamName}</span>
    </td>
    <td className="team-cell py-5 text-center">{match}</td>
    <td className="team-cell py-3 text-center">{won}</td>
    <td className="team-cell py-3 text-center">{lost}</td>
    <td className="team-cell py-3 text-center">{tied}</td>
    <td className="team-cell py-3 text-center">{pts}</td>
    <td className="team-cell py-3 text-center">
      {generatePoints(last3, true)}
    </td>
  </tr>
);



export default function Schedule() {
  const teams = [
    {
      
      teamName: "RCB",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
     
      teamName: "Keshav Lions",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
      
      teamName: "Keshav Tigers",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
   
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
   
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
      
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {

      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {


      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {


      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {


      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {


      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {


      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
    {


      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last3: "DPoint,DPoint,DPoint",
    },
  ];
  const sortedTeams = [...teams].sort((a, b) => b.pts - a.pts);
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      <h1 className="text-lg text-gray-400 font-medium"> OISCT POINT TABLE 2023</h1>
      <div className="mt-6">
        <div className="shadow sm:rounded-lg lg:rounded-none overflow-x-auto">
          <table className="w-full min-w-full text-sm text-gray-400">
            <thead className="bg-gray-800 text-xs md:text-sm lg:text-base uppercase font-medium">
              <tr className="teamrow">
                <th scope="col" className=" py-3 text-left tracking-wider text-center ">
                  Team
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  Match
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  Won
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  Lost
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  Tied
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  Pts
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  Last 3
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {sortedTeams.map((team, index) => (
                <TeamRow key={index} {...team} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}