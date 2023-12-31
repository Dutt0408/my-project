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
 
  <td className="team-cell py-3 text-center">
    {generatePoints(last3, true)}
  </td>
</tr>
);



export default function Schedule() {
  const teams = [
    {
      
      teamName: "E.Kings",
      match: 4,
      won: 4,
      lost: 0,
      NRR: 28.03,
      pts: 8,
      last3: "GPoint,GPoint,GPoint",
    },
    {
     
      teamName: "E.Eagles",
      match: 4,
      won: 4,
      lost: 0,
      NRR: 8.7,
      pts: 8,
      last3: "GPoint,GPoint,GPoint",
    },
    {
      
      teamName: "E.Titans",
      match: 4,
      won: 4,
      lost: 0,
      NRR: 9.93,
      pts: 8,
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
      NRR: 8.53,
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
      match: 4,
      won: 3,
      lost: 1,
      NRR: 8.47,
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
      NRR: 5.102,
      pts: 4,
      last3: "GPoint,GPoint,RPoint",
    },
    {


      teamName: "CSK",
      match: 4,
      won: 2,
      lost: 2,
      NRR: 7.38,
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
    if (b.pts !== a.pts) {
      return b.pts - a.pts;
    }

    
    return b.NRR - a.NRR;
  });
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
                  Pts
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  NRR
                </th>
                <th scope="col" className=" py-1 text-left tracking-wider text-center">
                  Last 3
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
    {sortedTeams.map((team, index) => (
      <React.Fragment key={index}>
        <TeamRow {...team} />
        {index === 7 && (
  <tr className="border-t border-gray-600 ">
    <td colSpan="7"></td>
  </tr>
)}

      </React.Fragment>
    ))}
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
}