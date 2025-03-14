import React from "react";
import "./Loader.css";
import loaderSVG from "./loader.svg";

const Loader = () => {
  return (
    <div id="container">
      <div id="ball-1" className="circle"> <img src={loaderSVG} alt="Loading..." className="loader-svg" /></div>

      <div id="ball-2" className="circle"> <img src={loaderSVG} alt="Loading..." className="loader-svg" /></div>
      <div id="ball-3" className="circle"> <img src={loaderSVG} alt="Loading..." className="loader-svg" /></div>
      <div id="ball-4" className="circle"> <img src={loaderSVG} alt="Loading..." className="loader-svg" /></div>
      
    </div>
  );
};

export default Loader;
