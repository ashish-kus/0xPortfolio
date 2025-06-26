import React from "react";
import Landing from "../components/Landing.jsx";
import Project from "../components/Project.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Certificate from "../components/Certificate.jsx";
import Footer from "../components/Footer.jsx";
function Home({ data }) {
  return (
    <>
      <Landing basics={data.basics} />

      <div className="mt-6">
        <h2 className="text-4xl text-secondary  font-semibold py-8">
          Experiences 💼
        </h2>

        <div className="">
          {data.experience.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-4xl text-secondary  font-semibold py-8">
          Projects 📁
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <Project key={index} data={project} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-4xl text-secondary  font-semibold py-8">
          Skills 💪
        </h2>
        <Skills skills={data.skills} />
      </div>

      <div className="my-10">
        <h2 className="text-4xl text-secondary  font-semibold py-8">
          Certification 🏅
        </h2>

        <div className="">
          {data.certificates.map((certificates, index) => (
            <Certificate key={index} data={certificates} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
