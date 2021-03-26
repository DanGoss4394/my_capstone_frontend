import React, { useState, useContext } from "react";
import AuthForm from "../Auth/AuthForm";
import LogoutBtn from "../Auth/LogoutBtn";

import AuthContext from "../contexts/AuthContext";

const Auth = () => {
  const { loggedInStatus } = useContext(AuthContext);

  return (
    <div className="auth_container">
      <div className="auth_wrapper">
        {loggedInStatus === "LOGGED_IN" ? <LogoutBtn /> : <AuthForm />}
      </div>
    </div>
  );
};
export default Auth;
