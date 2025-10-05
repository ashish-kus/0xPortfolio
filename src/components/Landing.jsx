import GitHubCalendar from "react-github-calendar";

import React from "react";

const Landing = ({ basics }) => {
  const { name, title, summery, tags, email, phone, github, linkedin } = basics;

  return (
    <>
      <div className="pt-10 flex justify-cente">
        <GitHubCalendar username="ashish-kus" />
      </div>
      <div className="text-secondary mt-10 md:mt-16 lg:mt-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {name}
        </h2>
        <p className="text-lg sm:text-xl font-bold mt-2">{title}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm sm:text-base rounded-md border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="pt-4 text-sm sm:text-md md:text-lg lg:text-lg text-justify">
          {summery}
        </p>
      </div>
    </>
  );
};

export default Landing;
