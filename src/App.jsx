import "./App.css";
import Home from "./Pages/Home.jsx";
import data from "./data/portfolioData.json";

function App() {
  return (
    <div className="bg-primary h-full w-full py-4">
      <div className=" mx-auto w-full max-w-full px-4 sm:max-w-[75%] lg:max-w-[50%]">
        <Home data={data} />
      </div>
    </div>
  );
}

export default App;
