import React, { useEffect, useState } from "react";

export const People = () => {
  const [people, setPeople] = useState([]);
  const fetchPeople = async () => {
    let response = await fetch("https://swapi.dev/api/people/?format=json");
    let data = await response.json();
    setPeople(data.results);
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <h1>People</h1>
    </>
  );
};
