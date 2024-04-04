// the following are from node_modules
// import React from "react"; // core react library
import ReactDOM from "react-dom/client"; // React package for working with the DOM.

// custom imports -- from our project
import App from "./App.tsx"; // importing App component
// Integrating bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css"; // external styles
import "./index.css"; // importing css -- global styles -- external styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
