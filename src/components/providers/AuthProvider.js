import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [userId, setUserId] = useState(null);
  let history = useHistory();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/v1/logged_in",
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.message === "User Loggedin Via Cookie") {
          setUserId(res.data.user_id);
          setLoggedInStatus("LOGGED_IN");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSuccessfulLogin = (user_id) => {
    setLoggedInStatus("LOGGED_IN");
    setUserId(user_id);
    history.push("/");
  };

  const handleSuccessfulLogout = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/v1/logout",
      withCredentials: true,
    })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const state = {
    loggedInStatus,
    setLoggedInStatus,
    handleSuccessfulLogin,
    handleSuccessfulLogout,
    userId,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
