import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/v1/logged_in",
      withCredentials: true,
    })
      .then((res) => {
        if (res.data === "User Loggedin Via Cookie") {
          setLoggedInStatus("LOGGED_IN");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSuccessfulLogin = () => {
    setLoggedInStatus("LOGGED_IN");
    return <Redirect to="/" />;
  };

  const handleSuccessfulLogout = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/v1/logout",
      withCredentials: true,
    })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        return <Redirect to="/" />;
      })
      .catch((err) => console.log(err));
  };

  const state = {
    loggedInStatus,
    setLoggedInStatus,
    handleSuccessfulLogin,
    handleSuccessfulLogout,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
