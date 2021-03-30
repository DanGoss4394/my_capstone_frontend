import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import LogoutBtn from "../Auth/LogoutBtn";
import AuthContext from "../contexts/AuthContext";
import SearchBar from "../Search/SearchBar";

const Navigation = () => {
  const { loggedInStatus } = useContext(AuthContext);
  return (
    <div className="nav-bar-wrapper">
      <div className="left">
        <div className="nav-link">
          <NavLink
            exact
            to="/"
            activeClassName="nav-link-active"
            className="logo"
          >
            <h1>SFANS</h1>
          </NavLink>
        </div>
      </div>

      <div className="right">
        {loggedInStatus === "LOGGED_IN" ? (
          <>
            <div className="right_top">
              <div className="search_bar">
                <SearchBar />
              </div>
            </div>
            <div className="right_bottom">
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
