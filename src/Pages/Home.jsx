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
      <Experience data={data.experience} />
      <Project data={data.projects} />
      <Skills skills={data.skills} />

      {/* Certifications Section */}
      <section className="mt-12 md:mt-20 lg:mt-28">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold pb-5">
          Certifications 🏅
        </h2>
        <div className="space-y-6">
          {data.certificates.map((certificates, index) => (
            <Certificate key={index} data={certificates} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
