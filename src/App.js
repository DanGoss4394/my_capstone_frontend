import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/main.scss";
import Auth from "./components/pages/Auth";
import Blog from "./components/pages/Blog";
import Profile from "./components/pages/Profile";
import Schedule from "./components/pages/Schedule";
import Home from "./components/pages/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
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
