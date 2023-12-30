// changes of true and update the new result 
import React, { useState } from 'react';
import './Schedule.css'; 
import './index.css'

const scheduleData = {
  
  "friday": [
    { "Match": 1, "Team1": "ETOBICOKE KINGS", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm - 3pm","Day": "Friday","isOver": true,"ResultURL": "Result1.png","Winner":"Etobicoke Kings won!!" },
    { "Match": 2, "Team1": "BRAMPTON PANTHERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm","Day": "Friday","isOver": true,"ResultURL": "Result2.png","Winner":"Etobicoke Eagles  won!!" },
    { "Match": 3, "Team1": "ETOBICOKE KINGS", "Team2": "Royal Challangers.B", "TimeFrame": "4pm-5pm","Day": "Friday","isOver": true,"ResultURL": "Result3.png","Winner":"ETOBICOKE KINGS  won!!" },
    { "Match": 4, "Team1": "ETOBICOKE TITANS", "Team2": "S. SPARTANS", "TimeFrame": "5pm-6pm","Day": "Friday","isOver": true,"ResultURL": "Result4.png","Winner":"ETOBICOKE TITANS  won!!"},
    { "Match": 5, "Team1": "BRAMPTON TIGERS", "Team2": "S.WARRIORS", "TimeFrame": "6pm-7pm","Day": "Friday","isOver": true,"ResultURL": "Result5.png","Winner":"BRAMPTON TIGERS  won!!" },
    { "Match": 6, "Team1": "Royal Challangers.B", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "7pm-8pm","Day": "Friday","isOver": true,"ResultURL": "Result6.png","Winner":"Royal Challangers.B  won!!" },
    { "Match": 7, "Team1": "S.FALCONS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "8pm-9pm","Day": "Friday","isOver": true,"ResultURL": "Result7.png","Winner":"BRAMPTON PANTHERS  won!!" },
    { "Match": 8, "Team1": "BRAMPTON LIONS", "Team2": "S.SPARTANS", "TimeFrame": "9pm-10pm","Day": "Friday","isOver": true,"ResultURL": "Result8.png","Winner":"BRAMPTON LIONS  won!!" },
    { "Match": 9, "Team1": "S.STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "10pm-11pm","Day": "Friday","isOver": true,"ResultURL": "Result9.png","Winner":"ETOBICOKE EAGLES  won!!" }
  ],
  "saturday": [
    { "Match": 10, "Team1": "C.SUPER KINGS", "Team2": "ETOBICOKE TITANS", "TimeFrame": "7am-8am","Day": "Saturday","isOver": true,"ResultURL": "Result10.png","Winner":"ETOBICOKE EAGLES  won!!" },
    { "Match": 11, "Team1": "BRAMPTON TIGERS", "Team2": "LONDON STRIKERS", "TimeFrame": "8am-9am","Day": "Saturday","isOver": true,"ResultURL": "Result11.png","Winner":"BRAMPTON TIGERS won!!" },
    { "Match": 12, "Team1": "KITCHNER TITANS", "Team2": "S.FALCONS", "TimeFrame": "9am-10am","Day": "Saturday","isOver": true,"ResultURL": "Result12.png","Winner":"S.FALCONS won!!!" },
    { "Match": 13, "Team1": "Royal Challangers.H", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "10am-11pm","Day": "Saturday","isOver": true,"ResultURL": "Result13.png","Winner":"RCH won!!" },
    { "Match": 14, "Team1": "LONDON STRIKERS", "Team2": "S.STRIKERS", "TimeFrame": "11am-12pm","Day": "Saturday","isOver": true,"ResultURL": "Result14.png" ,"Winner":"LONDON STRIKERS won!!"},
    { "Match": 15, "Team1": "C. SUPER KINGS", "Team2": "Royal Challangers.B", "TimeFrame": "12pm-1pm","Day": "Saturday","isOver": true,"ResultURL": "Result15.png","Winner":"C. SUPER KINGS won!!" },
    { "Match": 16, "Team1": "KITCHNER TITANS", "Team2": "S.WARRIORS", "TimeFrame": "1pm-2pm","Day": "Saturday","isOver": false,"ResultURL": "Result16.png","Winner":"" },
    { "Match": 17, "Team1": "Royal Challangers.H", "Team2": "BRAMPTON LIONS", "TimeFrame": "2pm-3pm","Day": "Saturday","isOver": false,"ResultURL": "Result17.png","Winner":"" },
    { "Match": 18, "Team1": "LONDON STRIKERS", "Team2": "ETOBICOKE EAGLES", "TimeFrame": "3pm-4pm","Day": "Saturday","isOver": false,"ResultURL": "Result18.png","Winner":"" },
    { "Match": 19, "Team1": "S.SPARTANS", "Team2": "C. SUPER KINGS", "TimeFrame": "4pm-5pm","Day": "Saturday","isOver": false,"ResultURL": "Result19.png","Winner":"" },
    { "Match": 20, "Team1": "S.STRIKERS", "Team2": "BRAMPTON PANTHERS", "TimeFrame": "5pm-6pm","Day": "Saturday","isOver": false,"ResultURL": "Result20.png","Winner":"" },
    { "Match": 21, "Team1": "ETOBICOKE KINGS", "Team2": "Royal Challangers.H", "TimeFrame": "6pm-7pm","Day": "Saturday","isOver": false,"ResultURL": "Result21.png","Winner":"" },
    { "Match": 22, "Team1": "KITCHNER TITANS", "Team2": "BRAMPTON TIGERS", "TimeFrame": "7pm-8pm","Day": "Saturday","isOver": false,"ResultURL": "Result22.png","Winner":"" },
    { "Match": 23, "Team1": "ETOBICOKE TITANS", "Team2": "ETOBICOKE CAPITALS", "TimeFrame": "8pm-9pm","Day": "Saturday","isOver": false,"ResultURL": "Result23.png","Winner":"" },
    { "Match": 24, "Team1": "S.WARRIORS", "Team2": "S.FALCONS", "TimeFrame": "9pm-10pm","Day": "Saturday","isOver": false,"ResultURL": "Result24.png","Winner":"" }
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
  const [selectedResult, setSelectedResult] = useState(null);
    const renderMatches = (matches, day) => {
      return (
        <>
          {matches.length > 0 && (
            <div className={`timeline ${day.toLowerCase()}`}>
              <div className="timeline-empty"></div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
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
                
                <button
              onClick={() => handleResultButtonClick(match.ResultURL)}
              className={`trophy-button ${match.isOver ? 'full-opacity' : ''}`}
            >
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
  setSelectedResult(resultURL); // Set selected result to open the modal
};

const handleCloseModal = () => {
  setSelectedResult(null); // Reset selected result to close the modal
};

return (
  <section className="design-section">
    <h2 className="day-heading Schl">Schedule</h2>
    {Object.keys(scheduleData).map((day, index) => (
      <React.Fragment key={day}>
        {index < Object.keys(scheduleData).length - 1 && (
          <div className="spacer"></div>
        )}
        {renderMatches(scheduleData[day], day)}
      </React.Fragment>
    ))}
    {selectedResult && (
      <div className="modal-overlay">
        <div className="modal">

        <div class="flex justify-end">
  <button onClick={handleCloseModal} type="button" class="ppclse bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    <span class="sr-only">Close menu</span>
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>


          {/* <span className="close" onClick={handleCloseModal}>
            &times;
          </span> */}
          <img src={process.env.PUBLIC_URL + '/' + selectedResult} alt="Result" />
        </div>
      </div>
    )}
  </section>
);

};

export default Schedule;