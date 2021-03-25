import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../style/main.scss";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Schedule from "./pages/Schedule";
import Home from "./pages/Home";
import Navigation from "./navigation/Navigation";
import { API_URL } from "../api/api";


function App() {
  console.log(API_URL);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/blog" component={Blog} />
          <Route path="/profile" component={Profile} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
