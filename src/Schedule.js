
import React from 'react';
import './Schedule.css'; 
import './index.css'



const scheduleData = {
  
  "friday": [
    { "Match": 1, "Team1": "ETOBICOKE KINGS", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm - 3pm","Day": "Friday","isOver": false,"ResultURL": "Result1.png" },
    { "Match": 2, "Team1": "BRAMPTON PANTHERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm","Day": "Friday","isOver": false,"ResultURL": "Result2.png" },
    { "Match": 3, "Team1": "ETOBICOKE KINGS", "Team2": "ROYAL CHALLENGERS BRAMPTON", "TimeFrame": "4pm-5pm","Day": "Friday","isOver": false,"ResultURL": "Result3.png" },
    { "Match": 4, "Team1": "ETOBICOKE TITANS", "Team2": "SCARBOROUGH SPARTANS", "TimeFrame": "5pm-6pm","Day": "Friday","isOver": false,"ResultURL": "Result4.png"},
    { "Match": 5, "Team1": "BRAMPTON TIGERS", "Team2": "SCARBOROUGH WARRIORS", "TimeFrame": "6pm-7pm","Day": "Friday","isOver": false,"ResultURL": "Result5.png" },
    { "Match": 6, "Team1": "ROYAL CHALLENGERS BRAMPTON", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "7pm-8pm","Day": "Friday","isOver": false,"ResultURL": "Result6.png" },
    { "Match": 7, "Team1": "SCARBOROUGH FALCONS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "8pm-9pm","Day": "Friday","isOver": false,"ResultURL": "Result7.png" },
    { "Match": 8, "Team1": "BRAMPTON LIONS", "Team2": "SCARBOROUGH SPARTANS", "TimeFrame": "9pm-10pm","Day": "Friday","isOver": false,"ResultURL": "Result8.png" },
    { "Match": 9, "Team1": "SCARBOROUGH STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "10pm-11pm","Day": "Friday","isOver": false,"ResultURL": "Result9.png" }
  ],
  "saturday": [
    { "Match": 10, "Team1": "CAMBRIDGE SUPER KINGS", "Team2": "ETOBICOKE TITANS", "TimeFrame": "7am-8am","Day": "Saturday","isOver": false,"ResultURL": "Result10.png" },
    { "Match": 11, "Team1": "BRAMPTON TIGERS", "Team2": "LONDON STRIKERS", "TimeFrame": "8am-9am","Day": "Saturday","isOver": false,"ResultURL": "Result11.png" },
    { "Match": 12, "Team1": "KITCHNER TITANS", "Team2": "SCARBOROUGH FALCONS", "TimeFrame": "9am-10am","Day": "Saturday","isOver": false,"ResultURL": "Result12.png" },
    { "Match": 13, "Team1": "ROYAL CHALLENGERS HAMILTON", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "10am-11pm","Day": "Saturday","isOver": false,"ResultURL": "Result13.png" },
    { "Match": 14, "Team1": "LONDON STRIKERS", "Team2": "SCARBOROUGH STRIKERS", "TimeFrame": "11am-12pm","Day": "Saturday","isOver": false,"ResultURL": "Result14.png" },
    { "Match": 15, "Team1": "CAMBRIDGE SUPER KINGS", "Team2": "ROYAL CHALLENGERS BRAMPTON", "TimeFrame": "12pm-1pm","Day": "Saturday","isOver": false,"ResultURL": "Result15.png" },
    { "Match": 16, "Team1": "KITCHNER TITANS", "Team2": "SCARBOROUGH WARRIORS", "TimeFrame": "1pm-2pm","Day": "Saturday","isOver": false,"ResultURL": "Result16.png" },
    { "Match": 17, "Team1": "ROYAL CHALLENGERS HAMILTON", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm-3pm","Day": "Saturday","isOver": false,"ResultURL": "Result17.png" },
    { "Match": 18, "Team1": "LONDON STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm","Day": "Saturday","isOver": false,"ResultURL": "Result18.png" },
    { "Match": 19, "Team1": "SCARBOROUGH SPARTANS", "Team2": "CAMBRIDGE SUPER KINGS", "TimeFrame": "4pm-5pm","Day": "Saturday","isOver": false,"ResultURL": "Result19.png" },
    { "Match": 20, "Team1": "SCARBOROUGH STRIKERS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "5pm-6pm","Day": "Saturday","isOver": false,"ResultURL": "Result20.png" },
    { "Match": 21, "Team1": "ETOBICOKE KINGS", "Team2": "ROYAL CHALLENGERS HAMILTON", "TimeFrame": "6pm-7pm","Day": "Saturday","isOver": false,"ResultURL": "Result21.png" },
    { "Match": 22, "Team1": "KITCHNER TITANS", "Team2": "BRAMPTON TIGERS", "TimeFrame": "7pm-8pm","Day": "Saturday","isOver": false,"ResultURL": "Result22.png" },
    { "Match": 23, "Team1": "ETOBICOKE TITANS", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "8pm-9pm","Day": "Saturday","isOver": false,"ResultURL": "Result23.png" },
    { "Match": 24, "Team1": "SCARBOROUGH WARRIORS", "Team2": "SCARBOROUGH FALCONS", "TimeFrame": "9pm-10pm","Day": "Saturday","isOver": false,"ResultURL": "Result24.png" }
  ],
  "sunday": [
    { "Match": 25, "Team1": "QF1--1", "Team2": "QF1--2", "TimeFrame": "7am-8am","Day": "Sunday","isOver": false,"ResultURL": "Result25.png" },
    { "Match": 26, "Team1": "QF2--2", "Team2": "QF2--2", "TimeFrame": "8am-9am","Day": "Sunday","isOver": false,"ResultURL": "Result26.png" },
    { "Match": 27, "Team1": "QF3--1", "Team2": "QF3--2", "TimeFrame": "9am-10am","Day": "Sunday","isOver": false,"ResultURL": "Result27.png" },
    { "Match": 28, "Team1": "QF4--1", "Team2": "QF4--2", "TimeFrame": "10am-11am","Day": "Sunday","isOver": false,"ResultURL": "Result28.png" },
    { "Match": 29, "Team1": "SEMI FINAL 1", "Team2": "-", "TimeFrame": "11am-12pm","Day": "Sunday","isOver": false,"ResultURL": "Result29.png" },
    { "Match": 30, "Team1": "SEMI FINAL 2", "Team2": "-", "TimeFrame": "12pm-1pm","Day": "Sunday","isOver": false,"ResultURL": "Result30.png" },
    { "Match": 31, "Team1": "Final", "Team2": "-", "TimeFrame": "1pm-2pm","Day": "Sunday","isOver": false,"ResultURL": "Result31.png" }
  ]
};

const Schedule = () => {
  const getTextDividerContent = (day) => {
    let classForText = '';

    switch (day.toLowerCase()) {
      case 'friday':
        classForText = 'Friday Schedule';
        break;
      case 'saturday':
        classForText = 'Saturday Schedules';
        break;
      case 'sunday':
        classForText = 'Sunday Schedules';
        break;
      default:
        classForText = 'OISCT';
        break;
    }

    return (
      <span className={`texto ${classForText}`}>
        {classForText}
      </span>
    );
  };

  const renderMatches = (matches, day) => {
    return (
      <>
        <div className={`text-divider ${day.toLowerCase()}`}>
          {getTextDividerContent(day)}
        </div>
        {matches.map((match, index) => (
          <div
            key={index}
            className={`timeline ${day.toLowerCase()}`}
            style={{ opacity: match.isOver ? 0.3 : 1 }}
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
            </div>
          </div>
        ))}
        {matches.length > 0 && (
          <div className={`timeline ${day.toLowerCase()}`}>
            <div className="timeline-empty"></div>
            <h3 className="Trophy">TROPHY</h3>
          </div>
        )}
      </>
    );
  };
  
  const handleResultButtonClick = (resultURL) => {
    const link = document.createElement('a');
    link.href = resultURL;
    link.download = 'NOT AVAILABLE YET'; // You can set the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  

  return (
    <section className="design-section">
      {Object.keys(scheduleData).map((day, index) => (
        <React.Fragment key={day}>
          {/* <h2 className="day-heading">{day}</h2> */}
          {renderMatches(scheduleData[day], day)}
          {index < Object.keys(scheduleData).length - 1 && <div className="spacer"></div>}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Schedule;
