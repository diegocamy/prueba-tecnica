import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { History } from "./pages/History/History";
import { Home } from "./pages/Home";

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
      </Switch>
    </Router>
  );
};
