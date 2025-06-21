import React from "react";
import Landing from "../components/Landing.jsx";
import Project from "../components/Project.jsx";
import Experiences from "../components/Experiences.jsx";

function Home({ data }) {
  return (
    <>
      <Landing basics={data.basics} />

      <div className="my-10">
        <h2 className="text-4xl text-secondary  font-semibold py-8">
          Experiences
        </h2>
        <Experiences />
      </div>

      <div className="my-10">
        <h2 className="text-4xl text-secondary  font-semibold py-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <Project key={index} data={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
