import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY4KergmnOtmLXmfbAheUfp2rKI4Ngg18",
  authDomain: "subscription-82909.firebaseapp.com",
  databaseURL: "https://subscription-82909-default-rtdb.firebaseio.com",
  projectId: "subscription-82909",
  storageBucket: "subscription-82909.appspot.com",
  messagingSenderId: "217451852812",
  appId: "1:217451852812:web:98e4729d862185b8f1ea29",
  measurementId: "G-NG1YPJLH8F"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Fetch Team Profiles Data
export const fetchTeamProfiles = async () => {
  const dbRef = ref(database, "Teamprofile");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No team profiles available");
    return {};
  }
};

// Fetch Schedule Data
export const fetchScheduleData = async () => {
  const dbRef = ref(database, "Schedule");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No schedule data available");
    return [];
  }
};
  // Fetch Point Table Data
export const fetchPointTableData = async () => {
    const dbRef = ref(database, "PointTable");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No point table data available");
      return [];
    }
  };
  
  export const fetchLiveMatchData = async () => {
    try {
      const dbRef = ref(database, "Live/Main");
      const snapshot = await get(dbRef);
  
      if (!snapshot.exists()) {
        console.warn("No live match data found in the database.");
        return null;
      }
  
      const liveMatchData = snapshot.val();
      if (typeof liveMatchData !== "object" || liveMatchData === null) {
        throw new Error("Invalid live match data format.");
      }
  
      return liveMatchData;
    } catch (error) {
      console.error("Error fetching live match data:", error);
      return null;
    }
  };
  


