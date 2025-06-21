import React from "react";

const Landing = ({ basics }) => {
  const { name, title, email, phone, github, linkedin } = basics;

  return (
    <div className="mt-20">
      <h2 className="">{name}</h2>
      <p className="">{title}</p>
    </div>
  );
};

export default Landing;
