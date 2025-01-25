import "./App.css";
import Navbar from "./Navbar";
import Rules from "./Rules";
import Home from "./Home";
// import Schedule from "./Schedule";
import Teams from "./Teams";
import PointTable from "./PointTable";
import Sponsors from "./Sponsors"
import Soon from "./Soon";

// import { PrimeReactProvider } from "primereact/api";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Schedule" element={<Schedule />} /> */}
        <Route path="/Schedule" element={<Soon />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/PointTable" element={<PointTable />} />
        <Route path="/Sponsors" element={<Sponsors/>}/>
        <Route path="/Soon" element={<Soon/>}/>
       
      </Routes>
      {/* <Home/>
     
        <PrimeReactProvider>
        <Rules />
        </PrimeReactProvider>
     */}
    </div>
  );
}

export default App;
