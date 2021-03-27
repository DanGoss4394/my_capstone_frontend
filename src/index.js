import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./style/main.scss";
import App from "./components/App";
import AuthProvider from "./components/providers/AuthProvider";
import BlogProvider from "./components/providers/BlogProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
