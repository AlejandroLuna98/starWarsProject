import React, { useEffect, useState } from "react";
import { CardPeople } from "./UI/CardPeople";
import * as ReactBootStrap from "react-bootstrap";
import { PeopleScreen } from "./UI/PeopleScreen";
export const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [actual, setActual] = useState(`https://swapi.dev/api/people/?page=1`);

  const fetchPeople = async (page) => {
    return fetch(page);
  };
  useEffect(() => {
    fetchPeople(actual)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { results, next, previous } = data;
        // console.log(results);
        setLoading(true);
        setPreviousPage(previous);
        setNextPage(next);
        setPeople(results);
        // console.log(previous, actual, next);
      });
  }, [actual]);

  return (
    <>
      <div className="container container-screens rounded mt-4  animate__animated  animate__fadeIn ">
        <h1 className="text-center my-2 py-3">People </h1>

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
            people.map((people, id) => {
              return <CardPeople people={people} key={id} />;
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
