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
export const AppRouter = ({
  dataPeople,
  dataPlanets,
  dataStarShips,
  dataVehicles,
}) => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container mt-2">
          <Switch>
            <Route exact path="/People" component={People} />
            <Route exact path="/Planets" component={Planets} />
            <Route exact path="/StarShips" component={StarShips} />
            <Route exact path="/Vehicles" component={Vehicles} />
            <Redirect to="/Home" component={Home} />
          </Switch>
        </div>
      </>
    </Router>
  );
};
