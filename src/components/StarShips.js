import React, { useEffect, useState } from "react";
import { CardStarShips } from "./UI/CardStarShips";
import * as ReactBootStrap from "react-bootstrap";
export const StarShips = () => {
  const [starShips, setStarShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [actual, setActual] = useState(
    `https://swapi.dev/api/starships/?page=1`
  );

  const fetchStarShips = async (page) => {
    return fetch(page);
  };

  useEffect(() => {
    fetchStarShips(actual)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { results, next, previous } = data;
        setLoading(true);
        setPreviousPage(previous);
        setNextPage(next);
        setStarShips(results);
      });
  }, [actual]);

  return (
    <>
      <div className="container container-screens rounded mt-4 animate__animated  animate__fadeIn">
        <h1 className="text-center my-2 py-3">StarShips Screen</h1>

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
            className="btn col-4 col-md-3 btn btn-warning mx-2"
            value="+10"
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
            className="btn col-4 col-md-3 btn btn-warning mx-2"
            value="-10"
          />
        </div>
        <div className=" row justify-content-center mb-3 pb-4 mx-2 px-0 animate__animated  animate__fadeIn">
          {loading ? (
            starShips.map((starShips, id) => {
              return <CardStarShips starShips={starShips} key={id} />;
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
