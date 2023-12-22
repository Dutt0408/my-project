import React from 'react';
import { Card, Typography } from "@material-tailwind/react";

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

function TableHeader({ headers }) {
  return (
    <tr>
     {headers.map((head, index) => (
  <th
    key={index}
    className="border-b border-blue-gray-100 bg-blue-gray-50 p-8"
    style={{
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    }}
  >
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal leading-none opacity-70"
          >
            {head}
          </Typography>
        </th>
      ))}
    </tr>
  );
}

function TableRow({ row, isLast, index, tableIndex }) {
  const classes = isLast ? "p-2" : "p-2 border-b border-blue-gray-50"; 
  const rowStyle = {
    height: '70px',

// Make this <0 change for opacity
    opacity: tableIndex === 1 ? (index < 0 ? 0.1 : 1) : 1,
  
  };

  return (
    <tr style={rowStyle}>
      {Object.keys(row).map((key, colIndex) => (
        <td
          className={classes}
          key={colIndex}
          style={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
            textAlign: key === 'Match' || key === 'TimeFrame' ? 'center' : 'left',
          }}
        >
          <Typography
            variant="small"
            color="blue-gray"
            className="font-medium" // You may also use "font-semibold" for a stronger font weight
            style={{
             
              fontWeight: (colIndex === 1 || colIndex === 2 || colIndex === 3) && tableIndex === 0 && index === 1 ? '800' : 'medium',
            }}
          >
            {row[key]}
          </Typography>
        </td>
      ))}
    </tr>
  );
}
// ... (existing imports)

function ScheduleTable({ matches, title, tableIndex }) {
  return (
    <Card className="h-full w-full overflow-scroll mb-8">
      <Typography
        variant="h6"
        color="blue-gray"
        className="font-bold mb-4"
      >
        {title}
      </Typography>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max table-auto text-left border-collapse sm:w-full md:w-full lg:w-4/5 xl:w-4/5">
          <thead>
            <TableHeader headers={Object.keys(matches[0])} />
          </thead>
          <tbody>
            {matches.map((row, index) => (
              <TableRow key={index} row={row} isLast={index === matches.length - 1} index={index} tableIndex={tableIndex} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function ScheduleComponent() {
  const days = Object.keys(scheduleData);

  return (
    <div className="relative h-screen overflow-auto">
      <div
        className="fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/Schedule.jpeg)`,
          opacity: 0.3,
          filter: 'blur(5px)',
        }}
        
      ></div>
      <div className="relative z-10">
        {days.map((day, index) => (
          <ScheduleTable
            key={index}
            matches={scheduleData[day]}
            title={`${day.charAt(0).toUpperCase() + day.slice(1)} Matches`}
            tableIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ScheduleComponent;
