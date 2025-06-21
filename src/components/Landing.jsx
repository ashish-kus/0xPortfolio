import React from "react";

const Landing = ({ basics }) => {
  const { name, title, summery, tags, email, phone, github, linkedin } = basics;

  return (
    <div className="pt-40 text-secondary">
      <h2 className="text-5xl font-bold">{name}</h2>
      <p className="text-xl font-bold mt-2">{title}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 text-xl  rounded-xl border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="pt-12 text-lg text-justify">{summery}</p>
    </div>
  );
};

export default Landing;
