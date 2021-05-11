import React, { useEffect, useState } from "react";

export const StarShips = () => {
  const [starShips, setStarShips] = useState([]);

  const fetchStarShips = async () => {
    let response = await fetch("https://swapi.dev/api/starships/?format=json");
    let data = await response.json();
    setStarShips(data.results);
  };
  useEffect(() => {
    fetchStarShips();
  }, []);
  return (
    <div>
      <h1>StarShips</h1>
    </div>
  );
};
