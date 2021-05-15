import React from "react";
// import {  Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { People } from "../components/People";
import { Home } from "../components/Home";
import { Planets } from "../components/Planets";
import { StarShips } from "../components/StarShips";
import { Vehicles } from "../components/Vehicles";
import { PeopleScreen } from "../components/UI/PeopleScreen";
export const AppRouter = () => {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/People" component={People} />
          <Route
            exact
            path="/People/:name/:birth_year/:height/:mass/:hair_color/:skin_color/:eye_color/:gender"
            component={PeopleScreen}
          />
          <Route exact path="/Planets" component={Planets} />
          <Route exact path="/StarShips" component={StarShips} />
          <Route exact path="/Vehicles" component={Vehicles} />
          <Redirect to="/Home" component={Home} />
        </Switch>
      </>
    </Router>
  );
};
