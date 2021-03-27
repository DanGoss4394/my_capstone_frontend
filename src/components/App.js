import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import "../style/main.scss";
import Auth from "./pages/Auth";
import AddBlog from "./pages/AddBlog";
import Profile from "./pages/Profile";
import Schedule from "./pages/Schedule";
import Home from "./pages/Home";
import Navigation from "./navigation/Navigation";
import Blog from "./pages/Blog";
import AuthContext from "./contexts/AuthContext";
import Nomatch from "./pages/Nomatch";

function App() {
  const { loggedInStatus } = useContext(AuthContext);

  const authorizedPages = () => {
    return [
      <Route key="add-blog" path="/add-blog" component={AddBlog} />,
      <Route key="profile" path="/profile" component={Profile} />,
      <Route key="schedule" path="/schedule" component={Schedule} />,
      <Route key="blog" path="/blog/:blogId" component={Blog} />,
    ];
  };
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />

        {loggedInStatus === "LOGGED_IN" && authorizedPages()}
        <Route component={Nomatch} />
      </Switch>
    </div>
  );
}

export default App;
