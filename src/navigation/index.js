import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../modules/home";
import Cache from "../modules/cache";
const Navigation = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home/:id" component={Home} />
          <Route exact path="/cache" component={Cache}></Route>
          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    </>
  );
};
export default Navigation;
