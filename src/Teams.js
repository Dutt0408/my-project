// Teams.js
import React, { useState } from 'react';
import "./Team.css"


const Teams = () => {
  const teamsData = [
  
    {
      "teamName": "Brampton Panthers",
      "players": [
        {
          "firstName": "Paras",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1unfiXOGaVmgL0aE_RBHmZunT2w7tBdI7",
          "skill": "Bowling",
          "id": "1CH9oG51LvDGBg9FSspi2eiAkqhsXap2g"
        },
        {
          "firstName": "Jalat",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1CH9oG51LvDGBg9FSspi2eiAkqhsXap2g",
          "skill": "Both",
          "id": "1CH9oG51LvDGBg9FSspi2eiAkqhsXap2g"
        }
      ]
    },

    {
      "teamName": "Brampton Lions",
      "players": [
        
        {
          "firstName": "Jagdish",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1Vt1NMFhPCRjXnVJTH838rDh1eQRY1r0c",
          "skill": "Both",
          "id": "1Vt1NMFhPCRjXnVJTH838rDh1eQRY1r0c"
        },
        {
          "firstName": "Samarth",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1-fIjCaQNRDF65PIlg2TcPCe-sz1vx_Qf",
          "skill": "Both",
          "id": "1-fIjCaQNRDF65PIlg2TcPCe-sz1vx_Qf"
        },
        {
          "firstName": "Kaushal",
          "lastName": "Barot",
          "profilePhoto": "https://drive.google.com/uc?id=1qw7hdUy7gtoY0jjrghSqqhRoL5uQW5mP",
          "skill": "Both",
          "id": "1qw7hdUy7gtoY0jjrghSqqhRoL5uQW5mP"
        }
      ]
    },
    {
      "teamName": "Royal Challengers Brampton",
      "players": [
        {
          "firstName": "Kaushal",
          "lastName": "Soni",
          "profilePhoto": "https://drive.google.com/uc?id=1OUBFJtHIRl_8nR9st_bRsbA15eEEBebC",
          "skill": "Batting",
          "id": "1OUBFJtHIRl_8nR9st_bRsbA15eEEBebC"
        },
        {
          "firstName": "Het",
          "lastName": "Dave",
          "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          "skill": "Both",
          "id": "1HEZgctXVeO8sP55yT1VZnRIYPRE6sDO4"
        }
      ]
    } 
   

  
  ];
  

  const Team = ({ teamName, onSelect }) => {
    return (
      <div className="card-container" onClick={() => onSelect(teamName)}>
        <div className="card">
          <span></span>
          <div className="content">
            {/* Card content can be left empty or styled differently */}
          </div>
        </div>
        <h3 className="team-name">{teamName}</h3>
      </div>
    );
  };
  
  

const TeamList = ({ onSelectTeam }) => (
  <div>
    <h1>.</h1>
    {teamsData.map((team, index) => (
      <Team key={index} teamName={team.teamName} onSelect={onSelectTeam} />
    ))}
  </div>
);
 
const TeamDetail = ({ selectedTeam, onGoBack }) => {
  const team = teamsData.find((t) => t.teamName === selectedTeam);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {team.players.map((player, index) => (
          <div key={index} className="border-custom p-4 m-24 shadow-lg">
            <div className="mt-2 imgtm-container">
              <img src={player.profilePhoto} alt="Profile" className="w-full h-auto imgtm" />
              <div className={`imgtm-text ${player.skill ? player.skill.toLowerCase() : 'na'}`}>
                {player.skill === 'Both' ? 'Bat/Bowl' :
                  player.skill === 'Batting' ? 'Batsman' :
                    player.skill === 'Bowling' ? 'Bowler' : 'NA'}
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <strong>{player.firstName} {player.lastName}</strong>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onGoBack} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Go Back</button>
    </div>
  );
};

  const [selectedTeam, setSelectedTeam] = useState(null);

  const onSelectTeam = (teamName) => {
    setSelectedTeam(teamName);
  };

  const onGoBack = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="teams-container">
      {selectedTeam ? (
        <TeamDetail selectedTeam={selectedTeam} onGoBack={onGoBack} />
      ) : (
        <div className="team-container">
        <TeamList onSelectTeam={onSelectTeam} />
        </div>
      )}
      </div>
  
  
    

  );
  
};
export default Teams;
