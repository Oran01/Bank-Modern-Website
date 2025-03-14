import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * Main Entry Point of the Application
 *
 * This file is responsible for rendering the React application into the root DOM element.
 * - Uses `StrictMode` to highlight potential issues in the app during development.
 * - Uses `createRoot` from React 18 for concurrent rendering support.
 * - Imports global CSS styles (`index.css`).
 * - Mounts the `App` component inside the `#root` element in `index.html`.
 *
 * @module main
 */

// Select the root HTML element and render the React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
