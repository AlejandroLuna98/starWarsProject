import React, { useEffect, useState } from "react";
import { AppRouter } from "./routers/AppRouter";
import "./styles/app.scss";
function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starShips, setStarShips] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let response = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await response.json();
      setPeople(data.results);
    }
    async function fetchPlanets() {
      let response = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await response.json();
      setPlanets(data.results);
    }
    async function fetchStarShips() {
      let response = await fetch(
        "https://swapi.dev/api/starships/?format=json"
      );
      let data = await response.json();
      setStarShips(data.results);
    }
    async function fetchVehicles() {
      let response = await fetch("https://swapi.dev/api/vehicles/?format=json");
      let data = await response.json();
      setVehicles(data.results);
    }
    fetchPeople();
    fetchPlanets();
    fetchStarShips();
    fetchVehicles();
  }, []);
  console.log("people", people);
  console.log("vehicles", vehicles);
  console.log("Planets", planets);
  console.log("starShips", starShips);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
