



import React from 'react';
import './Schedule.css'; // Create a Schedule.css file for your styles

const scheduleData = {
  "friday": [
    { "Match": 11, "Team1": "ETOBICOKE KINGS", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm - 3pm" },
    { "Match": 2, "Team1": "BRAMPTON PANTHERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm" },
    { "Match": 3, "Team1": "ETOBICOKE KINGS", "Team2": "ROYAL CHALLENGERS BRAMPTON", "TimeFrame": "4pm-5pm" },
    { "Match": 4, "Team1": "ETOBICOKE TITANS", "Team2": "SCARBOROUGH SPARTANS", "TimeFrame": "5pm-6pm" },
    { "Match": 5, "Team1": "BRAMPTON TIGERS", "Team2": "SCARBOROUGH WARRIORS", "TimeFrame": "6pm-7pm" },
    { "Match": 6, "Team1": "ROYAL CHALLENGERS BRAMPTON", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "7pm-8pm" },
    { "Match": 7, "Team1": "SCARBOROUGH FALCONS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "8pm-9pm" },
    { "Match": 8, "Team1": "BRAMPTON LIONS", "Team2": "SCARBOROUGH SPARTANS", "TimeFrame": "9pm-10pm" },
    { "Match": 9, "Team1": "SCARBOROUGH STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "10pm-11pm" }
  ],
  "saturday": [
    { "Match": 10, "Team1": "CAMBRIDGE SUPER KINGS", "Team2": "ETOBICOKE TITANS", "TimeFrame": "7am-8am" },
    { "Match": 11, "Team1": "BRAMPTON TIGERS", "Team2": "LONDON STRIKERS", "TimeFrame": "8am-9am" },
    { "Match": 12, "Team1": "KITCHNER TITANS", "Team2": "SCARBOROUGH FALCONS", "TimeFrame": "9am-10am" },
    { "Match": 13, "Team1": "ROYAL CHALLENGERS HAMILTON", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "10am-11pm" },
    { "Match": 14, "Team1": "LONDON STRIKERS", "Team2": "SCARBOROUGH STRIKERS", "TimeFrame": "11am-12pm" },
    { "Match": 15, "Team1": "CAMBRIDGE SUPER KINGS", "Team2": "ROYAL CHALLENGERS BRAMPTON", "TimeFrame": "12pm-1pm" },
    { "Match": 16, "Team1": "KITCHNER TITANS", "Team2": "SCARBOROUGH WARRIORS", "TimeFrame": "1pm-2pm" },
    { "Match": 17, "Team1": "ROYAL CHALLENGERS HAMILTON", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm-3pm" },
    { "Match": 18, "Team1": "LONDON STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm" },
    { "Match": 19, "Team1": "SCARBOROUGH SPARTANS", "Team2": "CAMBRIDGE SUPER KINGS", "TimeFrame": "4pm-5pm" },
    { "Match": 20, "Team1": "SCARBOROUGH STRIKERS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "5pm-6pm" },
    { "Match": 21, "Team1": "ETOBICOKE KINGS", "Team2": "ROYAL CHALLENGERS HAMILTON", "TimeFrame": "6pm-7pm" },
    { "Match": 22, "Team1": "KITCHNER TITANS", "Team2": "BRAMPTON TIGERS", "TimeFrame": "7pm-8pm" },
    { "Match": 23, "Team1": "ETOBICOKE TITANS", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "8pm-9pm" },
    { "Match": 24, "Team1": "SCARBOROUGH WARRIORS", "Team2": "SCARBOROUGH FALCONS", "TimeFrame": "9pm-10pm" }
  ],
  "sunday": [
    { "Match": 25, "Team1": "QF1", "Team2": "-", "TimeFrame": "7am-8am" },
    { "Match": 26, "Team1": "QF2", "Team2": "-", "TimeFrame": "8am-9am" },
    { "Match": 27, "Team1": "QF3", "Team2": "-", "TimeFrame": "9am-10am" },
    { "Match": 28, "Team1": "QF4", "Team2": "-", "TimeFrame": "10am-11am" },
    { "Match": 29, "Team1": "SEMI FINAL 1", "Team2": "-", "TimeFrame": "11am-12pm" },
    { "Match": 30, "Team1": "SEMI FINAL 2", "Team2": "-", "TimeFrame": "12pm-1pm" },
    { "Match": 31, "Team1": "Final", "Team2": "-", "TimeFrame": "1pm-2pm" }
  ]
};
const Schedule = () => {
  const getTextDividerContent = (day) => {
    switch (day.toLowerCase()) {
      case 'friday':
        return 'OISCT-1';
      case 'saturday':
        return 'OISCT23';
      case 'sunday':
        return 'OISCT99';
      default:
        return 'OISCT';
    }
  };

  const renderMatches = (matches, day) => {
    return (
      <>
        <div className={`text-divider ${day.toLowerCase()}`}>
          {getTextDividerContent(day)}
        </div>
        {matches.map((match, index) => (
          <div key={index} className={`timeline ${day.toLowerCase()}`}>
            <div className="timeline-empty"></div>
            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-component timeline-content">
              <h3 className="Tframe">{match.TimeFrame}</h3>
              <p className="Tm1">{match.Team1}</p>
              <p className="vs">vs</p> 
              <p className="Tm2">{match.Team2}</p>
            </div>
          </div>
        ))}
      </>
    );
  };
  

  return (
    <section className="design-section">
      {Object.keys(scheduleData).map((day, index) => (
        <React.Fragment key={day}>
          <h2 className="day-heading">{day}</h2>
          {renderMatches(scheduleData[day], day)}
          {index < Object.keys(scheduleData).length - 1 && <div className="spacer"></div>}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Schedule;
