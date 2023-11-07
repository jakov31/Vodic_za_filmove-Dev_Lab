import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./UserContext";

import "./index.css";
import { ShowsContextProvider } from "./Context/ShowsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <ShowsContextProvider>
        <App />
      </ShowsContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
