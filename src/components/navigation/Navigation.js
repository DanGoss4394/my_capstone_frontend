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
      <div className="middle">
        <h1>SFANS</h1>
      </div>

      <div className="right">
        {/* <div className="nav-link">
          {loggedInStatus === "LOGGED_IN" ? (
            <LogoutBtn />
          ) : (
            <NavLink to="/auth" activeClassName="nav-link-active">
              <button className="nav_btn">Login</button>
            </NavLink>
          )}
        </div> */}

        {loggedInStatus === "LOGGED_IN" ? (
          <>
            <div className="nav-link">
              <LogoutBtn />
            </div>
            <div className="nav-link">
              <NavLink to="/add-blog" activeClassName="nav-link-active">
                <button className="nav_btn">Add Blog</button>
              </NavLink>
            </div>

            <div className="nav-link">
              <NavLink to="/profile" activeClassName="nav-link-active">
                <button className="nav_btn">Profile</button>
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink to="/schedule" activeClassName="nav-link-active">
                <button className="nav_btn">Schedules</button>
              </NavLink>
            </div>
          </>
        ) : (
          <div className="nav-link">
            <NavLink to="/auth" activeClassName="nav-link-active">
              <button className="nav_btn">Login</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
