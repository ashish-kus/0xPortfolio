import "./App.css";
import Home from "./Pages/Home.jsx";
import data from "./data/portfolioData.json";

function App() {
  return (
    <div className="mx-auto w-full max-w-full px-4 sm:max-w-[75%] lg:max-w-[50%]">
      <Home data={data} />
    </div>
  );
}

export default App;
