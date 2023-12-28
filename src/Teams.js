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
          "firstName": "Jay",
          "lastName": "Parekh",
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
        "teamName": "Scarborough Stallions",
        "players": [
          {
            "firstName": "Akshesh",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1ZyA7BclEqnQ3VO0h_p9qV9UsmItDj_uM",
            "skill": "Both",
            "id": "1ZyA7BclEqnQ3VO0h_p9qV9UsmItDj_uM"
          },
          {
            "firstName": "Parthavsinh",
            "lastName": "Kher",
            "profilePhoto": "https://drive.google.com/uc?id=1qJHXXls33lGdmpv_1TaAEI8QRQxHd1Ot",
            "skill": "Batting",
            "id": "1qJHXXls33lGdmpv_1TaAEI8QRQxHd1Ot"
          },
          {
            "firstName": "Paresh",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=15Kxd7FLpv7b5JYzZxH1IHDn1OTY_S1EK",
            "skill": "Bowling",
            "id": "15Kxd7FLpv7b5JYzZxH1IHDn1OTY_S1EK"
          },
          {
            "firstName": "Anuj",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=15rB39ANQyaqH2ffatg6lPb-G_5TdeOdy",
            "skill": "Both",
            "id": "15rB39ANQyaqH2ffatg6lPb-G_5TdeOdy"
          },
          {
            "firstName": "Aniket",
            "lastName": "Prajapati",
            "profilePhoto": "https://drive.google.com/uc?id=1DNhwp7jkeSIIsUFY8iFyM-oi6fHedyyt",
            "skill": "Batting",
            "id": "1DNhwp7jkeSIIsUFY8iFyM-oi6fHedyyt"
          },
          {
            "firstName": "Jigar",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1JwpqOFW5eW9clLUKBFeA-P8nGUUURDWP",
            "skill": "Both",
            "id": "1JwpqOFW5eW9clLUKBFeA-P8nGUUURDWP"
          },
          {
            "firstName": "Jainish",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1FnotSXygJeo_rswr24QSFxEevAAZ3Ndd",
            "skill": "Both",
            "id": "1FnotSXygJeo_rswr24QSFxEevAAZ3Ndd"
          },
          {
            "firstName": "Kirtan",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Deep",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          }
        ]
      },
      {
        "teamName": "Scarborough Warriors",
        "players": [
          {
            "firstName": "Shrey",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=14gJoXeCk4vFjrV2n6n-s06a6wz5JZBS2",
            "skill": "Bowling",
            "id": "14gJoXeCk4vFjrV2n6n-s06a6wz5JZBS2"
          },
          {
            "firstName": "Meet",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1oH25kcXvExAKWZg4eWqhkBCTOT83T2R0",
            "skill": "Both",
            "id": "1oH25kcXvExAKWZg4eWqhkBCTOT83T2R0"
          },
          {
            "firstName": "Priyank",
            "lastName": "Patoliya",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Pradip",
            "lastName": "Sonani",
            "profilePhoto": "https://drive.google.com/uc?id=1Cv2whKFD5YctUSNwzyD-MxDF3SZbdP5S",
            "skill": "Batting",
            "id": "1Cv2whKFD5YctUSNwzyD-MxDF3SZbdP5S"
          },
          {
            "firstName": "Utsav",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1drkCKHWuytsTUmH30i7m66xCYzMJ-kDz",
            "skill": "Bowling",
            "id": "1drkCKHWuytsTUmH30i7m66xCYzMJ-kDz"
          },
          {
            "firstName": "Rutvij",
            "lastName": "Majmudar",
            "profilePhoto": "https://drive.google.com/uc?id=1Fp7tfSm07HqdrJH0JoBXwMmuWBmquPCh",
            "skill": "Batting",
            "id": "1Fp7tfSm07HqdrJH0JoBXwMmuWBmquPCh"
          },
          {
            "firstName": "Parth",
            "lastName": "Prajapati",
            "profilePhoto": "https://drive.google.com/uc?id=1pj4L-R9u7Md3z_mJ3jMqHF6vkkgNSm4V",
            "skill": "Both",
            "id": "1pj4L-R9u7Md3z_mJ3jMqHF6vkkgNSm4V"
          }
        ]
      },
      {
        "teamName": "Cambridge Super Kings",
        "players": [
          {
            "firstName": "Kishan",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1FLdmAkzvfAz2DFhwbudfmmziwm0iRWId",
            "skill": "Bowling",
            "id": "1FLdmAkzvfAz2DFhwbudfmmziwm0iRWId",
            "contactNo": "2268994173"
          },
          {
            "firstName": "Kishan",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1BojpxXJbh671lvmBESjozvOm15WNt2cu",
            "skill": "Bowling",
            "id": "1BojpxXJbh671lvmBESjozvOm15WNt2cu",
            "contactNo": "519 781 8645"
          },
          {
            "firstName": "Vrajesh",
            "lastName": "Tailor",
            "profilePhoto": "https://drive.google.com/uc?id=1YbJM15w_STk6VQUZ0T8FjMIOeuPkS0-m",
            "skill": "Both",
            "id": "1YbJM15w_STk6VQUZ0T8FjMIOeuPkS0-m",
            "contactNo": "2267494878"
          },
          {
            "firstName": "Parth",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1GskPPXqm9fjApHqjbVs6rR13aDJOa26s",
            "skill": "Batting",
            "id": "1GskPPXqm9fjApHqjbVs6rR13aDJOa26s",
            "contactNo": "548-33375143"
          },
          {
            "firstName": "Mihir",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=13h4t8Jz6YDkSK_P6bMmM-2AM1KnvMJxw",
            "skill": "Both",
            "id": "13h4t8Jz6YDkSK_P6bMmM-2AM1KnvMJxw",
            "contactNo": "6472196949"
          },
          {
            "firstName": "Swapnil",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1VWmS_7nRjtVpng2wFbSoPHnLNQJcWUlr",
            "skill": "Both",
            "id": "1VWmS_7nRjtVpng2wFbSoPHnLNQJcWUlr",
            "contactNo": "5485772203"
          },
          {
            "firstName": "Harsh",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1vpw9KMe1mZl9gWEfyxHMreBOeUdhz91F",
            "skill": "Batting",
            "id": "1vpw9KMe1mZl9gWEfyxHMreBOeUdhz91F",
            "contactNo": "5483338325"
          },
          {
            "firstName": "Tapan",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1m4iY1tJxcEEhmLcHAqZ5C22aTkoiRmnY",
            "skill": "Batting",
            "id": "1m4iY1tJxcEEhmLcHAqZ5C22aTkoiRmnY",
            "contactNo": "4379817480"
          }
        ]
      },
      
      {
        "teamName": "Scarborough Strikers",
        "players": [
          {
            "firstName": "Meetkumar",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1gEF6cUKdb6GhP0oyg1UwG7bzKYlqSsbj",
            "skill": "Both",
            "id": "1gEF6cUKdb6GhP0oyg1UwG7bzKYlqSsbj"
          },
          {
            "firstName": "Mann",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1i_Z0_ndx8oaNZEQCOcAFFz8GW2emx_RL",
            "skill": "Batting",
            "id": "1i_Z0_ndx8oaNZEQCOcAFFz8GW2emx_RL"
          },
          {
            "firstName": "Dhruv",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1PjU2LpnLEnmgJhuNV1a61Zu0-KQBpgq5",
            "skill": "Batting",
            "id": "1PjU2LpnLEnmgJhuNV1a61Zu0-KQBpgq5"
          },
          {
            "firstName": "Dharmil",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1uNkHSW5OruMOOckr3vk41mQeMi7dJ7Cz",
            "skill": "Batting",
            "id": "1uNkHSW5OruMOOckr3vk41mQeMi7dJ7Cz"
          },
          {
            "firstName": "Harsh",
            "lastName": "Madhu",
            "profilePhoto": "https://drive.google.com/uc?id=1WXUQivOsBKpFbW0wpn2SNr69Uc9pkn4M",
            "skill": "Bowling",
            "id": "1WXUQivOsBKpFbW0wpn2SNr69Uc9pkn4M"
          },
          {
            "firstName": "Kirtan",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=14CM55BIsURAFRYJu2akYvOivbvqzT55h",
            "skill": "Batting",
            "id": "14CM55BIsURAFRYJu2akYvOivbvqzT55h"
          },
          {
            "firstName": "Meet",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Parth",
            "lastName": "Patel Sevak",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          }
        ]
      },
      {
        "teamName": "Scarborough Falcons",
        "players": [
          {
            "firstName": "Jay",
            "lastName": "Bhadreshwara",
            "profilePhoto": "https://drive.google.com/uc?id=1KU9nSHOH0VifAzfOTHRWGBWIs6hxcIKr",
            "skill": "Batting",
            "id": "1KU9nSHOH0VifAzfOTHRWGBWIs6hxcIKr"
          },
          {
            "firstName": "Alkesh",
            "lastName": "Chaudhari",
            "profilePhoto": "https://drive.google.com/uc?id=1NM7NugJItRy4XkTFB2hWaFfzDsAPWajf",
            "skill": "Both",
            "id": "1NM7NugJItRy4XkTFB2hWaFfzDsAPWajf"
          },
          {
            "firstName": "Yash",
            "lastName": "Rao",
            "profilePhoto": "https://drive.google.com/uc?id=1t-jcviyFE-pLWMZJQv73rIfp2S54nRFL",
            "skill": "Batting",
            "id": "1t-jcviyFE-pLWMZJQv73rIfp2S54nRFL"
          },
          {
            "firstName": "Savan",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Kuntal",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Harsh",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Jay",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Dainik",
            "lastName": "",  // Last name not provided
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "P.",
            "lastName": "Suryavanshi",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          }
        ]
      },
      {
        "teamName": "London Strikers",
        "players": [
          {
            "firstName": "Fenil",
            "lastName": "Moradiya",
            "profilePhoto": "https://drive.google.com/uc?id=1wTgdPlAvnEH6cHX_dDcuaQnALZLXKHP4",
            "skill": "Both",
            "id": "1wTgdPlAvnEH6cHX_dDcuaQnALZLXKHP4"
          },
          {
            "firstName": "Chaitanya",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1beApXlmKOeOKODPLTdcJew07y9NquB_G",
            "skill": "Bowling",
            "id": "1beApXlmKOeOKODPLTdcJew07y9NquB_G"
          },
          {
            "firstName": "Manan",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1yWEKU7wyLBP7ZxcFESgBZ-gnRPRV_NFp",
            "skill": "Batting",
            "id": "1yWEKU7wyLBP7ZxcFESgBZ-gnRPRV_NFp"
          },
          {
            "firstName": "Vraj",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1DCoR7yFgvJzLTAP-x5xQVf-yOzvsyQfk",
            "skill": "Bowling",
            "id": "1DCoR7yFgvJzLTAP-x5xQVf-yOzvsyQfk"
          },
          {
            "firstName": "Jay",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1ZjT1geC19BWEfrMYvSYzvQtc5BIVNpsg",
            "skill": "Batting",
            "id": "1ZjT1geC19BWEfrMYvSYzvQtc5BIVNpsg"
          },
          {
            "firstName": "Rajdeep",
            "lastName": "Zala",
            "profilePhoto": "https://drive.google.com/uc?id=1ahYJynDjtsD1b5TAcR1GIwCc-rRorUTW",
            "skill": "Bowling",
            "id": "1ahYJynDjtsD1b5TAcR1GIwCc-rRorUTW"
          },
          {
            "firstName": "Deepesh",
            "lastName": "Padhiyar",
            "profilePhoto": "https://drive.google.com/uc?id=1o3MTLK-EkLvpL74aWRaor20RY_GUWqKf",
            "skill": "Batting",
            "id": "1o3MTLK-EkLvpL74aWRaor20RY_GUWqKf"
          },
          {
            "firstName": "Param",
            "lastName": "Sukhadiya",
            "profilePhoto": "https://drive.google.com/uc?id=11v5OniBo6BZPv9igoid35Jp65a3myS5X",
            "skill": "Batting",
            "id": "11v5OniBo6BZPv9igoid35Jp65a3myS5X"
          }
        ]
      },
      {
        "teamName": "Etobicoke Titans",
        "players": [
          {
            "firstName": "Harsh",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1rDSYJ5mlqrpfUMxKL3LVXzLemsQwwQwf",
            "skill": "Both",
            "id": "1rDSYJ5mlqrpfUMxKL3LVXzLemsQwwQwf"
          },
          {
            "firstName": "Vinit",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=1GafZfEM_WoQAbOG7g7TkNtv1N_cQezUu",
            "skill": "Both",
            "id": "1GafZfEM_WoQAbOG7g7TkNtv1N_cQezUu"
          },
          {
            "firstName": "Jenish",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1oXKt6NpJnE3wizl2gd_FwTaIqiw7rGB6",
            "skill": "Both",
            "id": "1oXKt6NpJnE3wizl2gd_FwTaIqiw7rGB6"
          },
          {
            "firstName": "Rajiv",
            "lastName": "Tarsarya",
            "profilePhoto": "https://drive.google.com/uc?id=1oWXVgZQkVrYUlq4eHini6n9BFOk4rjnG",
            "skill": "Batting",
            "id": "1oWXVgZQkVrYUlq4eHini6n9BFOk4rjnG"
          },
          {
            "firstName": "Vivek",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1DddXXlqLlG-BQID87xe5PY5CDGi7AXpn",
            "skill": "Batting",
            "id": "1DddXXlqLlG-BQID87xe5PY5CDGi7AXpn"
          },
          {
            "firstName": "Bankim",
            "lastName": "Modi",
            "profilePhoto": "https://drive.google.com/uc?id=1xsNGXz-tnxwU308rurL_F6s7nt3bU-NW",
            "skill": "Bowling",
            "id": "1xsNGXz-tnxwU308rurL_F6s7nt3bU-NW"
          },
          {
            "firstName": "Dhyeykumar",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1iu8DoGVVSZ1vbcEZ8DkjHgI6eowOmilk",
            "skill": "Bowling",
            "id": "1iu8DoGVVSZ1vbcEZ8DkjHgI6eowOmilk"
          },
          {
            "firstName": "Harsh",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1rp3y7Y6eYumiTcQasMaNOXCeSIqoxDbO",
            "skill": "Bowling",
            "id": "1rp3y7Y6eYumiTcQasMaNOXCeSIqoxDbO"
          }
        ]
      },
      {
        "teamName": "Etobicoke Eagles",
        "players": [
          {
            "firstName": "Rahil",
            "lastName": "Kanani",
            "profilePhoto": "https://drive.google.com/uc?id=1IdbLorRCgq1sT8ZbaEEg1NKyi-CeJFWJ",
            "skill": "Both",
            "id": "1IdbLorRCgq1sT8ZbaEEg1NKyi-CeJFWJ"
          },
          {
            "firstName": "Dhaval",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1Ec4ER4NcZ8NXa0BvQcLpzeVDTk7eJeK3",
            "skill": "Both",
            "id": "1Ec4ER4NcZ8NXa0BvQcLpzeVDTk7eJeK3"
          },
          {
            "firstName": "Ritesh",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1ejx89zniGY8yDHfPk596VmFqd7X0P1w6",
            "skill": "Both",
            "id": "1ejx89zniGY8yDHfPk596VmFqd7X0P1w6"
          },
          {
            "firstName": "Jenish",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1oXKt6NpJnE3wizl2gd_FwTaIqiw7rGB6",
            "skill": "Bowling",
            "id": "1oXKt6NpJnE3wizl2gd_FwTaIqiw7rGB6"
          },
          {
            "firstName": "Nisarg",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Devashish",
            "lastName": "Thakkar",
            "profilePhoto": "https://drive.google.com/uc?id=1fSaqp37s_qejAYXcwC6JdAWHvBw8KZM2",
            "skill": "Batting",
            "id": "1fSaqp37s_qejAYXcwC6JdAWHvBw8KZM2"
          },
          {
            "firstName": "Vipul",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Dweep",
            "lastName": "",
            "profilePhoto": "https://drive.google.com/uc?id=11qxo_ddPdQErPy60uDOtXs---y14-wVR",
            "skill": "Batting",
            "id": "11qxo_ddPdQErPy60uDOtXs---y14-wVR"
          }
        ]
      },
      {
        "teamName": "Etobicoke Kings",
        "players": [
          {
            "firstName": "Jetani",
            "lastName": "Harsh",
            "profilePhoto": "https://drive.google.com/uc?id=1QWPjoK2iixSjFlBn20guxhSW8VDKsaqu",
            "skill": "Bowling",
            "id": "1QWPjoK2iixSjFlBn20guxhSW8VDKsaqu"
          },
          {
            "firstName": "Tirth",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Vivek",
            "lastName": "Jethva",
            "profilePhoto": "https://drive.google.com/uc?id=18eBdA8g3j_sAHZ12BdRgnLJqnlOOBwmC",
            "skill": "Batting",
            "id": "18eBdA8g3j_sAHZ12BdRgnLJqnlOOBwmC"
          },
          {
            "firstName": "Smit",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Jasmin",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=11-E6lvZA8fYSsfACMADdkKOIJzefdqaI",
            "skill": "Batting",
            "id": "11-E6lvZA8fYSsfACMADdkKOIJzefdqaI"
          },
          {
            "firstName": "Rutul",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1zlpaBXtEmnFXNxDkjWIJWGTj8_RIyERR",
            "skill": "Bowling",
            "id": "1zlpaBXtEmnFXNxDkjWIJWGTj8_RIyERR"
          },
          {
            "firstName": "Siddharth",
            "lastName": "Goswami",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Yash",
            "lastName": "Khandla",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          }
        ]
      },
      {
        "teamName": "Etobicoke Capitals",
        "players": [
          {
            "firstName": "Tarang",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1K9qVYWF6dmt_6cKZCVsBD1J_-IhvK0Eq",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Darshnik",
            "lastName": "Patel",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Vansh",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1_l6VMZVkHfQPNrWax6FAqxOtCn0lYUkr",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Siddhant",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1nLhhU0zAYKUJgFU2alDn1x2y_SLu-8jI",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Meet",
            "lastName": "Makwana",
            "profilePhoto": "https://drive.google.com/uc?id=1aa-OlzHBlHcduIyR3GKvPiQOofUmB_Kt",
            "skill": "Both",
            "id": "1aa-OlzHBlHcduIyR3GKvPiQOofUmB_Kt",
            "contactNo": "4375669679"
          },
          {
            "firstName": "Tilak",
            "lastName": "Jethwa",
            "profilePhoto": "https://drive.google.com/uc?id=1UpbT695vrmN0i0EaggAyVrMwUhTqiRV9",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Parth",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1WDs23Z0DQ1g6Yvsi-57sBRNYEZC6L9lA",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Anuj",
            "lastName": "Gadhiya",
            "profilePhoto": "https://drive.google.com/uc?id=1-71M-7eXnUWIRkAR3Uj9q5bNyt5bfkcn",  // Photo not provided
            "skill": "Bowling",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Bhavesh",
            "lastName": "Waghela",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          }
        ]
      },
      {
        "teamName": "Royal Challengers Hamilton",
        "players": [
          {
            "firstName": "Dhruv",
            "lastName": "Rana",
            "profilePhoto": "https://drive.google.com/uc?id=1oKOOBZp8iymk9eeLqtGTiYywItTzXYaC",
            "skill": "Both",
            "id": "1oKOOBZp8iymk9eeLqtGTiYywItTzXYaC",
            "contactNo": "4378481555"
          },
          {
            "firstName": "Yash",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1DamkJ64yU27Lz8TtzTPgmGeXO926nCVm",
            "skill": "Batting",
            "id": "1DamkJ64yU27Lz8TtzTPgmGeXO926nCVm",
            "contactNo": "365-889-4280"
          },
          {
            "firstName": "Trushar",
            "lastName": "Bhavsar",
            "profilePhoto": "https://drive.google.com/uc?id=1wbp1rPcpuAMtgMBra7TmBbzY9UPHBTzk",
            "skill": "Batting",
            "id": "1wbp1rPcpuAMtgMBra7TmBbzY9UPHBTzk",
            "contactNo": "6477731340"
          },
          {
            "firstName": "Vaibhav",
            "lastName": "Surti",
            "profilePhoto": "https://drive.google.com/uc?id=1RzkwXPVxiZSAZ-Oah4XqKPOE1nxEmPsq",
            "skill": "Both",
            "id": "1RzkwXPVxiZSAZ-Oah4XqKPOE1nxEmPsq",
            "contactNo": "289-887-8675"
          },
          {
            "firstName": "Dhruvesh",
            "lastName": "Patel",
            "profilePhoto": "https://drive.google.com/uc?id=1UdtYNpUp0e3eTdSEgtAvJ9W0OT-vXUCJ",
            "skill": "Both",
            "id": "1UdtYNpUp0e3eTdSEgtAvJ9W0OT-vXUCJ",
            "contactNo": "9059669433"
          },
          {
            "firstName": "Deep",
            "lastName": "Mistry",
            "profilePhoto": "https://drive.google.com/uc?id=1SekRgG3rhH2LE8rF1ly7t6xulhEc9daS",
            "skill": "Batting",
            "id": "1SekRgG3rhH2LE8rF1ly7t6xulhEc9daS",
            "contactNo": "4389214438"
          },
          {
            "firstName": "Tirth",
            "lastName": "Raval",
            "profilePhoto": "https://drive.google.com/uc?id=18pMmNCFTV1bLOC4XMpvxYq-n0l_gAvlQ",
            "skill": "Batting",
            "id": "18pMmNCFTV1bLOC4XMpvxYq-n0l_gAvlQ",
            "contactNo": "3653232850"
          },
          {
            "firstName": "Tirth",
            "lastName": "Soni",
            "profilePhoto": "https://drive.google.com/uc?id=1YQA6OeWiLgTgi3FfFGXCQlTCn9O40YRT",
            "skill": "Batting",
            "id": "1YQA6OeWiLgTgi3FfFGXCQlTCn9O40YRT",
            "contactNo": "9059669433"
          }
        ]
      },
      {
        "teamName": "Kitchener Titans",
        "players": [
          {
            "firstName": "Sahaj",
            "lastName": "Limbani",
            "profilePhoto": "https://drive.google.com/uc?id=1apecx-uAoYVg1YIxAQ9nn7e92roWH5je",
            "skill": "Both",
            "id": "1apecx-uAoYVg1YIxAQ9nn7e92roWH5je",
            "contactNo": "5485772203"
          },
          {
            "firstName": "Shubam",
            "lastName": "Singh",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Pruthvi",
            "lastName": "Viradiya",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Gyan",
            "lastName": "Pandya",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Both",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Himanshu",
            "lastName": "Parmar",
            "profilePhoto": "https://drive.google.com/uc?id=1BZ39smRSSMkGGDGS1Fl0FYKY4B6X5QTa",
            "skill": "Bowling",
            "id": "1BZ39smRSSMkGGDGS1Fl0FYKY4B6X5QTa",
            "contactNo": "6472196949"
          },
          {
            "firstName": "Vandan",
            "lastName": "Jethwa",
            "profilePhoto": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",  // Photo not provided
            "skill": "Batting",
            "id": ""  // No ID provided
          },
          {
            "firstName": "Jignesh",
            "lastName": "Solanki",
            "profilePhoto": "https://drive.google.com/uc?id=1GXLLrX3ys2uaStwq3efAUtgP41eTlOs1",
            "skill": "Bowling",
            "id": "1GXLLrX3ys2uaStwq3efAUtgP41eTlOs1",
            "contactNo": "4377741911"
          },
          {
            "firstName": "Bhargav",
            "lastName": "Pansara",
            "profilePhoto": "https://drive.google.com/uc?id=1dMzvQiOsa1c-haQ61bo16exdL1oZGVQ4",
            "skill": "Batting",
            "id": "1dMzvQiOsa1c-haQ61bo16exdL1oZGVQ4",
            "contactNo": "5483330687"
          }
        ]
      }
      
    
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
