import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import data from "./data/portfolioData.json";
import Projects from "./Pages/Projects.jsx";
import BottomNavBar from "./components/BottomNavBar.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
  return (
    <div className="bg-primary h-full w-full font-raleway overflow-hidden">
      <div className="mx-auto w-full max-w-full px-4 sm:max-w-[75%] lg:max-w-[50%]">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/projects" element={<Projects data={data.projects} />} />
          <Route
            path="/connect"
            element={<ContactPage basics={data.basics} />}
          />
          <Route
            path="/profile"
            element={<ProfilePage basics={data.basics} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavBar />
      </div>
    </div>
  );
}

export default App;
