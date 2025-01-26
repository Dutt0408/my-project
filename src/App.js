import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Rules from "./Rules";
import Home from "./Home";
import Teams from "./Teams";
import PointTable from "./PointTable";
import Memories from "./Memories";
import Sponsors from "./Sponsors";
import Schedule from "./Schedule";
import Soon from "./Soon";
import { Routes, Route, useLocation } from "react-router-dom";
import gif from "../src/images/imp.gif"

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);

      // Simulate image and asset loading for the current route
      await new Promise((resolve) => setTimeout(resolve, 600)); // Adjust this to actual loading time

      setIsLoading(false);
    };

    loadContent();
  }, [location]);

  return (
    <div>
      {/* Loader */}
      {isLoading && (
        <div className="popup-loader">
          <img
            className="loader-gif"
            src={gif}
            alt="Loading..."
          />
        </div>
      )}

      {!isLoading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/PointTable" element={<PointTable />} />
            <Route path="/Memories" element={<Memories/>} />
            <Route path="/Sponsors" element={<Sponsors />} />
            <Route path="/Soon" element={<Soon />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
