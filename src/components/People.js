import React, { useEffect, useState } from "react";
import { Card } from "./UI/Card";
import { Search } from "./UI/Search";
export const People = () => {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [actual, setActual] = useState(`https://swapi.dev/api/people/?page=1`);

  const fetchPeople = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    fetchPeople(actual)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        let { results, next, previous } = data;
        results.map((people) => {
          return {
            name: people.name,
            height: people.height,
            mass: people.mass,
            hair: people.hair_color,
            eyes: people.eye_color,
            birth: people.birth_year,
            gender: people.gender,
          };
        });
        setPreviousPage(previous);
        setNextPage(next);
        setPeople(results);
        console.log(previous, actual, next);
      });
  }, [actual]);

  return (
    <>
      <h1 className="text-center my-2">People Screen</h1>
      <div className="container ">
        <div className="row py-4 ">
          <Search setSearch={setSearch} />
        </div>

        <div className=" row justify-content-center mb-3">
          <input
            onClick={() => {
              if (nextPage !== null) {
                setPreviousPage(actual);
                setActual(nextPage);
              } else {
                // console.log("error");
              }
            }}
            type="submit"
            className="btn btn-large btn-dark mx-2"
            value="+10"
          />
          <input
            onClick={() => {
              if (previousPage !== null) {
                setActual(previousPage);
                setNextPage(actual);
              } else {
                // console.log("error");
              }
            }}
            type="submit"
            className="btn btn-large btn-dark mx-2"
            value="-10"
          />
          {people.map((people, id) => {
            return <Card people={people} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};
