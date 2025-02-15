import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Rules from "./Rules";
import Home from "./Home";
import Teams from "./Teams";
import PointTable from "./PointTable";
import Sponsors from "./Sponsors";
import Schedule from "./Schedule";
import Soon from "./Soon";
import Live from "./LiveScore";
import { Routes, Route, useLocation } from "react-router-dom";
import gif from "../src/images/imp.gif";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsLoading(false);
    };
    loadContent();
  }, [location]);

  return (
    <div>
      {isLoading && (
        <div className="popup-loader">
          <img className="loader-gif" src={gif} alt="Loading..." />
        </div>
      )}

      {!isLoading && (
        <>
          {location.pathname !== "/Live" && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/PointTable" element={<PointTable />} />
            <Route path="/Sponsors" element={<Sponsors />} />
            <Route path="/Soon" element={<Soon />} />
            <Route path="/Live" element={<Live />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
