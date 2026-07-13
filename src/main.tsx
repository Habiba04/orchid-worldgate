import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./i18n";

// original stylesheet cascade, unchanged, in the original order
import "./CSS/normalize.css";
import "./CSS/fontawesome.ts";
import "./CSS/styles.css";
import "./CSS/rtl.css";

import { injectLandingBackgrounds } from "./utils/cloudinaryLandingBackground";
injectLandingBackgrounds();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);