import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./assets/styles/main.scss";
import "@theme-toggles/react/styles/classic.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
