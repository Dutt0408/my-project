import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Rules.css";

const Section = ({ title, children, collapsed, onToggle }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-2">
      {/* Toggle Button (Header) */}
      <div
        className={`p-4 flex items-center justify-between cursor-pointer ${collapsed ? "bg-gray-100" : "bg-[#023867]"}`}
        onClick={onToggle}
      >
        <span className={`text-left ${collapsed ? "text-gray-800" : "text-white"}`}>{title}</span>
        {collapsed ? (
          <ChevronDown className="text-gray-600" />
        ) : (
          <ChevronUp className="text-white" /> // White arrow when expanded
        )}
      </div>

      {/* Animated Content (Content Section) */}
      <div className={`collapsible-content ${collapsed ? "" : "open"}`}>
        <div className={`p-4 border-t border-gray-300 bg-white text-gray-700`}>
          {children}
        </div>
      </div>
    </div>
  );
};


const CollapsibleSections = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Code of Conduct",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li>No player shall abuse the cricket equipment, playing area, or fixtures.</li>
          <li>Showing dissent at an umpire’s decision by action or verbal abuse is prohibited. The umpire’s decision is final.</li>
          <li>Only captains are to approach the umpires to report any concerns during the match.</li>
          <li>If umpires are unable to make a decision, they may consult the committee members. The final decision shall be respected by both captains.</li>
          <li>No player shall use language that is obscene, offensive, or perform an action of an obscene nature toward the umpire or the opponent.</li>
          <li>Repeated excessive appealing is not allowed.</li>
          <li>Inappropriate and deliberate physical contact towards the umpire or the opponent will result in that player being dismissed from the match immediately.</li>
          <li>Repeating the above behavior may result in that player being removed from the tournament entirely.</li>
          <li>
            When the main umpire or leg umpire's decision is questionable, the captain can take a review (no limits). The process to follow is:
            <ul className="list-disc pl-5">
              <li>Only the captain should discuss the matter with the umpire. Players should not talk directly with the umpire but bring it up to their captain.</li>
              <li>Umpire, should they choose to, can ask the other umpire and match referees for additional insight. 
                Other umpire and referees WILL NOT interact with the decision-making umpire even if they know the decision is wrong 
                UNLESS they are asked by the decision-making umpire. This is to hold the decision-making Umpire as the main decision maker. 
                Referees and other umpires are just additional feedback if they are asked for assistance.</li>
              <li> Captain or players cannot approach other umpires or referees or scores or audience. Scorers will not be providing any opinions and will focus on scoring. </li>
              <li> Avoid group discussions to avoid creating unnecessary scenes. Captain should solely discuss the matter with the decision-making umpire. Other players should not be participating or listening as It's not a group discussion along with players.</li>
              <br/>
              <p> Note: Understand that wrong decisions will be made that could change the outcome. Respect wrong decisions without getting upset because umpiring is a challenging thing to do and we are playing to increase samp. Wrong decisions are made frequently even by professional umpires at an international level.</p>
              
            </ul>
          </li>
          <li> 
            Any deviation in the above process or poor sportsmanship shown by anyone is considered an offense that will result in the following:
            <ul className="list-disc pl-5">
              <li>1st offense: Warning and no penalty.</li>
              <li>2nd offense: 5 runs deducted when batting.</li>
              <li>3rd offense: 10 runs deducted when batting.</li>
              <br/>
              <p> Note: 1st, 2nd & 3rd Offences will be applied per game and doesn’t carry over to next game. Meaning if a team has two offences in 1st game & get 5 runs deducted and if they get one offence in next game, the counter will start again with “Warning-no penalty”.       </p>
              <li>4th offense: Disqualification (see Rule 11).</li>
            </ul>
          </li>
          <li> Offence Disqualification: If any team has, cumulatively throughout their games, accumulated 4 offences, the team will be disqualified of their next match/tournament, irrespective of whether it is an elimination game.
            <br/>
            <p> Note: This 4 offences will be monitored cumulatively. Meaning if a team gets 1 offence in 1st Game and 2nd offence in 2nd game and 3rd offence in 3rd game, they will not have any runs deducted in those individual games. But the offence counter is adding those offences and with the 4th Offence in any game up to Final, they will get disqualified.</p>
          </li>
        </ol>
      ),
    },
  
    {
      id: 2,
      title: "Match Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li>Each team can field a maximum of 8 players. In the event a team cannot field a full team, the match can begin with a minimum of 5 players.</li>
          <li>If a team is unable to field a minimum of 5 players by 15 minutes past the scheduled start time of the match, then the team will forfeit the match.</li>
          <li>Each captain must submit liability forms for all of their players prior to the first match.</li>
          <li>Every player must wear proper non-marking rubber-soled sports shoes. Players are not allowed to play with sandals or bare feet. No player can play if they don’t have suitable footwear.</li>
          <li>Each innings will consist of 10 overs – to be bowled within 30 minutes (exceptions when a team is penalized for lateness).</li>
          <ul className="list-disc pl-5">
            <li>If the team bowling first does not finish its 10 overs within 30 minutes, then it will only bat the total overs completed by the 30 minutes mark. However, they will still need to bowl out their required 10 overs.</li>
          </ul>
        </ol>
      ),
    },
    {
      id: 3,
      title: "Scoring Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li> <strong> 1 Run declared </strong> – hitting the lower half of the sidewalls in front of the runner’s crease. This includes guard stands protecting the crowd and scoring table. Batsmen can still run between the wickets for additional runs.</li>
          <li> <strong> 1 Run declared </strong> – if the ball goes behind the guard stands. Batsmen cannot run additional runs.</li>
          <li> <strong> NO RUNS </strong> – If the ball hits or gets stuck on the roof, batsmen cannot run.</li>
          <li> <strong>  Runs declared </strong> – hitting the lower half of the sidewalls behind the runner’s crease. Batsmen can still run between the wickets for additional runs.</li>
          <li> <strong> 2 Runs declared </strong> – hitting anywhere on the upper half of the sidewalls (in front or behind the runner’s crease). Batsmen can still run between the wickets for additional runs.</li>
          <li> <strong> 4 Runs </strong> - hitting the opposite wall off the floor or side.</li>
          <li> <strong> 6 Runs </strong> – directly hitting the opposite wall.</li>
          <li> Physical Runs  – <strong>Running between the wickets is allowed in the cases of:
            <ul className="list-disc pl-5">
              <li> No ball </li>
              <li> Wide </li>
              <li> Leg Bye </li>
              <li> Overthrows (No additional declared runs) </li>
            </ul> </strong> </li>
          <li> <strong> Losing a wicket: 
            <ul className="list-disc pl-5">
              <li> -3 (minus 3) runs/wicket from the score during the group stage. </li>
              <li> -5 (minus 5) runs/wicket from the score during the playoffs (QF, SF & Final). </li>
            </ul>
             </strong> </li>
        </ol>
      ),
    },
    {
      id: 4,
      title: "Bowling Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li>Only 2 bowlers may bowl a maximum of 3 overs. The remaining 4 overs can be bowled by other bowlers. Each team must use a minimum of 4 bowlers to bowl their 10 overs.</li>
          <li>Bowling a WIDE or NO BALL will result in 1 run being awarded to the batting team and the delivery will have to be bowled again.</li>
          <li>FREE HIT will be awarded on all NO BALLS.</li>
          <li>NO BALL will be called in the cases of:
            <ul className="list-disc pl-5">
              <li>Overstepping.</li>
              <li>Bowling a bouncer above the shoulder (no exception).</li>
              <li>Bowling a full-toss above waist height.</li>
              <li>Illegal bowling action - (check with umpires prior to the match if in doubt).</li>
              <li>Fielding extra players behind the bowling stumps.</li>
            </ul>
          </li>
          <li>If a team is chasing negative runs, the bowling team shall bowl a minimum of 3 overs.</li>
        </ol>
      ),
    },
    {
      id: 5,
      title: "Batting Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <strong><li>OUT - If the ball hits ANYWHERE on the roof 3 times during legal balls.</li>
          <li>A batsman can play a maximum of 24 legal balls in a game after which they are retired and cannot come back regardless of any situation.</li> </strong>
          <li>Do not tap the bat on the gym floor.</li>
          <li>Batsmen continue batting until they are out or have reached their 24-ball limit. A batsman cannot retire/declare just to come back later in the match.</li>
          <li>LBW is not part of the dismissal process. A wicket can fall if a batsman has been bowled, run out, caught, obstructing the field, or hit wicket.</li>
          <li>At the end of each over, batsmen must swap ends.</li>
          <li>No batsman may bat more than once and a team may not declare an innings closed.</li>
          <li>The last batsman is not allowed to bat alone.</li>
        </ol>
      ),
    },
    {
      id: 6,
      title: "Fielding Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li>Power-Play is in effect during the first 3 overs of each inning.
            <ul className="list-disc pl-5"> 
              <li>Maximum 2 fielders allowed behind the bowling wickets during these overs.</li> 
              <li>Maximum of 3 fielders allowed behind the bowling wickets after power-play.</li>
            </ul>
          </li>
          <li>A fielder cannot claim a catch off of the side walls, roof, basketball nets, or any other barrier.</li>
          <li>Wicket keeping is optional.</li>
          <li>During fielding, if a player touches the boundary wall with the ball in hand, it will be considered a boundary. Players may touch the side walls; no declared runs will be awarded.</li>
        </ol>
      ),
    }
  ]);


  const toggleSection = (id) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, collapsed: !section.collapsed } : section
      )
    );
  };

  return (
    <div className="p-4 space-y-6">
      {sections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          collapsed={section.collapsed}
          onToggle={() => toggleSection(section.id)}
        >
          {section.description}
        </Section>
      ))}
    </div>
  );
};

const Rules = () => {
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
            RULES
          </h2>
        </div>
      </div>
      <div className="max-w-md mx-auto mt-2">
      <div className="scrollable-container">
        <CollapsibleSections />
      </div>
      </div>
    </>
  );
};

export default Rules;
