import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Rules.css";

const Section = ({ title, children, collapsed, onToggle }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-2">
      <div
        className={`p-4 flex items-center justify-between cursor-pointer ${collapsed ? "bg-gray-100" : "bg-gray-200"}`}
        onClick={onToggle}
      >
        <span className="text-gray-800 font-medium text-left">{title}</span>
        {collapsed ? <ChevronDown className="text-gray-600" /> : <ChevronUp className="text-gray-600" />}
      </div>
      {!collapsed && <div className="p-4 bg-white text-gray-700 border-t border-gray-300">{children}</div>}
    </div>
  );
};

const CollapsibleSections = () => {
  const [sections, setSections] = useState([
    { id: 1, title: "Code of Conduct", collapsed: true, description: "Detailed code of conduct rules here." },
    { id: 2, title: "Match Rules", collapsed: true, description: "Match rules and guidelines here." },
    { id: 3, title: "Scoring Rules", collapsed: true, description: "Scoring rules and calculations here." },
    { id: 4, title: "Bowling Rules", collapsed: true, description: "Bowling restrictions and penalties." },
    { id: 5, title: "Batting Rules", collapsed: true, description: "Batting rules and regulations." },
    { id: 6, title: "Fielding Rules", collapsed: true, description: "Fielding guidelines and positioning." }
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
          src="https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FTitleImage?alt=media&token=107e3160-04b3-4056-b69c-199c1fe31408" 
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
        <CollapsibleSections />
      </div>
    </>
  );
};

export default Rules;