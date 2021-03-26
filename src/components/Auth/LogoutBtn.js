import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const LogoutBtn = () => {
  const { handleSuccessfulLogout } = useContext(AuthContext);
  return (
    <div>
      <button onClick={handleSuccessfulLogout} className="nav_btn">
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
