import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import AuthProvider from "./components/providers/AuthProvider";
import "./style/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

