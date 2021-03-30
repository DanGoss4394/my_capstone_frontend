import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../Auth/AuthForm";
// import LogoutBtn from "../Auth/LogoutBtn";

import AuthContext from "../contexts/AuthContext";

const Auth = () => {
  const { loggedInStatus } = useContext(AuthContext);
  let history = useHistory();

  return (
    <div className="auth_container">
      <div className="auth_wrapper">
        {loggedInStatus === "LOGGED_IN" ? history.push("/") : <AuthForm />}
      </div>
    </div>
  );
};
export default Auth;
