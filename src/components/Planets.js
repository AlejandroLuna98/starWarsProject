import React, { useEffect, useState } from "react";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    let response = await fetch("https://swapi.dev/api/planets/?format=json");
    let data = await response.json();
    setPlanets(data.results);
  };
  useEffect(() => {
    fetchPlanets();
  }, []);
  return (
    <div>
      <h1>Planets</h1>
    </div>
  );
};
