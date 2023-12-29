// changes of true and update the new result 
import React from 'react';
import './Schedule.css'; 
import './index.css'

const scheduleData = {
  
  "friday": [
    { "Match": 1, "Team1": "ETOBICOKE KINGS", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm - 3pm","Day": "Friday","isOver": true,"ResultURL": "Result1.png","Winner":"Etobicoke Kings Won the match" },
    { "Match": 2, "Team1": "BRAMPTON PANTHERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm","Day": "Friday","isOver": true,"ResultURL": "Result2.png","Winner":"Etobicoke Eagles Won the match" },
    { "Match": 3, "Team1": "ETOBICOKE KINGS", "Team2": "RCB", "TimeFrame": "4pm-5pm","Day": "Friday","isOver": true,"ResultURL": "Result3.png","Winner":"ETOBICOKE KINGS Won the match" },
    { "Match": 4, "Team1": "ETOBICOKE TITANS", "Team2": "SCARBOROUGH SPARTANS", "TimeFrame": "5pm-6pm","Day": "Friday","isOver": true,"ResultURL": "Result4.png","Winner":"ETOBICOKE TITANS Won the match"},
    { "Match": 5, "Team1": "BRAMPTON TIGERS", "Team2": "SCARBOROUGH WARRIORS", "TimeFrame": "6pm-7pm","Day": "Friday","isOver": false,"ResultURL": "Result5.png","Winner":"" },
    { "Match": 6, "Team1": "RCB", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "7pm-8pm","Day": "Friday","isOver": false,"ResultURL": "Result6.png","Winner":"" },
    { "Match": 7, "Team1": "SCARBOROUGH FALCONS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "8pm-9pm","Day": "Friday","isOver": false,"ResultURL": "Result7.png","Winner":"" },
    { "Match": 8, "Team1": "BRAMPTON LIONS", "Team2": "SCARBOROUGH SPARTANS", "TimeFrame": "9pm-10pm","Day": "Friday","isOver": false,"ResultURL": "Result8.png","Winner":"" },
    { "Match": 9, "Team1": "SCARBOROUGH STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "10pm-11pm","Day": "Friday","isOver": false,"ResultURL": "Result9.png","Winner":"" }
  ],
  "saturday": [
    { "Match": 10, "Team1": "CAMBRIDGE SUPER KINGS", "Team2": "ETOBICOKE TITANS", "TimeFrame": "7am-8am","Day": "Saturday","isOver": false,"ResultURL": "Result10.png","Winner":"" },
    { "Match": 11, "Team1": "BRAMPTON TIGERS", "Team2": "LONDON STRIKERS", "TimeFrame": "8am-9am","Day": "Saturday","isOver": false,"ResultURL": "Result11.png","Winner":"" },
    { "Match": 12, "Team1": "KITCHNER TITANS", "Team2": "SCARBOROUGH FALCONS", "TimeFrame": "9am-10am","Day": "Saturday","isOver": false,"ResultURL": "Result12.png","Winner":"" },
    { "Match": 13, "Team1": "RCH", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "10am-11pm","Day": "Saturday","isOver": false,"ResultURL": "Result13.png","Winner":"" },
    { "Match": 14, "Team1": "LONDON STRIKERS", "Team2": "SCARBOROUGH STRIKERS", "TimeFrame": "11am-12pm","Day": "Saturday","isOver": false,"ResultURL": "Result14.png" ,"Winner":""},
    { "Match": 15, "Team1": "CAMBRIDGE SUPER KINGS", "Team2": "RCB", "TimeFrame": "12pm-1pm","Day": "Saturday","isOver": false,"ResultURL": "Result15.png","Winner":"" },
    { "Match": 16, "Team1": "KITCHNER TITANS", "Team2": "SCARBOROUGH WARRIORS", "TimeFrame": "1pm-2pm","Day": "Saturday","isOver": false,"ResultURL": "Result16.png","Winner":"" },
    { "Match": 17, "Team1": "RCH", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm-3pm","Day": "Saturday","isOver": false,"ResultURL": "Result17.png","Winner":"" },
    { "Match": 18, "Team1": "LONDON STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm","Day": "Saturday","isOver": false,"ResultURL": "Result18.png","Winner":"" },
    { "Match": 19, "Team1": "SCARBOROUGH SPARTANS", "Team2": "CAMBRIDGE SUPER KINGS", "TimeFrame": "4pm-5pm","Day": "Saturday","isOver": false,"ResultURL": "Result19.png","Winner":"" },
    { "Match": 20, "Team1": "SCARBOROUGH STRIKERS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "5pm-6pm","Day": "Saturday","isOver": false,"ResultURL": "Result20.png","Winner":"" },
    { "Match": 21, "Team1": "ETOBICOKE KINGS", "Team2": "RCH", "TimeFrame": "6pm-7pm","Day": "Saturday","isOver": false,"ResultURL": "Result21.png","Winner":"" },
    { "Match": 22, "Team1": "KITCHNER TITANS", "Team2": "BRAMPTON TIGERS", "TimeFrame": "7pm-8pm","Day": "Saturday","isOver": false,"ResultURL": "Result22.png","Winner":"" },
    { "Match": 23, "Team1": "ETOBICOKE TITANS", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "8pm-9pm","Day": "Saturday","isOver": false,"ResultURL": "Result23.png","Winner":"" },
    { "Match": 24, "Team1": "SCARBOROUGH WARRIORS", "Team2": "SCARBOROUGH FALCONS", "TimeFrame": "9pm-10pm","Day": "Saturday","isOver": false,"ResultURL": "Result24.png","Winner":"" }
  ],
  "sunday": [
    { "Match": 25, "Team1": "QF1--1", "Team2": "QF1--2", "TimeFrame": "7am-8am","Day": "Sunday","isOver": false,"ResultURL": "Result25.png","Winner":"" },
    { "Match": 26, "Team1": "QF2--2", "Team2": "QF2--2", "TimeFrame": "8am-9am","Day": "Sunday","isOver": false,"ResultURL": "Result26.png","Winner":"" },
    { "Match": 27, "Team1": "QF3--1", "Team2": "QF3--2", "TimeFrame": "9am-10am","Day": "Sunday","isOver": false,"ResultURL": "Result27.png","Winner":"" },
    { "Match": 28, "Team1": "QF4--1", "Team2": "QF4--2", "TimeFrame": "10am-11am","Day": "Sunday","isOver": false,"ResultURL": "Result28.png","Winner":"" },
    { "Match": 29, "Team1": "SEMI FINAL 1", "Team2": "-", "TimeFrame": "11am-12pm","Day": "Sunday","isOver": false,"ResultURL": "Result29.png","Winner":"" },
    { "Match": 30, "Team1": "SEMI FINAL 2", "Team2": "-", "TimeFrame": "12pm-1pm","Day": "Sunday","isOver": false,"ResultURL": "Result30.png","Winner":"" },
    { "Match": 31, "Team1": "Final", "Team2": "-", "TimeFrame": "1pm-2pm","Day": "Sunday","isOver": false,"ResultURL": "Result31.png","Winner":"" }
  ]
};


  const Schedule = () => {
    const renderMatches = (matches, day) => {
      return (
        <>
          {matches.length > 0 && (
            <div className={`timeline ${day.toLowerCase()}`}>
              <div className="timeline-empty"></div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          )}
          {matches.map((match, index) => (
            <div
              key={index}
              className={`timeline ${day.toLowerCase()}`}
              style={{ opacity: match.isOver ? 0.6 : 1 }}
            >
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle "></div>
              </div>
              <div className="timeline-component timeline-content">
                <h3 className="Tframe">
                  {match.Day} {match.TimeFrame}
                </h3>
                <p className="Tm1">{match.Team1}</p>
                <img
                  className="h-16 w-auto vs"
                  src="./vs1.png"
                  alt="VS"
                />
                <p className="Tm2">{match.Team2}</p>
                
                <button onClick={() => handleResultButtonClick(match.ResultURL)} className="trophy-button">
               
                  <img
                    className="h-7 w-auto trophy-icon"
                    src="./tro.png"
                    alt="Your Company"
                  />
                </button>
                <p className="Winners"> {match.Winner}</p>
              </div>
            </div>
          ))}
        </>
      );
    };
  
  const handleResultButtonClick = (resultURL) => {
    const link = document.createElement('a');
    link.href = resultURL;
    link.download = 'Result Winner'; // You can set the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <section className="design-section">
      <h2 className="day-heading Schl">Schedule</h2>
      {Object.keys(scheduleData).map((day, index) => (
        <React.Fragment key={day}>
          {index < Object.keys(scheduleData).length - 1 && <div className="spacer"></div>}
          {renderMatches(scheduleData[day], day)}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Schedule;
