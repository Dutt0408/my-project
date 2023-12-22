import React from "react";
import "./index.css";

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

const generatePoints = (score, isLast5 = false) => {
  if (!isLast5 && Array.isArray(score)) {
    return score.map((symbol, index) => {
      const PointComponent = mapSymbolToComponent[symbol];
      return PointComponent ? <PointComponent key={index} /> : null;
    });
  }

  if (isLast5) {
    // If it's "Last 5", assume it's a string like "GPoint,RPoint,DPoint"
    const symbols = score.split(",");
    return (
      <div className="flex">
        {symbols.map((symbol, index) => {
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
  last5,
}) => (
  <tr className="bg-black bg-opacity-20">
    <td className="pl-4">{rank}</td>
    <td className="flex px-6 py-4 whitespace-nowrap">
      <img className="w-5" src={logo} alt="" />
      <span className="ml-2 font-medium">{teamName}</span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">{match}</td>
    <td className="px-6 py-4 whitespace-nowrap">{won}</td>
    <td className="px-6 py-4 whitespace-nowrap">{lost}</td>
    <td className="px-6 py-4 whitespace-nowrap">{tied}</td>
    <td className="px-6 py-4 whitespace-nowrap">{pts}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      {generatePoints(last5, true)}
    </td>
  </tr>
);

export default function Schedule() {
  const teams = [
    {
      rank: 1,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
      teamName: "Liverpool",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "RPoint,GPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 2,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 3,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 4,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 5,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 6,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 7,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 8,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 9,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 10,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 11,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 12,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 13,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 14,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
    {
      rank: 15,
      logo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      teamName: "Man United",
      match: 0,
      won: 0,
      lost: 0,
      tied: 0,
      pts: 0,
      last5: "DPoint,DPoint,DPoint,DPoint,DPoint",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      <h1 className="text-lg text-gray-400 font-medium">KPL 2023</h1>
      <div className="mt-6">
      <div className="shadow sm:rounded-lg lg:rounded-none">
    
      <table className="w-full min-w-full text-sm text-gray-400">
            <thead className="bg-gray-800 text-xs md:text-sm lg:text-base uppercase font-medium">
              <tr>
                <th></th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Team
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Match
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Won
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Lost
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Tied
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Pts
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Last 5
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {teams.map((team, index) => (
                <TeamRow key={index} {...team} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
}
