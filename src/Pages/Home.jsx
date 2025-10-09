import React from "react";
import Landing from "../components/Landing.jsx";
import ActionButtonList from "../components/ActionButtonList.jsx";
import Project from "../components/Project.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Certificate from "../components/Certificate.jsx";
import Footer from "../components/Footer.jsx";

function Home({ data }) {
  return (
    <>
      <Landing basics={data.basics} />
      <ActionButtonList />
      <Experience data={data.experience} />
      <Project data={data.projects} />
      <Skills skills={data.skills} />

      <section className="mt-12 md:mt-20 lg:mt-28">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold pb-5">
          Certifications 🏅
        </h2>
        <div className="space-y-6">
          {data.certificates.map((certificate, index) => (
            <Certificate key={index} data={certificate} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;

{
  /* Name and Role 

import React, { useState, useEffect } from "react";
import Landing from "../components/Landing.jsx";
import ActionButtonList from "../components/ActionButtonList.jsx";
import Project from "../components/Project.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Certificate from "../components/Certificate.jsx";
import Footer from "../components/Footer.jsx";
import SplashScreen from "../components/SplashScreen.jsx";

function Home({ data }) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showSplash && (
        <div
          className={`transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
          <SplashScreen />
        </div>
      )}

      <div className={`${showSplash ? "invisible" : "visible"}`}>
        <Landing basics={data.basics} />
        <ActionButtonList />
        <Experience data={data.experience} />
        <Project data={data.projects} />
        <Skills skills={data.skills} />
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
      </div>
    </>
  );
}

export default Home;
*/
}
