import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import LogoutBtn from "../Auth/LogoutBtn";
import AuthContext from "../contexts/AuthContext";

const Navigation = () => {
  const { loggedInStatus } = useContext(AuthContext);
  return (
    <div className="nav-bar-wrapper">
      <div className="left">
        <div className="nav-link">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>
      </div>

      <div className="right">
        <div className="nav-link">
          {/* <AuthContext.Provider> */}
            {/* {loggedInStatus === "LOGGED_IN" ? ( */}
              <NavLink to="/auth" activeClassName="nav-link-active">
                <button className="btn">Login</button>
              </NavLink>
            {/* ) : (
              <LogoutBtn />
            )}
          </AuthContext.Provider> */}
        </div>

        <div className="nav-link">
          <NavLink to="/blog" activeClassName="nav-link-active">
            <button className="btn">Blog</button>
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/profile" activeClassName="nav-link-active">
            <button className="btn">Profile</button>
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/schedule" activeClassName="nav-link-active">
            <button className="btn">Schedules</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
