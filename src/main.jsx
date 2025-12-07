import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { HashRouter } from "react-router-dom"; // ✅ use HashRouter for static hosting
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (ReactDOM.hydrateRoot) {
  // ✅ react-snap friendly hydration
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <HeroUIProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </HeroUIProvider>
    </React.StrictMode>,
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HeroUIProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </HeroUIProvider>
    </React.StrictMode>,
  );
}
