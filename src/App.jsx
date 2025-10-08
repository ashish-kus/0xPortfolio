import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import data from "./data/portfolioData.json";
import Projects from "./Pages/Projects.jsx";

function App() {
  return (
    <div className="bg-primary h-full w-full py-4 font-raleway">
      <div className=" mx-auto w-full max-w-full px-4 sm:max-w-[75%] lg:max-w-[50%]">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/projects" element={<Projects data={data.projects} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
