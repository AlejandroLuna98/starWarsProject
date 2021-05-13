import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const PeopleScreen = () => {
  const [people, setPeople] = useState(`https://swapi.dev/api/people/${[]}`);
  let {} = useParams();

  const fetchPeople = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    fetchPeople(people)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { results } = data;
        // console.log(results)
        setPeople(results);
        // console.log(previous, actual, next);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>PeopleScreen Component</h1>
    </div>
  );
};
