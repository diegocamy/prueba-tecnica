import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
      </Switch>
    </Router>
  );
};
