import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#FFFFFF",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          background: "#007bff",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
