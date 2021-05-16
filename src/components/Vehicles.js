import React, { useEffect, useState } from "react";
import { CardVehicles } from "./UI/CardVehicles";

import * as ReactBootStrap from "react-bootstrap";
export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [actual, setActual] = useState(
    `https://swapi.dev/api/vehicles/?page=1`
  );

  const fetchVehicles = async (page) => {
    return fetch(page);
  };

  useEffect(() => {
    fetchVehicles(actual)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { results, next, previous } = data;
        // console.log(results);
        setLoading(true);
        setPreviousPage(previous);
        setNextPage(next);
        setVehicles(results);
        // console.log(previous, actual, next);
      });
  }, [actual]);

  return (
    <>
      <div className="container container-screens rounded mt-4 animate__animated  animate__fadeIn">
        <h1 className="text-center my-2 py-3">Vehicles </h1>

        <div className="row  justify-content-center mb-3">
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
        </div>
        <div className=" row justify-content-center mb-3 pb-4 mx-2 px-0 animate__animated  animate__fadeIn">
          {loading ? (
            vehicles.map((vehicles, id) => {
              return <CardVehicles vehicles={vehicles} key={id} />;
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
