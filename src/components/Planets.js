import React, { useEffect, useState } from "react";
import { CardPlanets } from "./UI/CardPlanets";
import * as ReactBootStrap from "react-bootstrap";
export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [actual, setActual] = useState(`https://swapi.dev/api/planets/?page=1`);

  const fetchPlanets = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    fetchPlanets(actual)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { results, next, previous } = data;
        setLoading(true);
        setPreviousPage(previous);
        setNextPage(next);
        setPlanets(results);
      });
  }, [actual]);

  return (
    <>
      <div className="container container-screens rounded mt-4 animate__animated  animate__fadeIn">
        <h1 className="text-center my-2 py-3">Planets </h1>

        <div className="row  justify-content-center mb-3">
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
            className="btn col-4 col-md-3 btn btn-warning mx-2 fw-bold"
            value="Next"
          />
          <input
            onClick={() => {
              if (previousPage !== null) {
                setActual(previousPage);
                setNextPage(actual);
              } else {
                console.log("error");
              }
            }}
            type="submit"
            className="btn col-4 col-md-3 btn btn-warning mx-2 fw-bold"
            value="Previous"
          />
        </div>
        <div className=" row justify-content-center mb-3 pb-4 mx-2 px-0 animate__animated  animate__fadeIn">
          {loading ? (
            planets.map((planets, id) => {
              return <CardPlanets planets={planets} key={id} />;
            })
          ) : (
            <ReactBootStrap.Spinner animation="grow" variant="warning" />
          )}
          {}
        </div>
      </div>
    </>
  );
};
