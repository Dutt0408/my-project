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
          <li>No player shall abuse the cricket equipment, playing area, or fixtures.</li> <br/>
          <li>No player shall use language that is obscene, offensive and/or an action
which is of an obscene nature toward the umpire or the opponent. Failure to
treat either the umpire or the opponent with respect will result in a penalty of
5 runs (minus 5 runs) during the game.</li><br/>

          <li>Inappropriate and deliberate physical contact towards the umpire or the
          opponent will result</li><br/>
          <li>Repeat of above behavior may result in that player being taken out of the
          tournament in its entirety.</li><br/>
          <li>Only captains are to come up to the umpires to report any concerns during
          the match.</li><br/>
          <li>Repeated excessive appealing is not allowed.</li><br/>
         
          
        </ol>
      ),
    },
  
    {
      id: 2,
      title: "Match Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li>Each team can field a maximum of 8 players. In the event a team cannot field the maximum, a match can begin with a minimum of 5 players.</li><br/>
          <li>If a team is unable to field a minimum of 5 players by 15 minutes past the scheduled start time of the match, then the team will forfeit the match.</li><br/>
          <li>Every player must wear proper non-marking sports shoes with rubber soles. Players are not allowed to play with boots, sandals, or play with bare feet.</li><br/>
        </ol>
      ),
    },
    
    {
      id: 3,
      title: "Scoring Guidelines",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li><strong>No Run declared</strong> – if the ball hits or gets stuck on the roof, batsmen cannot run. Additionally, no runs declared if the ball hits the back wall, however, batsmen can run between the wickets. </li><br/>
          <li><strong>(1) Run declared</strong> – hitting the lower half of the sidewalls in front of the runner’s crease. This includes guard stands protecting the crowd and scoring table. Batsmen can still run between the wickets for additional runs.</li><br/>
          <li><strong>(1) Run declared</strong> – if the ball goes behind the guard stands. Batsmen cannot run additional runs.</li><br/>
          <li><strong>(2) Runs declared</strong> – hitting the lower half of the sidewalls behind the runner’s crease. Batsmen can still run between the wickets for additional runs.</li><br/>
          <li><strong>(2) Runs declared</strong> – hitting anywhere on the upper half of the sidewalls (in front or behind the runner’s crease). Batsmen can still run between the wickets for additional runs.</li><br/>
          <li><strong>(4) Runs declared</strong> – hitting the opposite wall off the floor or side walls.</li><br/>
          <li><strong>(6) Runs declared</strong> – directly hitting the opposite wall.</li><br/>
          <li><strong>Physical Runs</strong> – Running between the wickets is allowed in the cases of:
            <ul className="list-disc pl-5">
              <li>No ball</li>
              <li>Wide</li>
              <li>Leg bye</li>
              <li>Overthrows (No additional declared runs)</li>
            </ul>
          </li> <br/>
          <li><strong>Losing a wicket:</strong>
            <ul className="list-disc pl-5">
              <li>(-3) (minus 3) runs per wicket from the score during the group stage.</li><br/>
              <li>(-5) (minus 5) runs per wicket from the score during the playoffs.</li><br/>
            </ul>
          </li>
        </ol>
      ),
    },
    
    {
      id: 4,
      title: "Bowling Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li>WIDE will be called in the cases of:
          <ul className="list-disc pl-5">
              <li>Bowling outside of the marked creases on either side of the wicket</li>
              <li> If a bowler delivers a bouncer that passes over the batter’s shoulder but below their head, the first instance will be treated as a warning. Any subsequent deliveries in the same over that pass over the shoulder (but remain below the head) will be called a “wide.” Additionally, any delivery that passes over the batter’s head will be immediately considered a “wide”</li>
            </ul>
          </li> <br/> 
          <li> NO BALL will be called in the cases of (FREE HIT will be awarded on all NO BALLS):
          <ul className="list-disc pl-5">
              <li>Overstepping</li>
              <li> Bowling a full-toss above the waist height</li>
              <li>  Illegal bowling action  </li>
              <li> Fielding extra players behind the bowling stumps </li>
            </ul>
          </li><br/>
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
          <li><strong>OUT</strong> – A batsman is out if they are bowled, caught, run out, hit wicket, or if the ball hits ANYWHERE on the roof for a total of 3 times during legal deliveries. LBW is not part of the dismissal process.</li><br/>
          <li><strong>24 legal deliveries</strong> – Any individual batsman can play a maximum of 24 legal deliveries in a game, after which they are retired and cannot come back to bat regardless of any situation.</li><br/>
          <li>Batsmen can continue batting until they are out or have reached their 24-ball limit, after which they will have to retire.</li><br/>
          <li>A batsman cannot retire prior to the 24-ball limit for no apparent reason. Once retired, they will not be allowed to come back into the game to bat.</li><br/>
          <li>No batsman may bat more than once.</li><br/>
          <li>At the end of each over, batsmen must swap ends.</li><br/>
          <li>The last batsman is not allowed to bat alone.</li><br/>
          <li>Do not tap the bat on the gym floor.</li><br/>
          <li><strong>Power Over</strong> – The on-field pair of batsmen will be allowed to take a “power over” once the batting power-play is completed (i.e., between the 4th and 10th over of the batting innings). 
            <ul className="list-disc pl-5">
              <li>The “power over” is mandatory. If it is not taken between the 4th and 9th over, then the 10th over will automatically become the “power over.”</li><br/>
              <li>The on-field pair of batsmen MUST inform the on-field umpire of their decision to take the “power over.”</li><br/>
              <li>Once the “power over” has been taken, the decision cannot be reversed regardless of the bowler bowling that over.</li><br/>
              <li>The “power over” will consist of a single over with six legal deliveries. During this over, all runs scored will be doubled.</li><br/>
              <li>If a wicket falls during the “power over,” the batting team will lose 10 runs (minus 10 runs).</li><br/>
            </ul>
          </li>
        </ol>
      ),
    },
    
    {
      id: 6,
      title: "Fielding Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li><strong>The batting power-play</strong> is in effect during the first 3 overs of each innings.
            <ul className="list-disc pl-5">
              <li>Maximum of 2 fielders allowed behind the bowling wickets DURING the power-play.</li><br/>
              <li>Maximum of 3 fielders allowed behind the bowling wickets AFTER the power-play.</li><br/>
            </ul>
          </li>
          <li>A fielder cannot claim a catch off of the side walls, roof, basketball nets, or any other barrier.</li><br/>
          <li>Wicket keeping is optional.</li><br/>
          <li>Runs will be awarded only if the ball makes contact with the wall. A fielder may touch the wall with any part of their body, but if the ball does not touch the wall, no runs will be given.</li><br/>
        </ol>
      ),
    },

    {
      id: 7,
      title: "Special Rules",
      collapsed: true,
      description: (
        <div>
          <strong>DRS</strong>
          <ol className="list-decimal pl-5">
            <li>Each team will have 1 review available in each innings of the game (1 in the batting innings and 1 in the bowling innings for each team).</li><br/>
            <li>A team will NOT have the option to retain a review, even if the review was successful, to ensure the game is completed in a timely manner.</li><br/>
            <li>The review can only be used for:
              <ul className="list-disc pl-5">
                <li>Run-out</li>
                <li>Stumping</li>
                <li>No ball (over-the-waist and over-the-shoulder)</li>
                <li>Illegal bowling action</li>
              </ul>
            </li>
          </ol> <br/>
          
          <strong>Impact Player</strong> <br/>
          <ol className="list-decimal pl-5">
          <br/><li>If a team of 8 players is competing against a team of 9 players, the team with 9 players must designate one player as an "impact player." They must inform the on-field umpires of their decision.</li><br/>
            <li>The impact player will act as a substitute player for the team of 9 members. They MUST either:
              <ul className="list-disc pl-5">
                <li>Have the opportunity to bat</li>
                <li>Remain on the field for a minimum of five overs (not required to bowl)</li> <br/>
              </ul>
            </li>
            <li>The batting team will still be subject to 7 wickets (8 batsmen).</li>
          </ol>
        </div>
      ),
    },
    
    
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
