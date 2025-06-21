import React from "react";
import Landing from "../components/Landing.jsx";

function Home({ data }) {
  return (
    <>
      <Landing basics={data.basics} />
    </>
  );
}

export default Home;
