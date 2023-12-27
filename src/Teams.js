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
        },
        {
          "firstName": "Het",
          "lastName": "Surani",
          "profilePhoto": "https://drive.google.com/uc?id=1wTa9vu4RCvAofBZ0ZmeEeDpXNqU5vSZj",
          "skill": "Batting",
          "id": "1wTa9vu4RCvAofBZ0ZmeEeDpXNqU5vSZj"
        },
        {
          "firstName": "Dhruvkumar",
          "lastName": "Tejani",
          "profilePhoto": "https://drive.google.com/uc?id=1DsQwNCz_YLWyEym6r8OtlydBKDUzjRC_",
          "skill": "Both",
          "id": "1DsQwNCz_YLWyEym6r8OtlydBKDUzjRC_"
        },
        {
          "firstName": "Siddharth",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1ctkGOYPI4XfAaS1fBfEdnS8E24nUddD1",
          "skill": "Both",
          "id": "1ctkGOYPI4XfAaS1fBfEdnS8E24nUddD1"
        },
        {
          "firstName": "Vaibhav",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1-Nl7EfYqlSpjy2jeyu4aScu0gHqX3v4x",
          "skill": "Batting",
          "id": "1-Nl7EfYqlSpjy2jeyu4aScu0gHqX3v4x"
        },
        {
          "firstName": "Sagar",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1YdNavuOOdxMKFl1Ow4SF5yj0lKQK0s9d",
          "skill": "Both",
          "id": "1YdNavuOOdxMKFl1Ow4SF5yj0lKQK0s9d"
        },
        {
          "firstName": "Jay",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1tMCiP-39uqE8t-0ihDlNKYADU5PKdJJF",
          "skill": "Neither",
          "id": "1tMCiP-39uqE8t-0ihDlNKYADU5PKdJJF"
        },
        {
          "firstName": "Chintan",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1WZoLLleCxaMGHa4d-6MELDbTHFSLmVkX",
          "skill": "Both",
          "id": "1WZoLLleCxaMGHa4d-6MELDbTHFSLmVkX"
        }
      ]
    },
    {
      "teamName": "Brampton Lions",
      "players": [
        {
          "firstName": "Mihirsinh",
          "lastName": "Pardeshi",
          "profilePhoto": "https://drive.google.com/uc?id=1EJqFGvQ5C9UdSVPPJXRVD6jcGWUteq_8",
          "skill": "Both",
          "id": "1EJqFGvQ5C9UdSVPPJXRVD6jcGWUteq_8"
        },
        {
          "firstName": "Sahil",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1YbYUqmo51qRwW3sFOvaelH0wrPHuEyhV",
          "skill": "Batting",
          "id": "1YbYUqmo51qRwW3sFOvaelH0wrPHuEyhV"
        },
        {
          "firstName": "Jaimin",
          "lastName": "Gor",
          "profilePhoto": "https://drive.google.com/uc?id=18qokdcSiq7E7XLCCUC4w4CdSpRIbev0l",
          "skill": "Both",
          "id": "18qokdcSiq7E7XLCCUC4w4CdSpRIbev0l"
        },
        {
          "firstName": "Parth",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1G3PLm0OPhkhYtw-aSMYULU0tqX-Q2Z1y",
          "skill": "Both",
          "id": "1G3PLm0OPhkhYtw-aSMYULU0tqX-Q2Z1y"
        },
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
        },
        {
          "firstName": "JAYKUMAR PARESHBHAI",
          "lastName": "PAREKH",
          "profilePhoto": "https://drive.google.com/uc?id=1Jm2GaegZTjcGeve9f_sHzc0u1ZVAsmwX",
          "skill": "Batting",
          "id": "1Jm2GaegZTjcGeve9f_sHzc0u1ZVAsmwX"
        }
      ]
    },
    {
      "teamName": "Royal Challengers Barmpton",
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
        },
        {
          "firstName": "Nehanshu",
          "lastName": "Nai",
          "profilePhoto": "https://drive.google.com/uc?id=1G3wnWOLFT5uVGeJ_Cd6mE7mwV0vbryUy",
          "skill": "Both",
          "id": "1G3wnWOLFT5uVGeJ_Cd6mE7mwV0vbryUy"
        },
        {
          "firstName": "Purav",
          "lastName": "Nanavati",
          "profilePhoto": "https://drive.google.com/uc?id=1JOrqnxib3pBn9YzE7KRaX3a6YGOZeawY",
          "skill": "Both",
          "id": "1JOrqnxib3pBn9YzE7KRaX3a6YGOZeawY"
        },
        {
          "firstName": "Prit",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1IrY-O2EMjnpLbUdwNfQPEZkyTgi9djsH",
          "skill": "Batting",
          "id": "1IrY-O2EMjnpLbUdwNfQPEZkyTgi9djsH"
        },
        {
          "firstName": "Vraj",
          "lastName": "Sukhadiya",
          "profilePhoto": "https://drive.google.com/uc?id=1DQrnFPUHqvzNZHc6FZWFm7ocJHL_j_Ci",
          "skill": "Both",
          "id": "1DQrnFPUHqvzNZHc6FZWFm7ocJHL_j_Ci"
        },
        {
          "firstName": "Purav",
          "lastName": "Nanavati",
          "profilePhoto": "https://drive.google.com/uc?id=18hbZFiAWAAa-JxB90ETqQj-gpsK6sFgP",
          "skill": "Both",
          "id": "18hbZFiAWAAa-JxB90ETqQj-gpsK6sFgP"
        },
        {
          "firstName": "Zeel",
          "lastName": "Dobariya",
          "profilePhoto": "https://drive.google.com/uc?id=11Yu7_1ACqELJ-f0nkDTJkbihwfeeVqPz",
          "skill": "Batting",
          "id": "11Yu7_1ACqELJ-f0nkDTJkbihwfeeVqPz"
        },
        {
          "firstName": "Manish",
          "lastName": "Patel",
          "profilePhoto": "https://drive.google.com/uc?id=1kW1rl-G4KRy7rttesn3KIjI-ue23FUzq",
          "skill": "Both",
          "id": "1kW1rl-G4KRy7rttesn3KIjI-ue23FUzq"
        }
      ]
    },    
    {
      teamName: 'LONDON STRIKERS',
      players: [
        {
          firstName: 'Fenil',
          lastName: 'Moradiya',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Both',
          id: 'FenilMoradiya'
        },
        {
          firstName: 'Chaitanya',
          lastName: 'Patel',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Bowling',
          id: 'ChaitanyaPatel'
        },
        {
          firstName: 'Manan',
          lastName: 'Patel',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Batting',
          id: 'MananPatel'
        },
        {
          firstName: 'Vraj',
          lastName: '',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Both',
          id: 'Vraj'
        },
        {
          firstName: 'Jay',
          lastName: 'Patel',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Bowling',
          id: 'JayPatel'
        },
        {
          firstName: 'Rajdeep',
          lastName: 'Zala',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Bowling',
          id: 'RajdeepZala'
        },
        {
          firstName: 'Deepesh',
          lastName: 'Padhiyar',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Batting',
          id: 'DeepeshPadhiyar'
        },
        {
          firstName: 'Param',
          lastName: 'Sukhadiya',
          profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
          skill: 'Both',
          id: 'ParamSukhadiya'
        }
      ]
    },
    {
      "teamName": "Brampton Tigers",
      "players": [
          {
            "firstName": "Dutt",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1JdTKYrDonBuWXCPIOt3FIfcCEUxcfcdu",
            "skill": "Batting",
            "id": "DuttPatel"
          },
       
          {
            "firstName": "Ved",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
            "skill": "Both",
            "id": "VedPatel"
          },
          {
            "firstName": "Akshar",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1bQWpD2T8aWHb8ZiXQRJ8fwg7ot7AmMOB",
            "skill": "Batting",
            "id": "AksharPatel"
          },
          {
            "firstName": "Rajveer",
            "lastName": "Gohil",
            "profilePhoto": "https://drive.google.com/uc?id=1PszROvQRFXEUQec0zlWywW-YuK89Pw0o",
            "skill": "Batting",
            "id": "RajveerGohil"
          },
          {
            "firstName": "Malhar D",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1PkgjMeXQyd06KfwPhjOwdYNQm6ZReIWv",
            "skill": "Batting",
            "id": "MalharDPatel"
          },
          {
            "firstName": "Vedant",
            "lastName": "Pandya",
            "profilePhoto": "https://drive.google.com/uc?id=1v_lm5YHWetJIv4lXPWSxWlnpOhTu9ZUu",
            "skill": "Both",
            "id": "VedantPandya"
          },
          {
            "firstName": "Harshil",
            "lastName": "Bhatt",
            "profilePhoto": "https://drive.google.com/uc?id=1njOpCur6rlQixgbP7HzqZ_sINOLTKbSS",
            "skill": "Both",
            "id": "HarshilBhatt"
          },
          {
            "firstName": "Riddham",
            "lastName": "Mavani",
            "profilePhoto": "https://drive.google.com/uc?id=1jnpAlMIuugp1b1PzssJ3U1gfgOH4ZWKg",
            "skill": "Both",
            "id": "RiddhamMavani"
          }
        ]
      },
      {
        "teamName": "ETOBICOKE TITANS",
        "players": [
          {
            "firstName": "Captain",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1rDSYJ5mlqrpfUMxKL3LVXzLemsQwwQwf"
          },
          {
            "firstName": "Vinit",
            "lastName": "",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
          },
          {
            "firstName": "Jenish",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1oXKt6NpJnE3wizl2gd_FwTaIqiw7rGB6"
          },
          {
            "firstName": "Rajiv",
            "lastName": "Tarsarya",
            "profilePhoto": "https://drive.google.com/uc?id=1oWXVgZQkVrYUlq4eHini6n9BFOk4rjnG"
          },
          {
            "firstName": "Vivek",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1DddXXlqLlG-BQID87xe5PY5CDGi7AXpn"
          },
          {
            "firstName": "Bankim",
            "lastName": "Modi",
            "profilePhoto": "https://drive.google.com/uc?id=1xsNGXz-tnxwU308rurL_F6s7nt3bU-NW"
          },
          {
            "firstName": "Dhyeykumar",
            "lastName": "patel",
            "profilePhoto": "https://drive.google.com/uc?id=1iu8DoGVVSZ1vbcEZ8DkjHgI6eowOmilk"
          }
        ]
      },
    {
      teamName: 'SCARBOROUGH SPARTANS',
      players: [
        {
          firstName: 'Akshesh',
          lastName: 'Patel',
          profilePhoto: 'https://drive.google.com/uc?id=1ZyA7BclEqnQ3VO0h_p9qV9UsmItDj_uM',
          skill: 'Both',
          id: 'AksheshPatel'
        },
        {
          firstName: 'Parthavsinh',
          lastName: 'Kher',
          profilePhoto: 'https://drive.google.com/uc?id=1qJHXXls33lGdmpv_1TaAEI8QRQxHd1Ot',
          skill: 'Batting',
          id: 'ParthavsinhKher'
        },
        {
          firstName: 'Paresh',
          lastName: 'Patel',
          profilePhoto: 'https://drive.google.com/uc?id=15Kxd7FLpv7b5JYzZxH1IHDn1OTY_S1EK',
          skill: 'Both',
          id: 'PareshPatel'
        },
        {
          firstName: 'Anuj',
          lastName: 'Patel',
          profilePhoto: 'https://drive.google.com/uc?id=15rB39ANQyaqH2ffatg6lPb-G_5TdeOdy',
          skill: 'Both',
          id: 'AnujPatel'
        },
        {
          firstName: 'Aniket',
          lastName: 'Prajapati',
          profilePhoto: 'https://drive.google.com/uc?id=1DNhwp7jkeSIIsUFY8iFyM-oi6fHedyyt',
          skill: 'Batting',
          id: 'AniketPrajapati'
        },
        {
          firstName: 'Jigar',
          lastName: 'Patel',
          profilePhoto: 'https://drive.google.com/uc?id=1JwpqOFW5eW9clLUKBFeA-P8nGUUURDWP',
          skill: 'Both',
          id: 'JigarPatel'
        },
        {
          firstName: 'JAINISH',
          lastName: 'PATEL',
          profilePhoto: 'https://drive.google.com/uc?id=1FnotSXygJeo_rswr24QSFxEevAAZ3Ndd',
          skill: 'Bowling',
          id: 'JAINISHPATEL'
        }
      ]
    },
{
  "teamName": "SCARBOROUGH WARRIORS",
  "players": [
    {
      "firstName": "Shrey",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
      "skill": "Both",
      "id": "ShreyPatel"
    },
    {
      "firstName": "Meet",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
      "skill": "Both",
      "id": "MeetPatel"
    },
    {
      "firstName": "Priyank",
      "lastName": "Patoliya",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
      "skill": "Both",
      "id": "PriyankPatoliya"
    },
    {
      "firstName": "Pradip",
      "lastName": "Sonani",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
      "skill": "Batting",
      "id": "PradipSonani"
    },
    {
      "firstName": "Utsav",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
      "skill": "Both",
      "id": "UtsavPatel"
    },
    {
      "firstName": "Rutvij",
      "lastName": "Majmudar",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
      "skill": "Both",
      "id": "RutvijMajmudar"
    },
    {
      "firstName": "Parth",
      "lastName": "Prajapati",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
      "skill": "Both",
      "id": "ParthPrajapati"
    }
  ]
},
{
  "teamName": "SCARBOROUGH STRIKERS",
  "players": [
    {
      "firstName": "Meetkumar",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Mann",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "DHRUV",
      "lastName": "PATEL",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Dharmil",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Harsh",
      "lastName": "Madhu",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Kirtan",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Meet",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Parth",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    }
  ]
},
{
  "teamName": "SCARBOROUGH FALCONS",
  "players": [
    {
      "firstName": "Jay",
      "lastName": "Bhadreshwara",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Alkesh",
      "lastName": "chaudhari",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Yash",
      "lastName": "Rao",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Savan",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Kuntal",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Harsh",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Jay",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Dainik",
      "lastName": "",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Pratiksinh",
      "lastName": "Suryavanshi",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    }
  ]
},

{
  "teamName": "ETOBICOKE EAGLES",
  "players": [
    {
      "firstName": "Rahil",
      "lastName": "Kanani",
      "profilePhoto": "https://drive.google.com/uc?id=1IdbLorRCgq1sT8ZbaEEg1NKyi-CeJFWJ"
    },
    {
      "firstName": "Dhaval",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1Ec4ER4NcZ8NXa0BvQcLpzeVDTk7eJeK3"
    },
    {
      "firstName": "Ritesh",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1ejx89zniGY8yDHfPk596VmFqd7X0P1w6"
    },
    {
      "firstName": "Jenish",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1SpobF6ndmuV0nz17aRe2laA5DQoEHTCm"
    },
    {
      "firstName": "Nisarg",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Captain",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=1fSaqp37s_qejAYXcwC6JdAWHvBw8KZM2"
    },
    {
      "firstName": "Vipul",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1wN-ocrSrVty_9iTN5yjlynmm39Kpa3om"
    },
    {
      "firstName": "Dweep",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=11qxo_ddPdQErPy60uDOtXs---y14-wVR"
    }
  ]
},
{
  "teamName": "ETOBICOKE KINGS",
  "players": [
    {
      "firstName": "Jetani",
      "lastName": "Harsh",
      "profilePhoto": "https://drive.google.com/uc?id=1QWPjoK2iixSjFlBn20guxhSW8VDKsaqu"
    },
    {
      "firstName": "Tirth",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1LBsKDVPLAz6oJuGiZyRogwxWU9v462im"
    },
    {
      "firstName": "Vivek",
      "lastName": "Jethva",
      "profilePhoto": "https://drive.google.com/uc?id=18eBdA8g3j_sAHZ12BdRgnLJqnlOOBwmC"
    },
    {
      "firstName": "Smit",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1LoRpF8UmNrH9tkoWXB4KAhsseuxLc01I"
    },
    {
      "firstName": "Captain",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=11-E6lvZA8fYSsfACMADdkKOIJzefdqaI"
    },
    {
      "firstName": "Rutul",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1zlpaBXtEmnFXNxDkjWIJWGTj8_RIyERR"
    },
    {
      "firstName": "Siddharth",
      "lastName": "Goswami",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Yash",
      "lastName": "Khandla",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    }
  ]
},
{
  "teamName": "ETOBICOKE CAPITALS",
  "players": [
    {
      "firstName": "Captain",
      "lastName": "",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Darshnik",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Vansh",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Siddhant",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Meet",
      "lastName": "Makwana",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Tilak",
      "lastName": "Jethwa",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Parth",
      "lastName": "Patel",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Anuj",
      "lastName": "Gadhiya",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Bhavesh",
      "lastName": "Waghela",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    }
  ]
},
{
  "teamName": "KITCHNER TITANS",
  "players": [
    {
      "firstName": "Sahaj",
      "lastName": "Limbani",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Shubam",
      "lastName": "Singh",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Pruthvi",
      "lastName": "Viradiya",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Gyan",
      "lastName": "Pandya",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Himanshu",
      "lastName": "Parmar",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Vandan",
      "lastName": "Jethwa",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Jignesh",
      "lastName": "Solanki",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Bhargav",
      "lastName": "Pansara",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    }
  ]
},
{
  "teamName": "CAMBRIDGE SUPER KINGS",
  "players": [
    {
      "firstName": "Kishan",
      "lastName": "",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    },
    {
      "firstName": "Kishan",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1BojpxXJbh671lvmBESjozvOm15WNt2cu"
    },
    {
      "firstName": "Vrajesh",
      "lastName": "Tailor",
      "profilePhoto": "https://drive.google.com/uc?id=1YbJM15w_STk6VQUZ0T8FjMIOeuPkS0-m"
    },
    {
      "firstName": "Parth",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=1GskPPXqm9fjApHqjbVs6rR13aDJOa26s"
    },
    {
      "firstName": "Mihir",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=13h4t8Jz6YDkSK_P6bMmM-2AM1KnvMJxw"
    },
    {
      "firstName": "Swapnil",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=1VWmS_7nRjtVpng2wFbSoPHnLNQJcWUlr"
    },
    {
      "firstName": "Harsh",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=1vpw9KMe1mZl9gWEfyxHMreBOeUdhz91F"
    },
    {
      "firstName": "Tapan",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=1m4iY1tJxcEEhmLcHAqZ5C22aTkoiRmnY"
    }
  ]
},
{
  "teamName": "ROYAL CHALLENGERS HAMILTON",
  "players": [
    {
      "firstName": "Captain",
      "lastName": "",
      "profilePhoto": "https://drive.google.com/uc?id=1oKOOBZp8iymk9eeLqtGTiYywItTzXYaC"
    },
    {
      "firstName": "Yash",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1DamkJ64yU27Lz8TtzTPgmGeXO926nCVm"
    },
    {
      "firstName": "Trushar",
      "lastName": "Bhavsar",
      "profilePhoto": "https://drive.google.com/uc?id=1wbp1rPcpuAMtgMBra7TmBbzY9UPHBTzk"
    },
    {
      "firstName": "Vaibhav",
      "lastName": "Surti",
      "profilePhoto": "https://drive.google.com/uc?id=1RzkwXPVxiZSAZ-Oah4XqKPOE1nxEmPsq"
    },
    {
      "firstName": "Dhruvesh",
      "lastName": "Patel",
      "profilePhoto": "https://drive.google.com/uc?id=1UdtYNpUp0e3eTdSEgtAvJ9W0OT-vXUCJ"
    },
    {
      "firstName": "Deep",
      "lastName": "Mistry",
      "profilePhoto": "https://drive.google.com/uc?id=1SekRgG3rhH2LE8rF1ly7t6xulhEc9daS"
    },
    {
      "firstName": "Tirth",
      "lastName": "Raval",
      "profilePhoto": "https://drive.google.com/uc?id=18pMmNCFTV1bLOC4XMpvxYq-n0l_gAvlQ"
    },
    {
      "firstName": "Tirth",
      "lastName": "Soni",
      "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
    }
  ]
}










    
    // ... Repeat for the remaining teams
  ];
  

  const Team = ({ teamName, onSelect }) => {
    return (
      <div
      onClick={() => onSelect(teamName)}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 kio" >
        <div className="border-custom p-4 m-24 shadow-lg">
      <h3>{teamName}</h3>
        </div>
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
      <h2>{selectedTeam}</h2>
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
