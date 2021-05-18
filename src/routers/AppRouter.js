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
import { PeopleScreen } from "../components/screens/PeopleScreen";
import { PlanetsScreen } from "../components/screens/PlanetsScreen";
import { StarShipsScreen } from "../components/screens/StarShipsScreen";
import { VehiclesScreen } from "../components/screens/VehiclesScreen";
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
          <Route
            exact
            path="/Planets/:name/:rotation_period/:orbital_period/:diameter/:climate/:gravity/:terrain/:surface_water/:population"
            component={PlanetsScreen}
          />
          <Route exact path="/StarShips" component={StarShips} />
          <Route
            exact
            path="/Starships/:name/:model/:manufacturer/:cost_in_credits/:length/:max_atmosphering_speed/:crew/:passengers/:cargo_capacity/:consumables/:hyperdrive_rating/:MGLT/:starship_class"
            component={StarShipsScreen}
          />
          <Route exact path="/Vehicles" component={Vehicles} />
          <Route
            exact
            path="/vehicles/:name/:model/:manufacturer/:cost_in_credits/:length/:max_atmosphering_speed/:crew/:passengers/:cargo_capacity/:consumables/:vehicle_class"
            component={VehiclesScreen}
          />
          <Redirect to="/Home" component={Home} />
        </Switch>
      </>
    </Router>
  );
};
