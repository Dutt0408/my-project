import "./App.css";
import Navbar from "./Navbar";
import Rules from "./Rules";
import Home from "./Home";
import Schedule from "./Schedule";
import Teams from "./Teams";
import PointTable from "./PointTable";
import Winner from "./Winner";

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
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/PointTable" element={<PointTable />} />
        <Route path="/Winner" element={<Winner />} />
       
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
