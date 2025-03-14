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
      title: "Round Robin Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li className="list-none"><b>Time</b>
            <ul className="list-disc pl-5">
              <li>Each half is 9 minutes long</li>
              <li>3 minute halftime</li>
              <li>Two 30-second timeouts for each team</li>
            </ul>
            <br />
          </li>
          <li className="list-none"><b>Halftime & Timeouts</b>
            <ul className="list-disc pl-5">
              <li>Game clock stops ONLY at halftime and during timeouts</li>
              <li>Timeouts can only be called by anyone on the court/captain</li>
              <li>Timeouts can only be called when your team has possession of the ball and dead balls</li>
            </ul>
            <br />
          </li>
          <li className="list-none"><b>Possession & Play</b>
            <ul className="list-disc pl-5">
              <li>Coin flip for first-half possession</li>
              <li>Check ball every dead ball</li>
              <li>Clear ball past the 3-point line on change of possession</li>
              <li>After a point is scored, the team that did not score gets the ball (Losers ball)</li>
            </ul>
            <br />
          </li>
          <li className="list-none"><b>Fouls</b>
            <ul className="list-disc pl-5">
              <li>Foul results in other team's possession</li>
              <li>3 foul limit (4th foul is ejection)</li>
              <li>Swearing at ANYONE (including referees) will result in an ejection
                <ul className="pl-5" style={{ listStyleType: 'square' }}>
                  <li>On the second offense of aggressive swearing at someone, you will be suspended for 1 game</li>
                </ul>
              </li>
              <li>Taunting in general will result in a technical foul</li>
              <li>2 technical fouls will result in an ejection</li>
              <li>Technical fouls count towards the 3 foul limit</li>
              <li>Technical fouls will be given at the discretion of the referees</li>
            </ul>
            <br />
          </li>
          <li className="list-none"><b>Miscellaneous</b>
            <ul className="list-disc pl-5">
              <li>Out of bounds results in check ball for other team</li>
              <li>All players must play for 5 minutes</li>
              <li>Points: Win - 3, Tie - 1, Loss - 0</li>
              <li>Tiebreak based on point differential</li>
              <li>Forfeit if team is more than 3 mins late</li>
              <li>Ball must be passed once, before any shot on all dead balls (First man)</li>
              <li>Substitution only on a dead ball</li>
              <li>Every team makes playoffs</li>
            </ul>
          </li>
        </ol>


      ),
    },
  
    {
      id: 2,
      title: "Play-In & Quarter Finals Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
          <li className="list-disc"><b>Time</b>
            <ul className="pl-5" style={{ listStyleType: 'square' }}>
              <li>Each half is 9 minutes long</li>
              <li>All players must play at least 4 minutes per game</li>
            </ul>
          </li>
          <li className="list-disc">A tie after 18 mins of play will lead to a 2 min overtime. A tie at overtime will give the victory to whichever team scores first after overtime possession is determined by coin toss</li>
          <li className="list-disc">All other rules are the same as Round Robin games</li>
        </ol>
      ),
    },
    
    {
      id: 3,
      title: "Semi-Finals and Final Rules",
      collapsed: true,
      description: (
        <ol className="list-decimal pl-5">
        <li className="list-disc"><strong>Free Throws:</strong>
          <ul className="pl-5" style={{ listStyleType: 'square' }}>
            <li>A shooting foul will lead to free throws. A second free throw will only be given if the first free throw is made. The team that committed the foul will get the ball after the second free throw (no live ball off the second free throw even if it is a miss)</li>
            <li>If the first free throw is a miss, the team that was fouled still gets the ball.</li>
            <li>If a team exceeds 5 fouls in total per half, the opposing team will receive free throws for both shooting and ground fouls.</li>
          </ul>
        </li>
        <li className="list-disc">In the last two minutes of the second half, and in any overtime periods, a 30-second shot clock and clock stoppage on each dead ball shall be instituted.</li>
        <li className="list-disc">All other rules are the same as other playoff rules.</li>
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
          src="https://swamishreeji.com/YogiCupImages/YogiCupTitledesktop.jpg"
          
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
