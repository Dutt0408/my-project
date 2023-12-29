// import React from "react";
// import "./index.css";
import "./Table.css"


import React from 'react'

function live() {
  return (
    <div className='DisableTdy'>Live Service is Disabled</div>
  )
}

export default live

// const TeamRow = ({
//   rank,
//   logo,
//   teamName,
//   match,
//   won,
//   lost,
//   tied,
//   pts,
//   outStatus,
// }) => (
//   <tr className="team-row">
//     <td className="team-cell">
//       <img className="team-logo" src={logo} alt="" />
//       <span className="font-medium teamrow overflow-hidden max-h-16">{teamName}</span>
//     </td>
//     <td className="team-cell py-5 text-center">{match}</td>
//     <td className="team-cell py-3 text-center">{won}</td>
//     <td className="team-cell py-3 text-center">{lost}</td>
//     <td className="team-cell py-3 text-center">{tied}</td>
//     <td className="team-cell py-3 text-center">{pts}</td>
//     <td className="team-cell py-3 text-center">
//     {outStatus !== null && (
//         <div className="flex">
//           <span className="mr-1">{outStatus}</span>
//         </div>
//       )}
//       </td>
//   </tr>
// );



// export default function Schedule() {
//   const teams = [
//     {
      
//       teamName: "Jetani Harsh",
//       match: 6,
//       won: 5,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: " NOT OUT",
//     },
//     {
     
//       teamName: "Tirth Patel",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: " NOT OUT",
//     },
//     {
      
//       teamName: "Vivek Jethwa",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: " NOT OUT",
//     },
//     {
   
//       teamName: "Smit Patel",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: " NOT OUT",
//     },
//     {
   
//       teamName: "Jasmin Patel",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: " NOT OUT",
//     },
//     {
      
//       teamName: "Rutul Patel",
//       match: 7,
//       won: 13,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: " NOT OUT",
//     },
//     {
//       teamName: "S.Goswami",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: " NOT OUT",
//     },
//     {
//       teamName: "Yash Khandla",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "NOT OUT",
//     },
//     {
//       teamName: "Kaushal Soni",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "0",
//     },
//     {

//       teamName: "Het Dave",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "0",
//     },
//     {


//       teamName: "Nehanshu Nai",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "0",
//     },
//     {


//       teamName: "Purav Nanavati",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "0",
//     },
//     {


//       teamName: "Prit Patel",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "0",
//     },
//     {


//       teamName: "Malhar",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "1",
//     },
//     {


//       teamName: "Zeel Dobariya",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "0",
//     },
//     {


//       teamName: "Manish Patel",
//       match: 0,
//       won: 0,
//       lost: 0,
//       tied: 0,
//       pts: 0,
//       outStatus: "0",
//     },
//   ];
//   const sortedTeams = [...teams].sort((a, b) => b.pts - a.pts);
//   const battingTeams = sortedTeams.slice(0, 8);
//   const bowlingTeams = sortedTeams.slice(8, 16);
  
  
//   return (
//     <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
//       <h1 className="text-lg text-gray-400 font-medium">
//         {" "}
//         OISCT LIVE SCORE 2023
//       </h1>

//       {/* Batting Table */}
//       <div className="mt-6">
//         <h2 className="text-lg text-gray-400 font-medium fontbat">Batting Table</h2>
//         <div className="shadow sm:rounded-lg lg:rounded-none overflow-x-auto">
//           <table className="w-full min-w-full text-sm text-gray-400">
//             <thead className="bg-gray-800 text-xs md:text-sm lg:text-base uppercase font-medium">
//               <tr className="teamrow">
//                 <th scope="col" className=" py-3 text-left tracking-wider text-center ">
//                   Player Name &nbsp;
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   Run
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   Ball
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   0s
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   4s
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   6s
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   OUT /NOT-OUT
//                 </th>
//                 </tr>
//             </thead>
//             <tbody className="bg-gray-800">
//               {battingTeams.map((team, index) => (
//                 <TeamRow key={index} {...team} />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//             {/* Bowling Table */}
//       <div className="mt-6">
//         <h2 className="text-lg text-gray-400 font-medium fontbat">Bowling Table</h2>
//         <div className="shadow sm:rounded-lg lg:rounded-none overflow-x-auto">
//           <table className="w-full min-w-full text-sm text-gray-400">
//             <thead className="bg-gray-800 text-xs md:text-sm lg:text-base uppercase font-medium">
//             <tr className="teamrow">
//                 <th scope="col" className=" py-3 text-left tracking-wider text-center ">
//                   Player Name &nbsp;
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   Run
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   Ball
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   0s
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   4s
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   6s
//                 </th>
//                 <th scope="col" className=" py-1 text-left tracking-wider text-center">
//                   Over
//                 </th>
//                 </tr>
//             </thead>
//             <tbody className="bg-gray-800">
//               {bowlingTeams.map((team, index) => (
//                 <TeamRow key={index} {...team} />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }