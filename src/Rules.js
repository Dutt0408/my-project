// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import "./Rules.css"

// const Section = ({ title, children, collapsed, onToggle }) => {
//   return (
//     <>
    
//     <div className="border border-gray-300 rounded-lg mb-2">
//      <div
//   className={`p-4  flex items-center justify-between cursor-pointer ${collapsed ? "bg-gray-100" : "bg-gray-200"}`}
//   onClick={onToggle}
// >


//         <span className="text-gray-800 font-medium text-left">{title}</span>
//         {collapsed ? (
//           <ChevronDown className="text-gray-600" />
//         ) : (
//           <ChevronUp className="text-gray-600" />
//         )}
//       </div>
//       {!collapsed && <div className="p-4 bg-white text-gray-700 border-t border-gray-300">{children}</div>}
//     </div>
//     </>
//   );
// };

// const CollapsibleSections = () => {
//   const [sections, setSections] = useState([
//     { id: 1, title: "Code of Conduct", collapsed: true, description: (
//       <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//       <li>No player shall abuse the cricket equipment, playing area or fixtures.</li>
//       <li>Showing dissent at an umpire’s decision by action or verbal abuse is prohibited. Umpire’s decision is final.</li>
//       <li>Only Captains are to come up to the umpires to report any concerns during the match.</li>
//       <li>If umpires are unable to make a decision, then they may consult the committee members. Final decision shall be respected by both captains.</li>
//       <li>No player shall use language that is obscene, offensive and/or an action which is of an obscene nature toward the umpire or the opponent.</li>
//       <li>Repeated excessive appealing is not allowed.</li>
//       <li>Inappropriate and deliberate physical contact towards the umpire or the opponent will result in that player being dismissed from the match with immediate effect.</li>
//       <li>Repeat of above behavior may result in that player being taken out of the tournament in its entirety.</li>
//       <li>When the main umpire or leg umpire's decision is questionable, the captain can take the review (no limits). The process to follow is this:
//         <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//           <li>Only the captain is allowed to discuss the matter with the umpire. Any player should not talk with the umpire directly to question a decision but should bring it up to their captain. The captain should politely ask the umpire to reconsider the decision with the reason.</li>
//           <li>The umpire, should they choose to, can ask the other umpire and match referees for additional insight. Other umpires and referees WILL NOT interact with the decision-making umpire even if they know the decision is wrong UNLESS they are asked by the decision-making umpire. This is to hold the decision-making umpire as the main decision-maker. Referees and other umpires are just additional feedback if they are asked for assistance.</li>
//           <li>The captain or players cannot approach other umpires or referees or scores or the audience. Scorers will not be providing any opinions and will focus on scoring.</li>
//           <li>Avoid group discussions to avoid creating unnecessary scenes. Captain should solely discuss the matter with decision making umpire. Other players should not be participating or listening as It's not a group discussion along with players.
//             <br></br><strong>Note:</strong> Understand that wrong decisions will be made that could change the outcome. Respect wrong decisions without getting upset because umpiring is a challenging thing to do and we are playing to increase unity. Wrong decisions are made frequently even by professional umpires at an international level.
//           </li>
//         </ol>
//       </li>
//       <li>Any deviation in the above process or poor sportsmanship shown by anyone is considered an offense that will result in the following:
//         <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//           <li>1st offence: Warning and no penalty</li>
//           <li>2nd offence: 5 runs deducted when batting.</li>
//           <li>3rd offence: 10 runs deducted when batting.
//             <br></br><strong>Note:</strong> 1st, 2nd & 3rd Offences will be applied per game and doesn’t carry over to next game. Meaning if a team has two offences in 1st game & get 5 runs deducted and if they get one offence in next game, the counter will start again with “Warning-no penalty”.
//           </li>
//           <li>4th offence: Disqualification (see Rule 11)</li>
//         </ol>
//       </li>
//       <li>Offence Disqualification: If any team has, cumulatively throughout their games, accumulated 4 offences, the team will be disqualified from their next match/tournament, irrespective of whether it is an elimination game.
//         <br></br><strong>Note:</strong> These 4 offences will be monitored cumulatively. Meaning if a team gets 1 offence in 1st Game and 2nd offence in 2nd game and 3rd offence in 3rd game, they will not have any runs deducted in those individual games. But the offence counter is adding those offences and with the 4th Offence in any game up to Final, they will get disqualified.
//       </li>
//     </ol>
//     ) },

//     { id: 2, title: "Match Rules", collapsed: true, description: (
//       <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//       <li>
//         Each team can field maximum of 8 players. In the event a team
//         cannot field full team, match can begin with minimum of 5 players.
//       </li>
//       <li>
//         If a team is unable to field minimum of 5 players by 15 minutes
//         past the scheduled start time of the match, then the team will
//         forfeit the match.
//       </li>
//       <li>
//         Each captain must submit liability forms of all of his players
//         prior to the first match.
//       </li>
//       <li>
//         Every player must wear proper non-marking rubber soled sports
//         shoes. Players are not allowed to play with sandals or bare feet.
//         No player can play if he doesn’t have suitable footwear.
//       </li>
//       <li>
//         Each innings will consist of 10 overs – to be bowled within 30
//         minutes (exceptions when a team is penalized for lateness)
//       </li>
//       <li>
//         If the team bowling first does not finish its 10 overs within 30
//         minutes, then it will only bat the total overs completed by the 30
//         minutes mark. However, they will still need to bowl out their
//         required 10 overs.
//       </li>
//     </ul>
//     ) },

//     { id: 3, title: "Scoring Rules", collapsed: true, description: (
//       <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//       <li>
//         <strong>1 Run declared –</strong> hitting the lower half of the
//         sidewalls in front of the runner’s crease. This includes guard
//         stands protecting the crowd and scoring table. Batsmen can still
//         run between the wickets for additional runs.
//       </li>
//       <li>
//         <strong>1 Run declared –</strong> if the ball goes behind the
//         guard stands. Batsmen cannot run additional runs.
//       </li>
//       <li>
//         <strong>NO RUNS – </strong>If the ball hits or gets stuck on the
//         roof, batsmen cannot run.
//       </li>
//       <li>
//         <strong>2 Runs declared –</strong> hitting the lower half of the
//         sidewalls behind the runner’s crease. Batsmen can still run
//         between the wickets for additional runs.
//       </li>
//       <li>
//         <strong>2 Runs declared –</strong> hitting anywhere on the upper
//         half of the sidewalls (in front or behind the runner’s crease).
//         Batsmen can still run between the wickets for additional runs.{" "}
//       </li>
//       <li>
//         <strong>4 Runs -</strong> hitting the opposite wall off the floor
//         or side.
//       </li>
//       <li>
//         {" "}
//         <strong>6 Runs –</strong> directly hitting the opposite wall.
//       </li>
//       <li>
//         Physical Runs – Running between the wickets is allowed in the
//         cases of:
//         <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//           <li>
//             <strong>No ball</strong>
//           </li>
//           <li>
//             <strong>Wide</strong>
//           </li>
//           <li>
//             <strong>Leg Bye</strong>
//           </li>
//           <li>
//             <strong>Over throws (No additional declared run) s)</strong>
//           </li>
//         </ol>
//       </li>
//     </ul>
//     ) },

//     { id: 4, title: "Bowling Rules", collapsed: true, description: (
//       <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//       <li>
//         Only 2 bowlers may bowl maximum of 3 overs. Remaining 4 overs can
//         be bowled by other bowlers. Each team must use minimum of 4
//         bowlers to bowl their 10 overs.
//       </li>
//       <li>
//         Bowling a WIDE or NO BALL will result in 1 run being awarded to
//         the batting team and the delivery will have to be bowled again.
//       </li>
//       <li>FREE HIT will be awarded on all NO BALLS.</li>
//       <li>
//         NO BALL will be called in the cases of:
//         <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//           <li>Overstepping</li>
//           <li>Bowling a bouncer above the shoulder (no exception)</li>
//           <li>Bowling a full-toss above waist height</li>
//           <li>
//             Illegal bowling action - (check with umpires prior to the
//             match if in doubt).
//           </li>
//           <li>Fielding extra players behind the bowling stumps</li>
//         </ol>
//       </li>
//     </ul>
//     ) },

//     { id: 5, title: "Batting Rules", collapsed: true, description: (
//       <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//       <li>
//         OUT - If the ball hits ANYWHERE on the roof 3 times during legal
//         balls
//       </li>
//       <li>Do not tap the bat on the gym floor</li>
//       <li>
//         Batsman cannot retire/declare just to come back later in the
//         match.
//       </li>
//       <li>
//         {" "}
//         LBW is not part of the dismissal process. A wicket can fall if
//         batsman has been bowled, runout, caught, obstructing the field or
//         hit wicket.
//       </li>
//       <li>At the end of each over, batsmen must swap ends. </li>
//       <li>
//         No batsman may bat more than once and a team may not declare an
//         innings closed.
//       </li>
//       <li> Last batsman is not allowed to bat alone.</li>
//     </ul>
//     ) },

//     { id: 6, title: "Fielding Rules", collapsed: true, description: (
//       <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//             <li>
//               Power-Play in effect during the first 3 overs of each inning.
//               <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
//                 <li>
//                   Maximum 2 fielders allowed behind the bowling wickets during
//                   these overs.
//                 </li>
//                 <li>
//                   Maximum of 3 fielders allowed behind the bowling wickets after
//                   power-play.
//                 </li>
//               </ol>
//             </li>
//             <li>
//               Fielder cannot claim a catch off of the side walls, roof,
//               basketball nets or any other barrier.
//             </li>
//             <li>Wicket keeping is optional.</li>
//             <li>
//               During fielding, if a player touches the boundary wall with the
//               ball in hand, it will be considered a boundary. Players may touch
//               the side walls; no declared runs will be awarded.
//             </li>
//           </ul>
//   ) }
//   ]);

//   const toggleSection = (id) => {
//     setSections((prev) =>
//       prev.map((section) =>
//         section.id === id
//           ? { ...section, collapsed: !section.collapsed }
//           : section
//       )
//     );
//   };

//   return (
//     <div className="p-4 space-y-6">
//       {sections.map((section) => (
//         <Section
//           key={section.id}
//           title={section.title}
//           collapsed={section.collapsed}
//           onToggle={() => toggleSection(section.id)}
//         >
//           {section.description}
//         </Section>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <>
      
//         {/* Image section */}
//         <div className="relative flex justify-center items-center m-0 p-0">
//           <img 
//             src="https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FTitleImage?alt=media&token=107e3160-04b3-4056-b69c-199c1fe31408" 
//             alt="Title" className="w-full h-auto object-cover" />
          
//           {/* Title with underline, centered on the image */}
//           <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
//             <h2 className="text-5xl font-bold text-[#023867] underline" style={{ textDecorationColor: "#e53e50" }}>
//               RULES
//             </h2>
//           </div>
//         </div>
//     <div className="max-w-md mx-auto mt-2">
//       <CollapsibleSections />
    
//     </div>
//     </>
//   );
// };

// export default App;




import React from "react";
import { Fieldset } from "primereact/fieldset";
import "./Rules.css";

export default function ToggleableDemo() {
  return (
    <div className="section blackbg">
      <div className="card mb-4">
        {/* Image section */}
        <div className="relative flex justify-center items-center m-0 p-0">
          <img 
            src="http://34.54.58.73/images/TitleImage" 
            alt="Title" className="w-full h-auto object-cover" />
          
          {/* Title with underline, centered on the image */}
          <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
            <h2 className="text-5xl font-bold text-[#023867] underline" style={{ textDecorationColor: "#e53e50" }}>
              RULES
            </h2>
          </div>
        </div>

        {/* Fieldset for Code of Conduct */}
        <Fieldset
          legend={
            <span className="font-semibold">
              <button
            className="button border border-gray-400 p-4 rounded  text-white"
            style={{ width: "180px", backgroundColor: "#0c3761" }} // Hex color value as string
          >
                Code of Conduct
              </button>
            </span>
          }
          toggleable
          collapsed={true}
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li>No player shall abuse the cricket equipment, playing area or fixtures.</li>
            <li>Showing dissent at an umpire’s decision by action or verbal abuse is prohibited. Umpire’s decision is final.</li>
            <li>Only Captains are to come up to the umpires to report any concerns during the match.</li>
            <li>If umpires are unable to make a decision, then they may consult the committee members. Final decision shall be respected by both captains.</li>
            <li>No player shall use language that is obscene, offensive and/or an action which is of an obscene nature toward the umpire or the opponent.</li>
            <li>Repeated excessive appealing is not allowed.</li>
            <li>Inappropriate and deliberate physical contact towards the umpire or the opponent will result in that player being dismissed from the match with immediate effect.</li>
            <li>Repeat of above behavior may result in that player being taken out of the tournament in its entirety.</li>
            <li>When the main umpire or leg umpire's decision is questionable, the captain can take the review (no limits). The process to follow is this:
              <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
                <li>Only the captain is allowed to discuss the matter with the umpire. Any player should not talk with the umpire directly to question a decision but should bring it up to their captain. The captain should politely ask the umpire to reconsider the decision with the reason.</li>
                <li>The umpire, should they choose to, can ask the other umpire and match referees for additional insight. Other umpires and referees WILL NOT interact with the decision-making umpire even if they know the decision is wrong UNLESS they are asked by the decision-making umpire. This is to hold the decision-making umpire as the main decision-maker. Referees and other umpires are just additional feedback if they are asked for assistance.</li>
                <li>The captain or players cannot approach other umpires or referees or scores or the audience. Scorers will not be providing any opinions and will focus on scoring.</li>
                <li>Avoid group discussions to avoid creating unnecessary scenes. Captain should solely discuss the matter with decision making umpire. Other players should not be participating or listening as It's not a group discussion along with players.
                  <br></br><strong>Note:</strong> Understand that wrong decisions will be made that could change the outcome. Respect wrong decisions without getting upset because umpiring is a challenging thing to do and we are playing to increase unity. Wrong decisions are made frequently even by professional umpires at an international level.
                </li>
              </ol>
            </li>
            <li>Any deviation in the above process or poor sportsmanship shown by anyone is considered an offense that will result in the following:
              <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
                <li>1st offence: Warning and no penalty</li>
                <li>2nd offence: 5 runs deducted when batting.</li>
                <li>3rd offence: 10 runs deducted when batting.
                  <br></br><strong>Note:</strong> 1st, 2nd & 3rd Offences will be applied per game and doesn’t carry over to next game. Meaning if a team has two offences in 1st game & get 5 runs deducted and if they get one offence in next game, the counter will start again with “Warning-no penalty”.
                </li>
                <li>4th offence: Disqualification (see Rule 11)</li>
              </ol>
            </li>
            <li>Offence Disqualification: If any team has, cumulatively throughout their games, accumulated 4 offences, the team will be disqualified from their next match/tournament, irrespective of whether it is an elimination game.
              <br></br><strong>Note:</strong> These 4 offences will be monitored cumulatively. Meaning if a team gets 1 offence in 1st Game and 2nd offence in 2nd game and 3rd offence in 3rd game, they will not have any runs deducted in those individual games. But the offence counter is adding those offences and with the 4th Offence in any game up to Final, they will get disqualified.
            </li>
          </ol>
        </Fieldset>

        <Fieldset
          legend={
            <span className="font-semibold">
              <button
                className="button border border-gray-400 p-4 rounded bg-gray-300 text-gray-700"
                style={{ width: "180px" }}
              >
                {" "}
                Match Rules
              </button>
            </span>
          }
          toggleable
          collapsed={true}
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li>
              Each team can field maximum of 8 players. In the event a team
              cannot field full team, match can begin with minimum of 5 players.
            </li>
            <li>
              If a team is unable to field minimum of 5 players by 15 minutes
              past the scheduled start time of the match, then the team will
              forfeit the match.
            </li>
            <li>
              Each captain must submit liability forms of all of his players
              prior to the first match.
            </li>
            <li>
              Every player must wear proper non-marking rubber soled sports
              shoes. Players are not allowed to play with sandals or bare feet.
              No player can play if he doesn’t have suitable footwear.
            </li>
            <li>
              Each innings will consist of 10 overs – to be bowled within 30
              minutes (exceptions when a team is penalized for lateness)
            </li>
            <li>
              If the team bowling first does not finish its 10 overs within 30
              minutes, then it will only bat the total overs completed by the 30
              minutes mark. However, they will still need to bowl out their
              required 10 overs.
            </li>
          </ul>
        </Fieldset>
        <Fieldset
          legend={
            <span className="font-semibold">
              <button
                className="button border border-gray-400 p-4 rounded bg-gray-300 text-gray-700"
                style={{ width: "180px" }}
              >
                {" "}
                Scoring Rules
              </button>
            </span>
          }
          toggleable
          collapsed={true}
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li>
              <strong>1 Run declared –</strong> hitting the lower half of the
              sidewalls in front of the runner’s crease. This includes guard
              stands protecting the crowd and scoring table. Batsmen can still
              run between the wickets for additional runs.
            </li>
            <li>
              <strong>1 Run declared –</strong> if the ball goes behind the
              guard stands. Batsmen cannot run additional runs.
            </li>
            <li>
              <strong>NO RUNS – </strong>If the ball hits or gets stuck on the
              roof, batsmen cannot run.
            </li>
            <li>
              <strong>2 Runs declared –</strong> hitting the lower half of the
              sidewalls behind the runner’s crease. Batsmen can still run
              between the wickets for additional runs.
            </li>
            <li>
              <strong>2 Runs declared –</strong> hitting anywhere on the upper
              half of the sidewalls (in front or behind the runner’s crease).
              Batsmen can still run between the wickets for additional runs.{" "}
            </li>
            <li>
              <strong>4 Runs -</strong> hitting the opposite wall off the floor
              or side.
            </li>
            <li>
              {" "}
              <strong>6 Runs –</strong> directly hitting the opposite wall.
            </li>
            <li>
              Physical Runs – Running between the wickets is allowed in the
              cases of:
              <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
                <li>
                  <strong>No ball</strong>
                </li>
                <li>
                  <strong>Wide</strong>
                </li>
                <li>
                  <strong>Leg Bye</strong>
                </li>
                <li>
                  <strong>Over throws (No additional declared run) s)</strong>
                </li>
              </ol>
            </li>
          </ul>
        </Fieldset>
        <Fieldset
          legend={
            <span className="font-semibold">
              <button
                className="button border border-gray-400 p-4 rounded bg-gray-300 text-gray-700"
                style={{ width: "180px" }}
              >
                {" "}
                Bowling rules
              </button>
            </span>
          }
          toggleable
          collapsed={true}
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li>
              Only 2 bowlers may bowl maximum of 3 overs. Remaining 4 overs can
              be bowled by other bowlers. Each team must use minimum of 4
              bowlers to bowl their 10 overs.
            </li>
            <li>
              Bowling a WIDE or NO BALL will result in 1 run being awarded to
              the batting team and the delivery will have to be bowled again.
            </li>
            <li>FREE HIT will be awarded on all NO BALLS.</li>
            <li>
              NO BALL will be called in the cases of:
              <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
                <li>Overstepping</li>
                <li>Bowling a bouncer above the shoulder (no exception)</li>
                <li>Bowling a full-toss above waist height</li>
                <li>
                  Illegal bowling action - (check with umpires prior to the
                  match if in doubt).
                </li>
                <li>Fielding extra players behind the bowling stumps</li>
              </ol>
            </li>
          </ul>
        </Fieldset>
        <Fieldset
          legend={
            <span className="font-semibold">
              <button
                className="button border border-gray-400 p-4 rounded bg-gray-300 text-gray-700"
                style={{ width: "180px" }}
              >
                {" "}
                Batting Rules
              </button>
            </span>
          }
          toggleable
          collapsed={true}
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li>
              OUT - If the ball hits ANYWHERE on the roof 3 times during legal
              balls
            </li>
            <li>Do not tap the bat on the gym floor</li>
            <li>
              Batsman cannot retire/declare just to come back later in the
              match.
            </li>
            <li>
              {" "}
              LBW is not part of the dismissal process. A wicket can fall if
              batsman has been bowled, runout, caught, obstructing the field or
              hit wicket.
            </li>
            <li>At the end of each over, batsmen must swap ends. </li>
            <li>
              No batsman may bat more than once and a team may not declare an
              innings closed.
            </li>
            <li> Last batsman is not allowed to bat alone.</li>
          </ul>
        </Fieldset>
        <Fieldset
          legend={
            <span className="font-semibold">
              <button
                className="button border border-gray-400 p-4 rounded bg-gray-300 text-gray-700"
                style={{ width: "180px" }}
              >
                {" "}
                Fielding Rules
              </button>
            </span>
          }
          toggleable
          collapsed={true}
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <ul className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li>
              Power-Play in effect during the first 3 overs of each inning.
              <ol className="main text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
                <li>
                  Maximum 2 fielders allowed behind the bowling wickets during
                  these overs.
                </li>
                <li>
                  Maximum of 3 fielders allowed behind the bowling wickets after
                  power-play.
                </li>
              </ol>
            </li>
            <li>
              Fielder cannot claim a catch off of the side walls, roof,
              basketball nets or any other barrier.
            </li>
            <li>Wicket keeping is optional.</li>
            <li>
              During fielding, if a player touches the boundary wall with the
              ball in hand, it will be considered a boundary. Players may touch
              the side walls; no declared runs will be awarded.
            </li>
          </ul>
        </Fieldset>
      </div>
    </div>
  );
}
