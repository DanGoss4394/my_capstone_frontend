import { NavLink } from "react-router-dom";

const Navigation = () => {
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
          <NavLink to="/auth" activeClassName="nav-link-active">
            Login
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/profile" activeClassName="nav-link-active">
            Profile
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/schedule" activeClassName="nav-link-active">
            Schedules
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
