import React, { useEffect, useState } from "react";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const fetchVehicles = async () => {
    let response = await fetch("https://swapi.dev/api/vehicles/?format=json");
    let data = await response.json();
    setVehicles(data.results);
  };
  useEffect(() => {
    fetchVehicles();
  }, []);
  return (
    <div>
      <h1>Vehicles</h1>
    </div>
  );
};
