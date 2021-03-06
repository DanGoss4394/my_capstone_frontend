import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

import { API_URL } from "../../api/api";

const AuthProvider = (props) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

  let history = useHistory();

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}v1/logged_in`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.message === "User Loggedin Via Cookie") {
          setUserId(res.data.user_id);
          setUsername(res.data.username);
          setAvatar(res.data.avatar);
          setLoggedInStatus("LOGGED_IN");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSuccessfulLogin = (user_id, db_avatar) => {
    setLoggedInStatus("LOGGED_IN");
    setAvatar(db_avatar);
    setUserId(user_id);
    history.push("/");
  };

  const handleSuccessfulLogout = () => {
    axios({
      method: "post",
      url: `${API_URL}v1/logout`,
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
    username,
    avatar,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
